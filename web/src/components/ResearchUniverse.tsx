"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ResearchUniverseScene = dynamic(
  () => import("./ResearchUniverseScene").then((m) => m.ResearchUniverseScene),
  { ssr: false, loading: () => null },
);

const clusters = [
  { label: "Finance", color: "#1E5FFF" },
  { label: "Operations Research", color: "#C9A96E" },
  { label: "Strategy", color: "#D63638" },
  { label: "Information Systems", color: "#7C5CFF" },
  { label: "Marketing", color: "#2ECC71" },
];

export function ResearchUniverse() {
  return (
    <Box
      as="section"
      id="research"
      position="relative"
      minH={{ base: "auto", md: "100vh" }}
      overflow="hidden"
      bg="brand.ink"
      borderTop="1px solid rgba(255,255,255,0.06)"
    >
      <Suspense fallback={null}>
        <Box position="absolute" inset={0} opacity={0.85}>
          <ResearchUniverseScene />
        </Box>
      </Suspense>

      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bgGradient="linear(to-l, rgba(5,7,10,0.96) 0%, rgba(5,7,10,0.6) 40%, transparent 70%)"
      />

      <Container maxW="7xl" position="relative" zIndex={2} py={{ base: 24, md: 40 }}>
        <HStack justify="flex-end">
          <VStack align="flex-end" spacing={6} maxW="2xl" textAlign="right">
            <HStack spacing={3}>
              <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                Research
              </Text>
              <Box w="24px" h="1px" bg="brand.iitBlue" />
            </HStack>

            <Heading fontSize={{ base: "4xl", md: "6xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
              840+ papers.
              <br />
              <Box as="span" color="brand.mist">One research universe.</Box>
            </Heading>

            <Text color="brand.chalk" fontSize="lg">
              Every dot is a paper. Every cluster, a field. Every edge, a citation —
              a living map of what SJMSOM is thinking about.
            </Text>

            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} pt={8} w="full">
              {clusters.map((c) => (
                <HStack
                  key={c.label}
                  spacing={3}
                  p={3}
                  borderRadius="md"
                  bg="rgba(10,13,18,0.6)"
                  border="1px solid rgba(255,255,255,0.06)"
                  backdropFilter="blur(8px)"
                >
                  <Box
                    w="10px"
                    h="10px"
                    borderRadius="full"
                    bg={c.color}
                    boxShadow={`0 0 12px ${c.color}`}
                    flexShrink={0}
                  />
                  <Text fontSize="sm" color="brand.chalk">
                    {c.label}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}
