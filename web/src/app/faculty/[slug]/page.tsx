import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PinnedProfile } from "@/components/faculty/profile/PinnedProfile";
import detailData from "@/data/faculty-detail.json";

type Section = { heading: string; items: string[]; paragraphs: string[] };
type Profile = {
  slug: string;
  name: string;
  degree: string;
  area: string;
  img: string;
  bio?: string;
  title?: string | null;
  email?: string | null;
  homepage?: string | null;
  linkedin?: string | null;
  sections: Record<string, Section>;
  extraSections?: Section[];
};

const profiles = detailData as unknown as Profile[];

export function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = profiles.find((x) => x.slug === slug);
  if (!p) return { title: "Faculty not found — SJMSOM" };
  const short =
    p.bio?.split(".").slice(0, 2).join(".").trim() ||
    `${p.area} at SJMSOM, IIT Bombay.`;
  return {
    title: `${p.name} — SJMSOM, IIT Bombay`,
    description: short.slice(0, 200),
  };
}

export default async function FacultyProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = profiles.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <PinnedProfile
        name={p.name}
        title={p.title}
        area={p.area}
        degree={p.degree}
        img={p.img}
        bio={p.bio}
        email={p.email}
        homepage={p.homepage}
        linkedin={p.linkedin}
        sections={p.sections}
        extraSections={p.extraSections ?? []}
      />
      <FooterCTA />
    </Box>
  );
}
