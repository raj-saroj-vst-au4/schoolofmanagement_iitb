"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Course = { name: string; credits: number };
type Term = { label: string; credits: number; courses: Course[]; accent: string };

const terms: Term[] = [
  {
    label: "Term 1", credits: 20, accent: "#1E5FFF",
    courses: [
      { name: "Communication & Interpersonal Skills", credits: 4 },
      { name: "Microeconomics", credits: 4 },
      { name: "Financial & Managerial Accounting", credits: 4 },
      { name: "Marketing Management I", credits: 4 },
      { name: "Statistical Methods", credits: 4 },
    ],
  },
  {
    label: "Term 2", credits: 24, accent: "#C9A96E",
    courses: [
      { name: "Corporate Finance I", credits: 4 },
      { name: "Macroeconomics", credits: 4 },
      { name: "Decision Models in Management", credits: 4 },
      { name: "Information Systems", credits: 4 },
      { name: "Marketing Management II", credits: 4 },
      { name: "Operations Management I", credits: 4 },
    ],
  },
  {
    label: "Term 3", credits: 20, accent: "#D63638",
    courses: [
      { name: "Corporate Finance II", credits: 4 },
      { name: "OB & HR I", credits: 4 },
      { name: "Operations Management II", credits: 4 },
      { name: "Technology Management", credits: 4 },
      { name: "Corporate Strategy", credits: 4 },
    ],
  },
  {
    label: "Term 4", credits: 16, accent: "#7C5CFF",
    courses: [
      { name: "Business Research Methods", credits: 4 },
      { name: "OB & HR II", credits: 4 },
      { name: "Corporate Governance & Business", credits: 4 },
      { name: "Ethics & Legal Aspects of Business", credits: 4 },
    ],
  },
];

export function Curriculum() {
  return (
    <Box as="section" id="curriculum" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Core Curriculum
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            The first-year bones.
          </Heading>
          <Text color="brand.chalk" maxW="2xl">
            Eighty credits across four terms. Built to give every graduate a
            common vocabulary across functions.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={5}>
          {terms.map((t) => (
            <Box
              key={t.label}
              p={6}
              borderRadius="xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
              transition="all 200ms ease"
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={t.accent} opacity={0.8} />
              <VStack align="stretch" spacing={5}>
                <HStack justify="space-between">
                  <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color={t.accent} fontWeight={600}>
                    {t.label}
                  </Text>
                  <Text fontSize="xs" color="brand.mist" fontFamily="mono">
                    {t.credits} cr
                  </Text>
                </HStack>
                <VStack align="stretch" spacing={2.5}>
                  {t.courses.map((c) => (
                    <HStack key={c.name} justify="space-between" pb={2.5} borderBottom="1px solid rgba(255,255,255,0.05)">
                      <Text fontSize="sm" color="brand.chalk" lineHeight={1.3}>{c.name}</Text>
                      <Text fontSize="xs" color="brand.mist" fontFamily="mono">{c.credits}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
