import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProgramStack } from "@/components/ProgramStack";
import { Pedigree } from "@/components/Pedigree";
import { AlumniGlobe } from "@/components/AlumniGlobe";
import { DayAtSJMSOM } from "@/components/DayAtSJMSOM";
import { FacultyWall } from "@/components/FacultyWall";
import { ResearchUniverse } from "@/components/ResearchUniverse";
import { Placements } from "@/components/Placements";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <Hero />
      <Marquee />
      <ProgramStack />
      <Pedigree />
      <AlumniGlobe />
      <DayAtSJMSOM />
      <FacultyWall />
      <ResearchUniverse />
      <Placements />
      <FooterCTA />
    </Box>
  );
}
