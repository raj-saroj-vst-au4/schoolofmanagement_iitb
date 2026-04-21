"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const keyAreas = [
  { title: "Strategic Management", desc: "Leadership and competitive-strategy research.", accent: "#1E5FFF" },
  { title: "Technology Management", desc: "Innovation, R&D, and technology adoption.", accent: "#C9A96E" },
  { title: "Financial Management", desc: "Corporate finance and capital markets.", accent: "#D63638" },
  { title: "Operations Management", desc: "Supply chain and process optimisation.", accent: "#7C5CFF" },
];

const objectives = [
  { title: "Advance knowledge", desc: "Keep pace with expanding frontiers of management research." },
  { title: "Research training", desc: "Comprehensive training in quantitative and qualitative methods." },
  { title: "National impact", desc: "Address the social and economic objectives of the country." },
];

export function Overview() {
  return (
    <Box as="section" id="overview" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start" mb={{ base: 16, md: 24 }}>
          <VStack align="flex-start" spacing={6}>
            <HStack spacing={3}>
              <Box w="24px" h="1px" bg="brand.iitBlue" />
              <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                About the programme
              </Text>
            </HStack>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
              Built to produce the
              <br />
              <Box as="span" color="brand.mist">next generation of scholars.</Box>
            </Heading>
          </VStack>

          <VStack align="flex-start" spacing={5} color="brand.chalk" fontSize={{ base: "md", lg: "lg" }} lineHeight={1.7}>
            <Text>
              The Doctoral Programme at SJMSOM, IIT Bombay, is designed to prepare students for
              careers in <Box as="span" color="white" fontWeight={600}>teaching and research</Box>.
              PhD opportunities are offered across four key management areas.
            </Text>
            <Text>
              The program is characterised by a broad-based academic curriculum with minimum
              course credit requirements, followed by intensive research work culminating in a
              thesis. We actively encourage interdisciplinary research through joint supervision
              and collaborative activities.
            </Text>
          </VStack>
        </SimpleGrid>

        {/* Four key areas */}
        <VStack align="flex-start" spacing={4} mb={10}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Four key research areas
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} letterSpacing="-0.03em">
            Four domains. One standard of rigour.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} mb={{ base: 16, md: 24 }}>
          {keyAreas.map((a) => (
            <Box
              key={a.title}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
              transition="all 250ms ease"
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={a.accent} opacity={0.8} />
              <VStack align="flex-start" spacing={3}>
                <Heading fontSize="lg" letterSpacing="-0.02em" lineHeight={1.2}>{a.title}</Heading>
                <Text color="brand.chalk" fontSize="sm" lineHeight={1.65}>{a.desc}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Objectives */}
        <VStack align="flex-start" spacing={4} mb={10}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Programme objectives
            </Text>
          </HStack>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {objectives.map((o, i) => (
            <Box key={o.title} p={{ base: 8, md: 10 }} borderRadius="2xl" bg="rgba(255,255,255,0.02)" border="1px solid rgba(255,255,255,0.06)">
              <Text fontSize="5xl" fontWeight={600} color="brand.iitRed" letterSpacing="-0.04em" opacity={0.6}>
                0{i + 1}
              </Text>
              <Heading fontSize="xl" letterSpacing="-0.02em" mt={4} mb={3}>
                {o.title}
              </Heading>
              <Text color="brand.chalk" fontSize="sm" lineHeight={1.65}>
                {o.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
