import type { Metadata } from "next";
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ResearchHub } from "@/components/research/ResearchHub";
import { facultyResearch, flatten } from "@/lib/aggregate";

const faculty = facultyResearch();
const projectEntries = flatten("projects");
const pubEntries = flatten("publications");

// Count each interest topic across faculty (case-insensitive dedupe)
const interestMap = new Map<string, { text: string; count: number }>();
for (const f of faculty) {
  for (const i of f.interests) {
    const key = i.toLowerCase().trim();
    const cur = interestMap.get(key);
    if (cur) cur.count++;
    else interestMap.set(key, { text: i.trim(), count: 1 });
  }
}
const topInterests = [...interestMap.values()]
  .sort((a, b) => b.count - a.count || a.text.localeCompare(b.text))
  .slice(0, 40);

const activeFacultyCount = faculty.filter(
  (f) => f.interests.length || f.projects.length || f.publicationCount,
).length;

export const metadata: Metadata = {
  title: "Research — SJMSOM, IIT Bombay",
  description: `Research at SJMSOM spans ${interestMap.size}+ topics across ${activeFacultyCount} core faculty — ${projectEntries.length} active projects and ${pubEntries.length} publications.`,
};

export default function ResearchPage() {
  const stats = [
    { value: String(interestMap.size), label: "Research topics" },
    { value: String(projectEntries.length), label: "Funded projects" },
    { value: String(pubEntries.length), label: "Publications" },
  ];

  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />

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
        <Box position="absolute" inset={0} bgGradient="radial(circle at 50% 50%, rgba(124,92,255,0.15) 0%, transparent 60%)" />
        <Container maxW="7xl" position="relative" zIndex={2}>
          <VStack align="flex-start" spacing={6} maxW="4xl">
            <HStack spacing={3}>
              <Box w="6px" h="6px" borderRadius="full" bg="#7C5CFF" boxShadow="0 0 12px #7C5CFF" />
              <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
                Research
              </Text>
            </HStack>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              lineHeight={0.95}
              letterSpacing="-0.04em"
              fontWeight={600}
            >
              Research at
              <br />
              <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
                the school of management.
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
              Across strategy, technology, finance, operations, marketing, HR, economics and
              more — our faculty publish in top journals and lead funded research across
              the country.
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

      <ResearchHub faculty={faculty} topInterests={topInterests} />
      <FooterCTA />
    </Box>
  );
}
