"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Area = { name: string; topics: string[]; accent: string };

const areas: Area[] = [
  { name: "Strategic Management",   topics: ["Corporate Strategy", "Competitive Dynamics", "International Business"], accent: "#1E5FFF" },
  { name: "Technology & Innovation", topics: ["R&D Management", "Innovation Strategy", "Technology Adoption"],         accent: "#7C5CFF" },
  { name: "Financial Management",    topics: ["Corporate Finance", "Investment Analysis", "Financial Markets"],        accent: "#C9A96E" },
  { name: "Operations Management",   topics: ["Supply Chain Management", "Process Optimisation", "Quality Management"], accent: "#D63638" },
  { name: "Marketing",               topics: ["Consumer Behaviour", "Digital Marketing", "Brand Management"],           accent: "#2ECC71" },
  { name: "Organisational Behaviour", topics: ["Leadership Studies", "Team Dynamics", "Organisational Culture"],        accent: "#FF9466" },
  { name: "Entrepreneurship",        topics: ["Venture Creation", "Family Business", "Social Entrepreneurship"],        accent: "#E066C9" },
  { name: "Business Analytics",      topics: ["Data Science", "Predictive Modelling", "Machine Learning Applications"], accent: "#66D9E0" },
  { name: "Sustainability",          topics: ["Sustainable Business", "Green Innovation", "CSR & Ethics"],              accent: "#B4D033" },
];

export function ResearchAreas() {
  return (
    <Box as="section" id="research" py={{ base: 20, md: 32 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Research Areas
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            Cutting-edge domains.
            <br />
            <Box as="span" color="brand.mist">Nine of them.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {areas.map((a) => (
            <Box
              key={a.name}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "rgba(255,255,255,0.16)", transform: "translateY(-3px)" }}
              transition="all 250ms ease"
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={a.accent} opacity={0.8} />
              <Heading fontSize="lg" letterSpacing="-0.02em" mb={4}>{a.name}</Heading>
              <VStack align="stretch" spacing={2}>
                {a.topics.map((t) => (
                  <HStack key={t} spacing={3}>
                    <Box w="4px" h="4px" borderRadius="full" bg={a.accent} opacity={0.7} />
                    <Text fontSize="sm" color="brand.chalk">{t}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Interdisciplinary */}
        <Box
          mt={{ base: 12, md: 20 }}
          p={{ base: 8, md: 12 }}
          borderRadius="2xl"
          bg="rgba(30,95,255,0.04)"
          border="1px solid rgba(30,95,255,0.18)"
        >
          <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.iitBlue" fontWeight={600} mb={4}>
            Interdisciplinary Research
          </Text>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.02em" mb={4}>
            Our best research crosses departments.
          </Heading>
          <Text color="brand.chalk" maxW="3xl" mb={6}>
            We strongly encourage interdisciplinary collaborations across departments and with
            other IITs, research institutions, and industry partners.
          </Text>
          <HStack flexWrap="wrap" spacing={3} rowGap={3}>
            {["Joint Supervision", "Cross-Department Collaboration", "Industry Partnerships"].map((t) => (
              <Box key={t} px={4} py={2} borderRadius="full" border="1px solid rgba(30,95,255,0.4)" bg="rgba(30,95,255,0.08)" fontSize="sm" color="brand.chalk">
                {t}
              </Box>
            ))}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
