"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AlumniGlobeScene = dynamic(
  () => import("./AlumniGlobeScene").then((m) => m.AlumniGlobeScene),
  { ssr: false, loading: () => null },
);

const regions = [
  { region: "North America", count: "240+" },
  { region: "Europe", count: "120+" },
  { region: "APAC", count: "680+" },
  { region: "Middle East", count: "85+" },
];

export function AlumniGlobe() {
  return (
    <Box
      as="section"
      id="alumni"
      position="relative"
      minH={{ base: "auto", md: "100vh" }}
      overflow="hidden"
      bg="brand.ink"
    >
      <Suspense fallback={null}>
        <Box position="absolute" inset={0} opacity={0.9}>
          <AlumniGlobeScene />
        </Box>
      </Suspense>

      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bgGradient="linear(to-r, rgba(5,7,10,0.95) 0%, rgba(5,7,10,0.5) 40%, transparent 70%)"
      />

      <Container maxW="7xl" position="relative" zIndex={2} py={{ base: 24, md: 40 }}>
        <VStack align="flex-start" spacing={6} maxW="2xl">
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Alumni
            </Text>
          </HStack>

          <Box>
            <Heading
              fontSize={{ base: "4xl", md: "6xl" }}
              letterSpacing="-0.03em"
              lineHeight={1.05}
            >
              1,200+ alumni.
              <br />
              <Box as="span" color="brand.mist">40 countries. One network.</Box>
            </Heading>
          </Box>

          <Text color="brand.chalk" fontSize="lg" maxW="xl">
            From McKinsey to early-stage founders, from Singapore to San Francisco — the
            SJMSOM network opens doors you didn&apos;t know existed.
          </Text>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} pt={8} w="full">
            {regions.map((r) => (
              <VStack
                key={r.region}
                align="flex-start"
                spacing={1}
                p={4}
                borderLeft="1px solid rgba(255,255,255,0.1)"
              >
                <Text fontSize="2xl" fontWeight={500} letterSpacing="-0.02em">
                  {r.count}
                </Text>
                <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase">
                  {r.region}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
