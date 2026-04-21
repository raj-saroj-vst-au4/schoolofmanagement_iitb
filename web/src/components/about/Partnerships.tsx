"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const academic = [
  { name: "Kellogg Graduate School of Management", note: "Faculty Exchange Program" },
  { name: "University of Connecticut", note: "Faculty & Student Exchange Program" },
  { name: "Hoseo University, South Korea", note: "Faculty & Student Exchange Program" },
  { name: "Washington University", note: "Executive MBA (since 2022)" },
  { name: "BaaN Institute", note: "ERP Collaboration" },
];

const industry = [
  "ICICI Scholarships",
  "Hindustan Lever Limited Scholarships",
  "Hindi Vidya Bhavan Educational Support",
  "Shailesh J. Mehta Endowment Fund",
];

const govt = [
  "Ministry of HRD",
  "Planning Commission",
  "Department of Electronics",
  "Department of Science & Technology",
  "Confederation of Indian Industry",
  "Ministry of Environment & Forests",
  "Department of Scientific & Industrial Research",
];

export function Partnerships() {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Support & Linkages
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" maxW="3xl" lineHeight={1.05}>
            Building partnerships
            <br />
            <Box as="span" color="brand.mist">for excellence.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
          {/* Academic partnerships */}
          <VStack align="stretch" spacing={5} p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.iitBlue" fontWeight={600}>
              Academic Partnerships
            </Text>
            <Heading fontSize="xl" letterSpacing="-0.02em">Global exchanges & programs</Heading>
            <VStack align="stretch" spacing={3}>
              {academic.map((a) => (
                <Box key={a.name} pb={3} borderBottom="1px solid rgba(255,255,255,0.06)">
                  <Text fontSize="sm" fontWeight={600} color="white">{a.name}</Text>
                  <Text fontSize="xs" color="brand.mist">{a.note}</Text>
                </Box>
              ))}
            </VStack>
          </VStack>

          {/* Industry / scholarships */}
          <VStack align="stretch" spacing={5} p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.gold" fontWeight={600}>
              Scholarship Support
            </Text>
            <Heading fontSize="xl" letterSpacing="-0.02em">Industry contributors</Heading>
            <VStack align="stretch" spacing={3}>
              {industry.map((i) => (
                <HStack key={i} spacing={3} pb={3} borderBottom="1px solid rgba(255,255,255,0.06)">
                  <Box w="4px" h="4px" bg="brand.gold" borderRadius="full" />
                  <Text fontSize="sm" color="brand.chalk">{i}</Text>
                </HStack>
              ))}
            </VStack>
            <Text fontSize="xs" color="brand.mist" fontStyle="italic" pt={2}>
              Scholarships provided through the Shailesh J. Mehta Endowment Fund support
              exceptional students based on academic merit and potential.
            </Text>
          </VStack>

          {/* Government & orgs */}
          <VStack align="stretch" spacing={5} p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.iitRed" fontWeight={600}>
              Government & Organisational
            </Text>
            <Heading fontSize="xl" letterSpacing="-0.02em">Institutional interactions</Heading>
            <Box>
              <HStack flexWrap="wrap" spacing={2} rowGap={2}>
                {govt.map((g) => (
                  <Box
                    key={g}
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    border="1px solid rgba(255,255,255,0.1)"
                    bg="rgba(255,255,255,0.02)"
                    fontSize="xs"
                    color="brand.chalk"
                  >
                    {g}
                  </Box>
                ))}
              </HStack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
