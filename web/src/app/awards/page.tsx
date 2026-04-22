import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AwardsHub } from "@/components/research/AwardsHub";
import { facultyAwards, studentAwards } from "@/lib/aggregate";

const uniqueFaculty = new Set(facultyAwards.map((a) => a.facultySlug).filter(Boolean)).size;
const facultyWithYear = facultyAwards.filter((a) => a.year !== null);
const earliestFacultyYear = facultyWithYear.length
  ? Math.min(...facultyWithYear.map((a) => a.year!))
  : null;

const studentWithYear = studentAwards.filter((a) => a.year !== null);
const studentEarliestYear = studentWithYear.length
  ? Math.min(...studentWithYear.map((a) => a.year!))
  : null;

export const metadata: Metadata = {
  title: "Awards & honours — SJMSOM, IIT Bombay",
  description: `${facultyAwards.length} faculty awards and ${studentAwards.length} student awards from SJMSOM, IIT Bombay.`,
};

export default function AwardsPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <AwardsHub
        facultyEntries={facultyAwards}
        studentEntries={studentAwards}
        stats={{
          facultyCount: facultyAwards.length,
          uniqueFaculty,
          earliestYear: earliestFacultyYear,
          studentCount: studentAwards.length,
          studentEarliestYear,
        }}
      />
      <FooterCTA />
    </Box>
  );
}
