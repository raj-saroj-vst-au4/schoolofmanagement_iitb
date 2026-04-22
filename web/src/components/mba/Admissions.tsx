"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const dates = [
  { when: "1 Jan 2026", what: "Applications open" },
  { when: "31 Jan 2026", what: "Applications close" },
  { when: "5–8 Mar 2026", what: "Personal Interviews (India)" },
  { when: "First week May 2026", what: "Final results" },
];

const disciplines = [
  "Engineering / Technology",
  "Science / Agriculture",
  "Commerce / Economics",
  "Medicine",
  "Arts / Law / Design / Other",
];

const phase1 = [
  { k: "CAT 2025 Overall Scaled Score", v: "75%" },
  { k: "Academic Profile", v: "20%" },
  { k: "Work Experience", v: "5%" },
];

const phase2 = [
  { k: "CAT 2025 Overall Score", v: "42.5%" },
  { k: "Personal Interview", v: "42.5%" },
  { k: "Undergraduate Performance", v: "5%" },
  { k: "Work Experience", v: "5%" },
  { k: "Extra-curricular Activities", v: "3%" },
  { k: "Post-Graduation", v: "2%" },
];

const cutoffs = [
  { cat: "GN / EWS", male: "42.28", female: "41.28" },
  { cat: "OBC-NC", male: "38.05", female: "37.15" },
  { cat: "SC", male: "28.19", female: "27.52" },
  { cat: "ST", male: "28.19", female: "27.52" },
  { cat: "PWD", male: "28.19", female: "27.52" },
];

const flowSteps = [
  { n: "1", label: "Application", sub: "Jan 2026", color: "#1E5FFF" },
  { n: "2", label: "Phase 1", sub: "CAT 75 · Acad 20 · WE 5", color: "#C9A96E" },
  { n: "3", label: "PI Shortlist", sub: "Composite cut-off", color: "#D63638" },
  { n: "4", label: "Personal Interview", sub: "5–8 Mar 2026", color: "#7C5CFF" },
  { n: "5", label: "Phase 2", sub: "CAT 42.5 · PI 42.5 · Profile 15", color: "#1E5FFF" },
  { n: "6", label: "Merit List", sub: "First week May 2026", color: "#C9A96E" },
];

