"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const learning = [
  "Case Studies",
  "Lectures & Discussions",
  "Simulation Games",
  "Collaborative Learning",
  "Experiential Learning",
];
const practical = [
  { tag: "Mandatory", note: "2-month summer internship in industry" },
  { tag: "Optional", note: "1-month winter project" },
  { tag: "Ongoing", note: "Live projects embedded in coursework (3–6 months)" },
];
const y2 = ["Finance", "Marketing", "Operations", "Strategy", "HR & OB", "Entrepreneurship"];

const timeline = [
  { term: "T1", season: "Autumn", year: "Y1", credits: 20, band: "core" },
  { term: "T2", season: "Autumn", year: "Y1", credits: 24, band: "core" },
  { term: "T3", season: "Spring", year: "Y1", credits: 20, band: "core" },
  { term: "T4", season: "Spring", year: "Y1", credits: 16, band: "core" },
  { term: "SP", season: "Summer", year: "Break", credits: 2, band: "project" },
  { term: "T5", season: "Autumn", year: "Y2", credits: 16, band: "elective" },
  { term: "T6", season: "Autumn", year: "Y2", credits: 16, band: "elective" },
  { term: "T7", season: "Spring", year: "Y2", credits: 13, band: "elective" },
  { term: "T8", season: "Spring", year: "Y2", credits: 12, band: "elective" },
];

const bandColor = {
  core: "#1E5FFF",
  project: "#D63638",
  elective: "#C9A96E",
} as const;
const bandLabel = {
  core: "Core",
  project: "Project",
  elective: "Electives",
} as const;

