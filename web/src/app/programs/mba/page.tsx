import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MBAHero } from "@/components/mba/Hero";
import { Overview } from "@/components/mba/Overview";
import { Structure } from "@/components/mba/Structure";
import { Curriculum } from "@/components/mba/Curriculum";
import { Admissions } from "@/components/mba/Admissions";
import { ApplicationProcess } from "@/components/mba/ApplicationProcess";
import { International } from "@/components/mba/International";
import { Rankings } from "@/components/mba/Rankings";
import { Resources } from "@/components/mba/Resources";
import { MBAFaq } from "@/components/mba/FAQ";

export const metadata: Metadata = {
  title: "MBA — SJMSOM, IIT Bombay",
  description:
    "A full-time 2-year MBA with a technology-management focus, taught alongside the engineers and scientists of IIT Bombay. Admissions 2026–28.",
};

export default function MBAPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <MBAHero />
      <Overview />
      <Rankings />
      <Structure />
      <Curriculum />
      <Admissions />
      <ApplicationProcess />
      <International />
      <Resources />
      <MBAFaq />
      <FooterCTA />
    </Box>
  );
}
