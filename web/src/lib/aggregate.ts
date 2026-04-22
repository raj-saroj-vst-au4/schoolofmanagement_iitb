import detailData from "@/data/faculty-detail.json";
import awardsData from "@/data/awards.json";

// ---------- Awards (unified) ----------

export type AwardLink = { label: string; url: string };

export type Award = {
  id: string;
  kind: "faculty" | "student";
  title: string;
  writeup: string;
  year: number | null;
  date?: string;
  images: string[];
  links: AwardLink[];
  // student fields
  event?: string;
  recipient: string;
  batch?: string;
  team?: string;
  // faculty fields
  facultySlug?: string;
  facultyName?: string;
  facultyArea?: string;
  facultyImg?: string;
};

export const awards: Award[] = awardsData as Award[];

/** Most-recent-first sort, using `date` when available and falling back to `year`. */
function awardRank(a: Award): number {
  if (a.date) return new Date(a.date).getTime();
  if (a.year != null) return new Date(a.year, 11, 31).getTime();
  return -Infinity;
}

export const awardsSorted: Award[] = [...awards].sort((a, b) => awardRank(b) - awardRank(a));

export const facultyAwards: Award[] = awardsSorted.filter((a) => a.kind === "faculty");
export const studentAwards: Award[] = awardsSorted.filter((a) => a.kind === "student");

/** Awards by a given faculty slug, most-recent first. */
export function awardsByFaculty(slug: string): Award[] {
  return facultyAwards.filter((a) => a.facultySlug === slug);
}

// ---------- Faculty profiles ----------

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

const awardItemsBySlug = facultyAwards.reduce<Record<string, string[]>>((acc, a) => {
  if (!a.facultySlug) return acc;
  (acc[a.facultySlug] ||= []).push(a.writeup);
  return acc;
}, {});

/** Profiles enriched with `sections.awards` synthesised from the unified awards feed. */
export const profiles: AggProfile[] = (detailData as unknown as AggProfile[]).map((p) => {
  const items = awardItemsBySlug[p.slug];
  if (!items || items.length === 0) return p;
  const awardsSection: AggSection = { heading: "Awards", items, paragraphs: [] };
  return { ...p, sections: { ...p.sections, awards: awardsSection } };
});

/** Flattened entry from one faculty's section list. Preserved for non-award sections. */
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
