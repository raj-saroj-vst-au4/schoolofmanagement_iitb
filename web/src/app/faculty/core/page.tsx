import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CoreFacultyHero } from "@/components/faculty/CoreHero";
import { CoreFacultyGrid } from "@/components/faculty/CoreGrid";
import facultyData from "@/data/faculty.json";

type Faculty = { area: string };
const facultyList = facultyData as Faculty[];
const areaCount = new Set(facultyList.map((f) => f.area)).size;

export const metadata: Metadata = {
  title: `Core Faculty — SJMSOM, IIT Bombay`,
  description: `Meet the ${facultyList.length} core faculty of the Shailesh J. Mehta School of Management — PhDs from IITs, IIMs, Wharton, Temple, IGIDR and beyond.`,
};

export default function CoreFacultyPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <CoreFacultyHero count={facultyList.length} areaCount={areaCount} />
      <CoreFacultyGrid />
      <FooterCTA />
    </Box>
  );
}
