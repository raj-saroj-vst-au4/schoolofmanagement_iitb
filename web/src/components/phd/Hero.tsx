"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const stats = [
  { value: "4–5", unit: "years", label: "Full-time program" },
  { value: "108", unit: "credits", label: "Coursework & research" },
  { value: "9", unit: "areas", label: "Research domains" },
];

export function PhDHero() {
  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: "80vh", md: "92vh" }}
      overflow="hidden"
      bg="brand.ink"
      display="flex"
      alignItems="flex-end"
      pt={{ base: 28, md: 32 }}
      pb={{ base: 16, md: 20 }}
    >
      <Box
        as="img"
        src="/media/phd/hero.jpg"
        alt="Doctoral research at SJMSOM"
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.45}
        style={{ filter: "saturate(0.9) contrast(1.05)" }}
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, rgba(5,7,10,0.7) 0%, rgba(5,7,10,0.35) 40%, rgba(5,7,10,0.96) 100%)"
      />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <VStack align="flex-start" spacing={8} maxW="4xl">
          <HStack spacing={3}>
            <Box w="6px" h="6px" borderRadius="full" bg="brand.iitRed" boxShadow="0 0 12px #D63638" />
            <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
              Doctoral Programme
            </Text>
          </HStack>
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            lineHeight={0.95}
            letterSpacing="-0.04em"
            fontWeight={600}
          >
            A PhD for people
            <br />
            <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
              who want to change the field.
            </Box>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
            Four to five years of rigorous coursework and research, supervised by world-class
            faculty across strategy, technology, finance, and operations management.
          </Text>

          <SimpleGrid columns={3} spacing={{ base: 4, md: 10 }} pt={6} w="full" maxW="3xl">
            {stats.map((s) => (
              <VStack key={s.label} align="flex-start" spacing={1}>
                <HStack align="baseline" spacing={1}>
                  <Text
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight={600}
                    letterSpacing="-0.04em"
                    lineHeight={1}
                    color="white"
                  >
                    {s.value}
                  </Text>
                  <Text fontSize={{ base: "md", md: "xl" }} color="brand.mist" letterSpacing="-0.02em">
                    {s.unit}
                  </Text>
                </HStack>
                <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" pt={1}>
                  {s.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
