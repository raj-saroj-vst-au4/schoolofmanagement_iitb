"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Stat = { value: string; unit?: string; label: string };

export function CoreFacultyHero({ count, areaCount }: { count: number; areaCount: number }) {
  const stats: Stat[] = [
    { value: String(count), unit: "professors", label: "Core faculty" },
    { value: String(areaCount), unit: "areas", label: "Of research" },
    { value: "1:9.6", label: "Faculty-to-student ratio" },
  ];

  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: "60vh", md: "70vh" }}
      overflow="hidden"
      bg="brand.ink"
      display="flex"
      alignItems="flex-end"
      pt={{ base: 28, md: 32 }}
      pb={{ base: 16, md: 20 }}
    >
      <Box
        as="img"
        src="/media/about/SJMSOM_Front_Image.jpg"
        alt=""
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.28}
        style={{ filter: "saturate(0.7) contrast(1.05)" }}
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, rgba(5,7,10,0.85) 0%, rgba(5,7,10,0.55) 40%, rgba(5,7,10,0.98) 100%)"
      />
      <Container maxW="7xl" position="relative" zIndex={2}>
        <VStack align="flex-start" spacing={8} maxW="4xl">
          <HStack spacing={3}>
            <Box w="6px" h="6px" borderRadius="full" bg="brand.gold" boxShadow="0 0 12px #C9A96E" />
            <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
              Core Faculty
            </Text>
          </HStack>
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            lineHeight={0.95}
            letterSpacing="-0.04em"
            fontWeight={600}
          >
            The people who
            <br />
            <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
              show up at 8:30 sharp.
            </Box>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
            PhDs from the IITs, IIMs, Wharton, Colorado-Boulder, Toronto, Temple, IGIDR and
            beyond. Teaching across Finance, OR, Strategy, Marketing, IS, Economics and HR.
          </Text>

          <SimpleGrid columns={3} spacing={{ base: 4, md: 10 }} pt={4} w="full" maxW="3xl">
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
                  {s.unit && (
                    <Text fontSize={{ base: "md", md: "xl" }} color="brand.mist">
                      {s.unit}
                    </Text>
                  )}
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
