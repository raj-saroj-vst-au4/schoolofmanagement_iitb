"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const modes = [
  {
    label: "By Air",
    accent: "#1E5FFF",
    lines: [
      "Chhatrapati Shivaji International Airport (BOM) is ~7–10 km from campus.",
      "Pre-paid taxis and auto-rickshaws available at both terminals.",
      "~25–45 min drive depending on traffic.",
    ],
  },
  {
    label: "By Suburban Rail",
    accent: "#C9A96E",
    lines: [
      "Nearest suburban station: Kanjur Marg (Central Railway line) — ~4 km from SOM.",
      "Trains run every 5 minutes; take only a slow local (fast trains skip Kanjur Marg).",
      "If arriving via Western Railway, change at Dadar to the Central line.",
    ],
  },
  {
    label: "By Long-Distance Rail",
    accent: "#D63638",
    lines: [
      "Nearest major station: Dadar (Central Railway).",
      "From Dadar, take a suburban train to Kanjur Marg.",
      "Auto-rickshaws ply round-the-clock from Kanjur Marg to the IITB main gate.",
    ],
  },
];

export function Reach() {
  return (
    <Box as="section" id="reach" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              How to Reach Us
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Find us in Powai.
          </Heading>
          <Text color="brand.chalk" fontSize={{ base: "md", md: "lg" }} maxW="3xl" lineHeight={1.7}>
            The school sits inside the IIT Bombay campus in Powai — a north-eastern suburb of
            Mumbai. Mumbai is well-connected by road, rail and air to every major Indian city
            and to most international hubs.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {/* Map */}
          <Box
            borderRadius="2xl"
            overflow="hidden"
            border="1px solid rgba(255,255,255,0.08)"
            bg="brand.graphite"
            minH={{ base: "320px", md: "480px" }}
            position="relative"
          >
            <Box
              as="iframe"
              src="https://maps.google.com/maps?q=SJMSOM%20IIT%20Bombay&output=embed"
              title="SJMSOM on Google Maps"
              w="full"
              h="full"
              minH={{ base: "320px", md: "480px" }}
              border={0}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "grayscale(0.2) contrast(1.1) invert(0.92) hue-rotate(180deg)" }}
            />
            <Box
              position="absolute"
              top={4}
              right={4}
              as="a"
              href="https://maps.google.com/?q=SJMSOM+IIT+Bombay"
              target="_blank"
              rel="noopener noreferrer"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(5,7,10,0.8)"
              border="1px solid rgba(255,255,255,0.2)"
              color="white"
              fontSize="xs"
              fontWeight={600}
              backdropFilter="blur(6px)"
              _hover={{ bg: "white", color: "black" }}
              style={{ transition: "all 200ms ease" }}
            >
              Open in Google Maps ↗
            </Box>
          </Box>

          {/* Modes */}
          <VStack align="stretch" spacing={5}>
            {modes.map((m) => (
              <Box
                key={m.label}
                p={{ base: 6, md: 7 }}
                borderRadius="xl"
                bg="brand.graphite"
                border="1px solid rgba(255,255,255,0.06)"
                position="relative"
                overflow="hidden"
                style={{ transition: "all 200ms ease" }}
                _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
              >
                <Box position="absolute" top={0} left={0} right={0} h="2px" bg={m.accent} opacity={0.8} />
                <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color={m.accent} fontWeight={600} mb={4}>
                  {m.label}
                </Text>
                <VStack align="stretch" spacing={2.5}>
                  {m.lines.map((l) => (
                    <HStack key={l} spacing={3} align="flex-start">
                      <Box mt={2.5} w="4px" h="4px" borderRadius="full" bg={m.accent} opacity={0.7} flexShrink={0} />
                      <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>{l}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </SimpleGrid>

        {/* Address card */}
        <Box
          mt={{ base: 10, md: 16 }}
          p={{ base: 8, md: 10 }}
          borderRadius="2xl"
          bg="rgba(30,95,255,0.04)"
          border="1px solid rgba(30,95,255,0.18)"
        >
          <HStack justify="space-between" flexWrap="wrap" gap={6}>
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.iitBlue" fontWeight={600}>
                Postal address
              </Text>
              <Heading fontSize={{ base: "xl", md: "2xl" }} letterSpacing="-0.02em" lineHeight={1.3}>
                Shailesh J. Mehta School of Management
                <br />
                <Box as="span" color="brand.mist" fontWeight={500}>
                  IIT Bombay, Powai, Mumbai — 400076, Maharashtra, India
                </Box>
              </Heading>
            </VStack>
            <Box
              as="a"
              href="https://maps.google.com/?q=SJMSOM+IIT+Bombay"
              target="_blank"
              rel="noopener noreferrer"
              px={6}
              py={3}
              borderRadius="full"
              bg="white"
              color="black"
              fontSize="sm"
              fontWeight={600}
              _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
              style={{ transition: "all 180ms ease" }}
            >
              Get directions →
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
