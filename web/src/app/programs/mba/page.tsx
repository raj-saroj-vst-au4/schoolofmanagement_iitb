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
import { Fees } from "@/components/mba/Fees";
import { MBAFaq } from "@/components/mba/FAQ";

export const metadata: Metadata = {
  title: "MBA — SJMSOM, IIT Bombay",
  description:
    "A full-time 2-year MBA with a technology-management focus, taught alongside the engineers and scientists of IIT Bombay. Admissions 2025–27 now open.",
};

export default function MBAPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <MBAHero />
      <Overview />
      <Structure />
      <Curriculum />
      <Admissions />
      <Fees />
      <MBAFaq />
      <FooterCTA />
    </Box>
  );
}