export function Structure() {
  const maxCredits = Math.max(...timeline.map((t) => t.credits));

  return (
    <Box as="section" id="structure" py={{ base: 20, md: 28 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Program Structure
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Two years, eight terms.
          </Heading>
        </VStack>

        {/* Program timeline diagram */}
        <Box
          p={{ base: 6, md: 10 }}
          borderRadius="2xl"
          bg="brand.graphite"
          border="1px solid rgba(255,255,255,0.06)"
          mb={{ base: 8, md: 14 }}
          overflowX="auto"
        >
          <HStack justify="space-between" mb={6} flexWrap="wrap" gap={3}>
            <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.mist" fontWeight={600}>
              Credit load across terms
            </Text>
            <HStack spacing={4} flexWrap="wrap">
              {(["core", "project", "elective"] as const).map((b) => (
                <HStack key={b} spacing={2}>
                  <Box w="10px" h="10px" borderRadius="sm" bg={bandColor[b]} />
                  <Text fontSize="xs" color="brand.chalk">{bandLabel[b]}</Text>
                </HStack>
              ))}
            </HStack>
          </HStack>

          <Box minW={{ base: "720px", md: "auto" }}>
            <HStack spacing={2} align="flex-end" h="180px" mb={3}>
              {timeline.map((t) => (
                <VStack key={t.term} flex="1" spacing={1} align="stretch" h="full" justify="flex-end">
                  <Text fontSize="xs" color="white" fontFamily="mono" textAlign="center" fontWeight={600}>
                    {t.credits}
                  </Text>
                  <Box
                    h={`${(t.credits / maxCredits) * 140}px`}
                    bg={bandColor[t.band as keyof typeof bandColor]}
                    borderRadius="sm"
                    opacity={0.85}
                    position="relative"
                    _hover={{ opacity: 1 }}
                    transition="opacity 150ms ease"
                  />
                </VStack>
              ))}
            </HStack>

            {/* Axis labels */}
            <HStack spacing={2} mb={1}>
              {timeline.map((t) => (
                <VStack key={t.term} flex="1" spacing={0}>
                  <Text fontSize="xs" color="white" fontWeight={600} letterSpacing="0.05em">
                    {t.term}
                  </Text>
                </VStack>
              ))}
            </HStack>
            <HStack spacing={2} mb={3}>
              {timeline.map((t) => (
                <VStack key={t.term} flex="1" spacing={0}>
                  <Text fontSize="2xs" color="brand.mist" letterSpacing="0.08em" textTransform="uppercase">
                    {t.season}
                  </Text>
                </VStack>
              ))}
            </HStack>

            {/* Year bands */}
            <HStack spacing={2}>
              <Box flex="4" borderRadius="md" bg="rgba(30,95,255,0.08)" border="1px solid rgba(30,95,255,0.2)" py={2} textAlign="center">
                <Text fontSize="xs" color="brand.iitBlue" fontWeight={600} letterSpacing="0.18em" textTransform="uppercase">
                  Year 1 · 80 credits
                </Text>
              </Box>
              <Box flex="1" borderRadius="md" bg="rgba(214,54,56,0.08)" border="1px solid rgba(214,54,56,0.2)" py={2} textAlign="center">
                <Text fontSize="2xs" color="brand.iitRed" fontWeight={600} letterSpacing="0.12em" textTransform="uppercase">
                  Summer
                </Text>
              </Box>
              <Box flex="4" borderRadius="md" bg="rgba(201,169,110,0.08)" border="1px solid rgba(201,169,110,0.2)" py={2} textAlign="center">
                <Text fontSize="xs" color="brand.gold" fontWeight={600} letterSpacing="0.18em" textTransform="uppercase">
                  Year 2 · 57 credits
                </Text>
              </Box>
            </HStack>
          </Box>

          <HStack justify="flex-end" mt={4}>
            <Text fontSize="xs" color="brand.mist" fontStyle="italic">
              Programme total · 137 credits
            </Text>
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {/* Year 1 */}
          <Box p={{ base: 8, md: 12 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
            <Box position="absolute" top={0} left={0} right={0} h="2px" bg="#1E5FFF" opacity={0.8} />
            <VStack align="flex-start" spacing={6}>
              <HStack justify="space-between" w="full">
                <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="#1E5FFF" fontWeight={600}>First Year</Text>
                <Text fontSize="sm" color="brand.mist" fontFamily="mono">80 credits</Text>
              </HStack>
              <Heading fontSize="3xl" letterSpacing="-0.03em">A strong foundation</Heading>
              <Text color="brand.chalk" lineHeight={1.7}>
                23 core courses across 4 terms, laying the groundwork in economics, finance,
                marketing, operations, statistics, organisational behaviour and strategy.
              </Text>

              <Box w="full" pt={2}>
                <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.mist" mb={3}>
                  Learning methodology
                </Text>
                <HStack flexWrap="wrap" spacing={2} rowGap={2}>
                  {learning.map((l) => (
                    <Box key={l} px={3} py={1.5} borderRadius="full" border="1px solid rgba(255,255,255,0.12)" fontSize="xs" color="brand.chalk">
                      {l}
                    </Box>
                  ))}
                </HStack>
              </Box>

              <Box w="full" pt={2}>
                <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.mist" mb={3}>
                  Practical experience
                </Text>
                <VStack align="stretch" spacing={2.5}>
                  {practical.map((p) => (
                    <HStack key={p.note} spacing={3} pb={2.5} borderBottom="1px solid rgba(255,255,255,0.06)">
                      <Text w="90px" fontSize="xs" color="brand.gold" fontWeight={600} letterSpacing="0.1em" textTransform="uppercase">
                        {p.tag}
                      </Text>
                      <Text fontSize="sm" color="brand.chalk">{p.note}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Year 2 */}
          <Box p={{ base: 8, md: 12 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
            <Box position="absolute" top={0} left={0} right={0} h="2px" bg="#C9A96E" opacity={0.8} />
            <VStack align="flex-start" spacing={6}>
              <HStack justify="space-between" w="full">
                <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="#C9A96E" fontWeight={600}>Second Year</Text>
                <Text fontSize="sm" color="brand.mist" fontFamily="mono">57 credits</Text>
              </HStack>
              <Heading fontSize="3xl" letterSpacing="-0.03em">Flex, focus, specialise</Heading>
              <Text color="brand.chalk" lineHeight={1.7}>
                Elective-driven across your chosen management domain. Design your second
                year from a broad menu of advanced courses — 12–18 elective credits per term.
              </Text>

              <Box w="full" pt={2}>
                <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.mist" mb={3}>
                  Specialisation areas
                </Text>
                <SimpleGrid columns={2} spacing={3}>
                  {y2.map((s) => (
                    <HStack key={s} spacing={3} p={3} borderRadius="md" bg="rgba(255,255,255,0.03)">
                      <Box w="4px" h="4px" borderRadius="full" bg="brand.gold" />
                      <Text fontSize="sm" color="brand.chalk">{s}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>

              <Text fontSize="xs" color="brand.mist" fontStyle="italic" pt={2}>
                The MBA is a general degree with optional specialisations in Finance and
                Operations Management.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
