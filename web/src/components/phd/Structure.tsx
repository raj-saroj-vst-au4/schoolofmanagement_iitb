"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const credits = [
  { component: "Foundation Courses", value: 24, desc: "Core management & research methods." },
  { component: "Elective Courses",   value: 24, desc: "Specialised courses in chosen research area." },
  { component: "Research Work",      value: 60, desc: "Thesis research and dissertation." },
];

const compulsory = [
  { h: "Research Methodology", b: "Quantitative and qualitative research methods." },
  { h: "Advanced Statistics",   b: "Statistical analysis and modelling techniques." },
  { h: "Academic Writing",      b: "Research-paper writing and publication ethics." },
  { h: "Seminar Series",        b: "Regular presentations and academic discourse." },
];

export function Structure() {
  return (
    <Box as="section" id="structure" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Programme Structure
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            Two phases, eight semesters.
          </Heading>
        </VStack>

        {/* Phase 1 & 2 */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={{ base: 12, md: 20 }}>
          <Box p={{ base: 8, md: 12 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
            <Box position="absolute" top={0} left={0} right={0} h="2px" bg="#1E5FFF" opacity={0.8} />
            <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="#1E5FFF" fontWeight={600} mb={4}>
              Phase I · Coursework
            </Text>
            <Heading fontSize="3xl" letterSpacing="-0.03em" mb={5}>Build the foundation</Heading>
            <VStack align="stretch" spacing={3}>
              {[
                "Minimum 48 credits of coursework",
                "Foundation and advanced courses",
                "Research methodology training",
                "Comprehensive examination",
              ].map((s) => (
                <HStack key={s} spacing={3} pb={3} borderBottom="1px solid rgba(255,255,255,0.06)">
                  <Box w="4px" h="4px" borderRadius="full" bg="brand.iitBlue" />
                  <Text fontSize="sm" color="brand.chalk">{s}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          <Box p={{ base: 8, md: 12 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
            <Box position="absolute" top={0} left={0} right={0} h="2px" bg="#D63638" opacity={0.8} />
            <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="#D63638" fontWeight={600} mb={4}>
              Phase II · Research
            </Text>
            <Heading fontSize="3xl" letterSpacing="-0.03em" mb={5}>Do the work that changes the field</Heading>
            <VStack align="stretch" spacing={3}>
              {[
                "State-of-the-art proposal (SOAP)",
                "Research proposal defense",
                "Thesis work and publications",
                "Thesis defense and viva voce",
              ].map((s) => (
                <HStack key={s} spacing={3} pb={3} borderBottom="1px solid rgba(255,255,255,0.06)">
                  <Box w="4px" h="4px" borderRadius="full" bg="brand.iitRed" />
                  <Text fontSize="sm" color="brand.chalk">{s}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Credit requirements */}
        <VStack align="flex-start" spacing={4} mb={8}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Credit requirements
            </Text>
          </HStack>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.03em">
            108 credits, distributed.
          </Heading>
        </VStack>

        <Box p={{ base: 6, md: 8 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" mb={{ base: 12, md: 20 }}>
          <VStack align="stretch" spacing={0}>
            {credits.map((c) => (
              <SimpleGrid key={c.component} columns={{ base: 3, md: 12 }} spacing={4} py={5} borderBottom="1px solid rgba(255,255,255,0.06)" alignItems="center">
                <Text gridColumn={{ base: "1 / -1", md: "span 4" }} fontSize="md" fontWeight={600} color="white">{c.component}</Text>
                <Text gridColumn={{ base: "span 1", md: "span 2" }} fontSize="3xl" fontFamily="mono" color="brand.gold" fontWeight={600}>
                  {c.value}
                </Text>
                <Text gridColumn={{ base: "span 2", md: "span 6" }} fontSize="sm" color="brand.mist">{c.desc}</Text>
              </SimpleGrid>
            ))}
            <SimpleGrid columns={{ base: 3, md: 12 }} spacing={4} py={5} alignItems="center">
              <Text gridColumn={{ base: "1 / -1", md: "span 4" }} fontSize="md" fontWeight={600} color="white">
                Total
              </Text>
              <Text gridColumn={{ base: "span 1", md: "span 2" }} fontSize="3xl" fontFamily="mono" color="white" fontWeight={600}>
                108
              </Text>
              <Text gridColumn={{ base: "span 2", md: "span 6" }} fontSize="sm" color="brand.mist">Minimum credits for the PhD degree.</Text>
            </SimpleGrid>
          </VStack>
        </Box>

        {/* Compulsory courses */}
        <VStack align="flex-start" spacing={4} mb={8}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Compulsory courses
            </Text>
          </HStack>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {compulsory.map((c) => (
            <Box key={c.h} p={6} borderRadius="xl" bg="rgba(255,255,255,0.02)" border="1px solid rgba(255,255,255,0.06)">
              <Heading fontSize="md" letterSpacing="-0.02em" mb={2}>{c.h}</Heading>
              <Text fontSize="sm" color="brand.mist" lineHeight={1.6}>{c.b}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
