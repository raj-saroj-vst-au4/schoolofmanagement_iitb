import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PhDHero } from "@/components/phd/Hero";
import { Overview } from "@/components/phd/Overview";
import { Eligibility } from "@/components/phd/Eligibility";
import { Structure } from "@/components/phd/Structure";
import { ResearchAreas } from "@/components/phd/ResearchAreas";
import { Admissions } from "@/components/phd/Admissions";
import { PhDFaq } from "@/components/phd/FAQ";

export const metadata: Metadata = {
  title: "Doctoral Programme — SJMSOM, IIT Bombay",
  description:
    "A 4–5 year, 108-credit PhD in Management at SJMSOM, IIT Bombay — coursework and research across strategy, technology, finance, operations and more.",
};

export default function PhDPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <PhDHero />
      <Overview />
      <Eligibility />
      <Structure />
      <ResearchAreas />
      <Admissions />
      <PhDFaq />
      <FooterCTA />
    </Box>
  );
}
