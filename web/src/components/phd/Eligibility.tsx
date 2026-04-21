"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const paths = [
  {
    idx: "01",
    title: "Master's with Valid GATE Score",
    criteria: "Master's degree in Engineering, Technology, Architecture, M.Sc., or MCA with a valid GATE score.",
    threshold: "Min. CPI 6.5 (on a 10-point scale) or 60% aggregate marks.",
    accent: "#1E5FFF",
  },
  {
    idx: "02",
    title: "Bachelor's with Valid GATE Score",
    criteria: "Bachelor's degree in Engineering or Technology with a valid GATE score.",
    threshold: "Min. CPI 8.0 (on a 10-point scale) or 75% aggregate marks.",
    accent: "#C9A96E",
  },
  {
    idx: "03",
    title: "MBA / M.Com / PGP / PGDM",
    criteria: "MBA from an AACSB/EQUIS accredited business school, OR M.Com with NET/SLET, OR a management qualification (PGP/PGDM) from an AICTE-approved institution.",
    threshold: "Min. CPI 6.5 or 60% aggregate marks.",
    accent: "#D63638",
  },
  {
    idx: "04",
    title: "Bachelor's Degree (General)",
    criteria: "Bachelor's degree in any discipline.",
    threshold: "Min. CPI 8.5 or 80% aggregate marks.",
    accent: "#7C5CFF",
  },
];

const notes = [
  { h: "Foreign students", b: "Foreign nationals must have a valid GATE score OR a GRE score of 315+." },
  { h: "Mandatory requirements", b: "All candidates must clear the selection process including the written test and interview." },
  { h: "GATE score validity", b: "GATE score should be valid as per the admission notification." },
];

export function Eligibility() {
  return (
    <Box as="section" id="eligibility" py={{ base: 20, md: 32 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Eligibility Criteria
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            Four pathways in.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={{ base: 10, md: 16 }}>
          {paths.map((p) => (
            <Box
              key={p.idx}
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
              transition="all 250ms ease"
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={p.accent} opacity={0.8} />
              <HStack align="flex-start" spacing={5}>
                <Text
                  fontSize="3xl"
                  fontFamily="mono"
                  color={p.accent}
                  opacity={0.8}
                  fontWeight={600}
                  letterSpacing="-0.02em"
                  lineHeight={1}
                >
                  {p.idx}
                </Text>
                <VStack align="flex-start" spacing={3} flex={1}>
                  <Heading fontSize="xl" letterSpacing="-0.02em" lineHeight={1.2}>{p.title}</Heading>
                  <Text color="brand.chalk" fontSize="sm" lineHeight={1.6}>{p.criteria}</Text>
                  <Text color="white" fontSize="sm" fontWeight={500} pt={1}>
                    {p.threshold}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Notes */}
        <VStack align="flex-start" spacing={4} mb={8}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Important notes
            </Text>
          </HStack>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {notes.map((n) => (
            <Box key={n.h} p={6} borderRadius="xl" bg="rgba(255,255,255,0.02)" border="1px solid rgba(255,255,255,0.06)">
              <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={2}>
                {n.h}
              </Text>
              <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>{n.b}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
