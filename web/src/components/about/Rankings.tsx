"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Ranking = {
  label: string;
  headline: string;
  tag: string;
  rows: { year: string; value: string }[];
  accent: string;
};

const rankings: Ranking[] = [
  {
    label: "Institute of Eminence",
    headline: "Govt. of India",
    tag: "Status conferred",
    rows: [{ year: "2018", value: "IoE" }],
    accent: "#C9A96E",
  },
  {
    label: "QS World Ranking",
    headline: "Business & Management",
    tag: "India position",
    rows: [
      { year: "2024", value: "#5 India" },
      { year: "2023", value: "#5 India" },
      { year: "2022", value: "#5 India" },
    ],
    accent: "#1E5FFF",
  },
  {
    label: "NIRF Ranking",
    headline: "Management",
    tag: "India position",
    rows: [
      { year: "2024", value: "#10" },
      { year: "2023", value: "#10" },
      { year: "2022", value: "#11" },
    ],
    accent: "#D63638",
  },
];

export function Rankings() {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Rankings & Achievements
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" maxW="3xl" lineHeight={1.05}>
            Recognition of excellence
            <br />
            <Box as="span" color="brand.mist">in management education.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {rankings.map((r) => (
            <Box
              key={r.label}
              position="relative"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="3px"
                bg={r.accent}
                opacity={0.8}
              />
              <VStack align="flex-start" spacing={6}>
                <Box>
                  <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color={r.accent} fontWeight={600}>
                    {r.label}
                  </Text>
                  <Heading fontSize="2xl" letterSpacing="-0.02em" mt={2}>
                    {r.headline}
                  </Heading>
                </Box>
                <Text fontSize="xs" color="brand.mist" letterSpacing="0.1em" textTransform="uppercase">
                  {r.tag}
                </Text>
                <VStack align="stretch" spacing={2} w="full">
                  {r.rows.map((row) => (
                    <HStack
                      key={row.year}
                      justify="space-between"
                      pb={2}
                      borderBottom="1px solid rgba(255,255,255,0.06)"
                    >
                      <Text fontSize="sm" color="brand.mist" fontFamily="mono">
                        {row.year}
                      </Text>
                      <Text fontSize="lg" fontWeight={600} color="white">
                        {row.value}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Text pt={10} fontSize="sm" color="brand.mist" fontStyle="italic" maxW="3xl">
          While rankings provide a useful basis for decision-making, they vary greatly in their
          methods and focus.
        </Text>
      </Container>
    </Box>
  );
}
