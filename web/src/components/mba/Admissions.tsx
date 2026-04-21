"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const dates = [
  { when: "20 Dec 2024", what: "CAT 2024 Results" },
  { when: "Jan 1–31, 2025", what: "Application Period" },
  { when: "13 Feb 2025", what: "PI Shortlist" },
  { when: "6–9 Mar 2025", what: "Interviews" },
];

const disciplines = ["Engineering / Tech", "Science / Agriculture", "Commerce / Management", "Medicine", "Arts / Law / Design"];

const phase1 = [
  { k: "CAT 2024 Score", v: "75%" },
  { k: "Class 12 Marks", v: "5%" },
  { k: "Undergraduate Marks", v: "10%" },
  { k: "PG / Professional Qualification", v: "3–5%" },
  { k: "Work Experience", v: "5%" },
];
const phase2 = [
  { k: "CAT Score", v: "42.5%" },
  { k: "Personal Interview", v: "42.5%" },
  { k: "UG Performance", v: "5%" },
  { k: "Work Experience", v: "5%" },
  { k: "Extra-curricular", v: "3%" },
  { k: "PG Performance", v: "2%" },
];

const cutoffs = [
  { cat: "General / EWS", male: "48.27", female: "44.64" },
  { cat: "OBC-NCL",        male: "43.44", female: "40.18" },
  { cat: "SC / ST / PWD",  male: "32.18", female: "29.76" },
];

export function Admissions() {
  return (
    <Box as="section" id="admissions" py={{ base: 20, md: 32 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Admissions 2025–27
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            Join India&apos;s premier
            <br />
            <Box as="span" color="brand.mist">technology-focused B-school.</Box>
          </Heading>
        </VStack>

        {/* Important dates */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={{ base: 12, md: 20 }}>
          {dates.map((d) => (
            <Box key={d.what} p={6} borderRadius="xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
              <Text fontSize="xl" color="white" fontWeight={600} letterSpacing="-0.02em">
                {d.when}
              </Text>
              <Text mt={2} fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase">
                {d.what}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={{ base: 12, md: 20 }}>
          {/* Eligibility */}
          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.iitBlue" fontWeight={600} mb={5}>
              Eligibility
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <VStack align="flex-start" spacing={2}>
                <Text fontSize="sm" fontWeight={600} color="white">General / EWS</Text>
                <Text fontSize="sm" color="brand.chalk">Bachelor&apos;s degree from a recognised university</Text>
                <Text fontSize="sm" color="brand.chalk">60% marks <Box as="span" color="brand.mist">or</Box> CPI ≥ 6.5</Text>
                <Text fontSize="sm" color="brand.chalk">Valid CAT 2024 score</Text>
              </VStack>
              <VStack align="flex-start" spacing={2}>
                <Text fontSize="sm" fontWeight={600} color="white">SC / ST / PWD</Text>
                <Text fontSize="sm" color="brand.chalk">Bachelor&apos;s degree from a recognised university</Text>
                <Text fontSize="sm" color="brand.chalk">55% marks <Box as="span" color="brand.mist">or</Box> CPI ≥ 6.0</Text>
                <Text fontSize="sm" color="brand.chalk">Valid CAT 2024 score</Text>
              </VStack>
            </SimpleGrid>
          </Box>

          {/* Accepted disciplines */}
          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={5}>
              Accepted academic disciplines
            </Text>
            <Text color="brand.chalk" fontSize="sm" mb={5}>
              Candidates from all academic backgrounds are welcome. We accept applications
              from five broad categories:
            </Text>
            <HStack flexWrap="wrap" spacing={2} rowGap={2}>
              {disciplines.map((d) => (
                <Box key={d} px={3} py={1.5} borderRadius="full" border="1px solid rgba(255,255,255,0.12)" fontSize="xs" color="brand.chalk">
                  {d}
                </Box>
              ))}
            </HStack>
          </Box>
        </SimpleGrid>

        {/* Selection process */}
        <VStack align="flex-start" spacing={4} mb={10}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Selection Process
            </Text>
          </HStack>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
            Two phases. Transparent weightages.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={{ base: 10, md: 16 }}>
          {[
            { label: "Phase 1 · PI Shortlisting", weightings: phase1, accent: "#1E5FFF" },
            { label: "Phase 2 · Final Selection", weightings: phase2, accent: "#C9A96E" },
          ].map((ph) => (
            <Box key={ph.label} p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={ph.accent} opacity={0.8} />
              <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color={ph.accent} fontWeight={600} mb={5}>
                {ph.label}
              </Text>
              <VStack align="stretch" spacing={2}>
                {ph.weightings.map((w) => (
                  <HStack key={w.k} justify="space-between" pb={2.5} borderBottom="1px solid rgba(255,255,255,0.06)">
                    <Text fontSize="sm" color="brand.chalk">{w.k}</Text>
                    <Text fontSize="sm" fontFamily="mono" color="white" fontWeight={600}>{w.v}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Cutoffs */}
        <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
          <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.iitRed" fontWeight={600} mb={5}>
            PI shortlisting cutoff scores · indicative
          </Text>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
            <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" display={{ base: "none", md: "block" }}>Category</Text>
            <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" display={{ base: "none", md: "block" }}>Male</Text>
            <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" display={{ base: "none", md: "block" }}>Female</Text>
            <Box display={{ base: "none", md: "block" }} />
            {cutoffs.map((c) => (
              <Box key={c.cat} display="contents">
                <Text fontSize="sm" color="brand.chalk" fontWeight={500}>{c.cat}</Text>
                <Text fontSize="sm" color="white" fontFamily="mono">{c.male}</Text>
                <Text fontSize="sm" color="white" fontFamily="mono">{c.female}</Text>
                <Box />
              </Box>
            ))}
          </SimpleGrid>
          <Text pt={4} fontSize="xs" color="brand.mist" fontStyle="italic">
            * Cutoff scores may vary year to year based on the overall applicant pool.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