export function Admissions() {
  return (
    <Box as="section" id="admissions" py={{ base: 20, md: 32 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Admissions 2026–28
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

        {/* Eligibility table */}
        <Box mb={{ base: 12, md: 20 }}>
          <VStack align="flex-start" spacing={4} mb={8}>
            <HStack spacing={3}>
              <Box w="24px" h="1px" bg="brand.iitBlue" />
              <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                Eligibility · Domestic
              </Text>
            </HStack>
            <Heading fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
              Who can apply.
            </Heading>
          </VStack>

          <Box p={{ base: 4, md: 6 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" overflow="hidden">
            <TableContainer>
              <Table variant="unstyled" size={{ base: "sm", md: "md" }}>
                <Thead>
                  <Tr borderBottom="1px solid rgba(255,255,255,0.08)">
                    <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={4}>
                      Category
                    </Th>
                    <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={4}>
                      Minimum marks
                    </Th>
                    <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={4}>
                      Minimum CPI
                    </Th>
                    <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={4}>
                      Entrance
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr borderBottom="1px solid rgba(255,255,255,0.05)">
                    <Td fontSize="sm" color="white" fontWeight={600} py={4}>General / EWS / OBC-NC</Td>
                    <Td fontSize="sm" color="brand.chalk" fontFamily="mono" py={4}>60%</Td>
                    <Td fontSize="sm" color="brand.chalk" fontFamily="mono" py={4}>6.5 / 10</Td>
                    <Td fontSize="sm" color="brand.chalk" py={4}>Valid CAT 2025</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="sm" color="white" fontWeight={600} py={4}>SC / ST / PWD</Td>
                    <Td fontSize="sm" color="brand.chalk" fontFamily="mono" py={4}>55%</Td>
                    <Td fontSize="sm" color="brand.chalk" fontFamily="mono" py={4}>6.0 / 10</Td>
                    <Td fontSize="sm" color="brand.chalk" py={4}>Valid CAT 2025</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Text mt={5} px={{ base: 2, md: 4 }} fontSize="xs" color="brand.mist" fontStyle="italic">
              Bachelor&apos;s degree required from a recognised university. Final-year candidates and
              those awaiting results are eligible if they have achieved the required percentage in
              exams already completed.
            </Text>
          </Box>
        </Box>

        {/* Accepted disciplines */}
        <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" mb={{ base: 12, md: 20 }}>
          <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={4}>
            Accepted academic disciplines
          </Text>
          <Text color="brand.chalk" fontSize="sm" mb={5}>
            Candidates from all academic backgrounds are welcome. Degrees are categorised into
            five broad disciplines for profile evaluation.
          </Text>
          <HStack flexWrap="wrap" spacing={2} rowGap={2}>
            {disciplines.map((d) => (
              <Box key={d} px={3} py={1.5} borderRadius="full" border="1px solid rgba(255,255,255,0.12)" fontSize="xs" color="brand.chalk">
                {d}
              </Box>
            ))}
          </HStack>
        </Box>

        {/* Selection process diagram */}
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

        <Box
          p={{ base: 6, md: 10 }}
          borderRadius="2xl"
          bg="brand.graphite"
          border="1px solid rgba(255,255,255,0.06)"
          mb={{ base: 8, md: 10 }}
          overflowX="auto"
        >
          <HStack
            spacing={0}
            align="stretch"
            minW={{ base: "700px", md: "auto" }}
          >
            {flowSteps.map((s, i) => (
              <HStack key={s.n} flex="1" spacing={0} align="stretch">
                <VStack spacing={3} flex="1" align="center" py={2}>
                  <Box
                    w="48px" h="48px"
                    borderRadius="full"
                    border="2px solid"
                    borderColor={s.color}
                    bg="rgba(5,7,10,0.6)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow={`0 0 24px ${s.color}44`}
                  >
                    <Text fontFamily="mono" fontSize="lg" color={s.color} fontWeight={600}>
                      {s.n}
                    </Text>
                  </Box>
                  <VStack spacing={1} textAlign="center">
                    <Text fontSize="sm" color="white" fontWeight={600} letterSpacing="-0.01em">
                      {s.label}
                    </Text>
                    <Text fontSize="2xs" color="brand.mist" letterSpacing="0.08em">
                      {s.sub}
                    </Text>
                  </VStack>
                </VStack>
                {i < flowSteps.length - 1 && (
                  <Box
                    alignSelf="center"
                    mt="-32px"
                    w="32px"
                    h="1px"
                    bg="linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.08))"
                    position="relative"
                    _after={{
                      content: '""',
                      position: "absolute",
                      right: 0,
                      top: "-3px",
                      borderLeft: "6px solid rgba(255,255,255,0.3)",
                      borderTop: "3px solid transparent",
                      borderBottom: "3px solid transparent",
                    }}
                  />
                )}
              </HStack>
            ))}
          </HStack>
        </Box>

        {/* Weightage tables */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={{ base: 10, md: 16 }}>
          {[
            { label: "Phase 1 · PI Shortlisting", weightings: phase1, accent: "#1E5FFF" },
            { label: "Phase 2 · Final Merit List", weightings: phase2, accent: "#C9A96E" },
          ].map((ph) => (
            <Box key={ph.label} p={{ base: 4, md: 6 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={ph.accent} opacity={0.8} />
              <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color={ph.accent} fontWeight={600} mb={5} px={{ base: 2, md: 4 }} pt={2}>
                {ph.label}
              </Text>
              <TableContainer>
                <Table variant="unstyled" size="sm">
                  <Thead>
                    <Tr borderBottom="1px solid rgba(255,255,255,0.08)">
                      <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={3}>
                        Component
                      </Th>
                      <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={3} isNumeric>
                        Weight
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {ph.weightings.map((w) => (
                      <Tr key={w.k} borderBottom="1px solid rgba(255,255,255,0.05)">
                        <Td fontSize="sm" color="brand.chalk" py={3}>{w.k}</Td>
                        <Td fontSize="sm" color="white" fontFamily="mono" fontWeight={600} py={3} isNumeric>{w.v}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scoring rules */}
        <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" mb={8}>
          <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.iitBlue" fontWeight={600} mb={4}>
            Scoring rules · Phase 2
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="white" fontWeight={600}>CAT score</Text>
              <Text fontSize="sm" color="brand.chalk">
                (Candidate&apos;s CAT Scaled Score / 198) × 42.5
              </Text>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="white" fontWeight={600}>Personal Interview</Text>
              <Text fontSize="sm" color="brand.chalk">
                Normalised across panels using global and panel means before scaling to 42.5.
              </Text>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="white" fontWeight={600}>Undergraduate performance</Text>
              <Text fontSize="sm" color="brand.chalk">
                (Marks / 100) × 5, awarded only if UG marks ≥ 60%.
              </Text>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="white" fontWeight={600}>Extra-curriculars</Text>
              <Text fontSize="sm" color="brand.chalk">
                National winner 3 · State-level 2 · Institutional representative 1. Certificates
                required. Top-three achievers only.
              </Text>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="white" fontWeight={600}>Post-graduation</Text>
              <Text fontSize="sm" color="brand.chalk">
                2 points for a completed PG degree; 0 otherwise.
              </Text>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="white" fontWeight={600}>Gender diversity</Text>
              <Text fontSize="sm" color="brand.chalk">
                Women applicants may be shortlisted to improve gender diversity without any
                additional weightage.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>

        {/* Cutoff table */}
        <Box p={{ base: 4, md: 6 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
          <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.iitRed" fontWeight={600} mb={4} px={{ base: 2, md: 4 }} pt={2}>
            Composite Score cut-off · PI shortlisting 2026–28
          </Text>
          <TableContainer>
            <Table variant="unstyled" size="sm">
              <Thead>
                <Tr borderBottom="1px solid rgba(255,255,255,0.08)">
                  <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={3}>
                    Category
                  </Th>
                  <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={3} isNumeric>
                    Male
                  </Th>
                  <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={3} isNumeric>
                    Female
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cutoffs.map((c) => (
                  <Tr key={c.cat} borderBottom="1px solid rgba(255,255,255,0.05)">
                    <Td fontSize="sm" color="white" fontWeight={500} py={3}>{c.cat}</Td>
                    <Td fontSize="sm" color="brand.chalk" fontFamily="mono" py={3} isNumeric>{c.male}</Td>
                    <Td fontSize="sm" color="brand.chalk" fontFamily="mono" py={3} isNumeric>{c.female}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Text pt={4} px={{ base: 2, md: 4 }} fontSize="xs" color="brand.mist" fontStyle="italic">
            * Cut-off scores vary year to year based on the overall applicant pool.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
