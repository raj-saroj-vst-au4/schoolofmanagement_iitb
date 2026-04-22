import detailData from "@/data/faculty-detail.json";

export type AggSection = { heading: string; items: string[]; paragraphs: string[] };
export type AggProfile = {
  slug: string;
  name: string;
  degree: string;
  area: string;
  img: string;
  bio?: string;
  title?: string | null;
  email?: string | null;
  sections: Record<string, AggSection>;
};

export const profiles = detailData as unknown as AggProfile[];

/** Flattened entry from one faculty's section list. */
export type Entry = {
  text: string;
  facultySlug: string;
  facultyName: string;
  facultyArea: string;
  facultyImg: string;
  year: number | null;
};

const YEAR_RE = /\b(19[89]\d|20\d{2})\b/;

export function extractYear(text: string): number | null {
  const m = text.match(YEAR_RE);
  if (!m) return null;
  const y = Number(m[1]);
  if (y < 1970 || y > 2100) return null;
  return y;
}

export function flatten(sectionKey: "publications" | "awards" | "projects"): Entry[] {
  const out: Entry[] = [];
  for (const p of profiles) {
    const items = p.sections?.[sectionKey]?.items ?? [];
    for (const text of items) {
      out.push({
        text,
        facultySlug: p.slug,
        facultyName: p.name,
        facultyArea: p.area,
        facultyImg: p.img,
        year: extractYear(text),
      });
    }
  }
  return out;
}

/** For the research page: per-faculty summary. */
export type FacultyResearch = {
  slug: string;
  name: string;
  area: string;
  img: string;
  title?: string | null;
  interests: string[];
  projects: string[];
  publicationCount: number;
};

export function facultyResearch(): FacultyResearch[] {
  return profiles.map((p) => ({
    slug: p.slug,
    name: p.name,
    area: p.area,
    img: p.img,
    title: p.title ?? null,
    interests: p.sections?.researchInterests?.items ?? [],
    projects: p.sections?.projects?.items ?? [],
    publicationCount: p.sections?.publications?.items?.length ?? 0,
  }));
}

/** Area groups (same logic as Core faculty grid) — so the filter is consistent site-wide. */
export type AreaGroup = { key: string; label: string; match: (area: string) => boolean };
export const areaGroups: AreaGroup[] = [
  { key: "all",          label: "All",                   match: () => true },
  { key: "finance",      label: "Finance & Accounting",  match: (a) => /finance|accounting/i.test(a) },
  { key: "marketing",    label: "Marketing",             match: (a) => /marketing|branding/i.test(a) },
  { key: "operations",   label: "Operations & Decision", match: (a) => /operations|decision|statistics|quality|supply/i.test(a) },
  { key: "strategy",     label: "Strategy",              match: (a) => /strategy|competitiveness|international/i.test(a) },
  { key: "economics",    label: "Economics",             match: (a) => /economics|policy/i.test(a) },
  { key: "info-systems", label: "Information Systems",   match: (a) => /information|technology|systems/i.test(a) },
  { key: "hr-ob",        label: "OB & HR",               match: (a) => /organisation|ob|hr|organizational/i.test(a) },
];
