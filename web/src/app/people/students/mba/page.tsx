import type { Metadata } from "next";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MBAStudents } from "@/components/students/MBAStudents";
import studentsData from "@/data/students.json";
import type { MBAStudent } from "@/components/students/StudentCard";

type Batch = { year: number; status: "year-1" | "year-2" | "alumni"; students: MBAStudent[] };

const data = studentsData as unknown as { mba: { batches: Batch[] } };
const batches = data.mba.batches;

const totalStudents = batches.reduce((n, b) => n + b.students.length, 0);
const currentStudents = batches
  .filter((b) => b.status !== "alumni")
  .reduce((n, b) => n + b.students.length, 0);
const alumniCount = totalStudents - currentStudents;
const oldestYear = Math.min(...batches.map((b) => b.year));
const newestYear = Math.max(...batches.map((b) => b.year));

export const metadata: Metadata = {
  title: "MBA Students — SJMSOM, IIT Bombay",
  description: `${totalStudents} students across ${batches.length} batches of the SJMSOM MBA programme (${oldestYear}–${newestYear}).`,
};

export default function MBAStudentsPage() {
  const stats = [
    { value: String(currentStudents), label: "Current students" },
    { value: String(alumniCount), label: "Alumni" },
    { value: `${oldestYear}–${newestYear}`, label: "Batches in record" },
  ];

  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />

      {/* Hero */}
      <Box
        as="section"
        position="relative"
        minH={{ base: "55vh", md: "60vh" }}
        overflow="hidden"
        bg="brand.ink"
        display="flex"
        alignItems="flex-end"
        pt={{ base: 28, md: 32 }}
        pb={{ base: 14, md: 20 }}
      >
        <Box position="absolute" inset={0} bgGradient="radial(circle at 35% 50%, rgba(30,95,255,0.18) 0%, transparent 60%)" />
        <Container maxW="7xl" position="relative" zIndex={2}>
          <VStack align="flex-start" spacing={6} maxW="4xl">
            <HStack spacing={3}>
              <Box w="6px" h="6px" borderRadius="full" bg="brand.iitBlue" boxShadow="0 0 12px #1E5FFF" />
              <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
                MBA Students
              </Text>
            </HStack>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              lineHeight={0.95}
              letterSpacing="-0.04em"
              fontWeight={600}
            >
              Every cohort
              <br />
              <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
                that walked through Powai.
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
              {totalStudents.toLocaleString()} students across {batches.length} batches — current
              Year 1 and Year 2 highlighted first, with every alumni batch a click away.
            </Text>

            <SimpleGrid columns={3} spacing={{ base: 4, md: 10 }} pt={4} w="full" maxW="3xl">
              {stats.map((s) => (
                <VStack key={s.label} align="flex-start" spacing={1}>
                  <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={600} letterSpacing="-0.04em" lineHeight={1} color="white">
                    {s.value}
                  </Text>
                  <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" pt={1}>
                    {s.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <MBAStudents batches={batches} />
      <FooterCTA />
    </Box>
  );
}
