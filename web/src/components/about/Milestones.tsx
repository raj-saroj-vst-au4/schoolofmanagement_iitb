"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const milestones = [
  { year: "1995", title: "School established", desc: "Management school founded at IIT Bombay." },
  { year: "2000", title: "Renamed SJMSOM", desc: "Honouring Dr. Shailesh J. Mehta." },
  { year: "2018", title: "Institute of Eminence", desc: "Conferred by the Government of India." },
  { year: "2022", title: "Global partnership", desc: "Executive MBA launched with Washington University." },
  { year: "2024", title: "Top-10 B-school", desc: "Ranked #10 by NIRF and #5 by QS India." },
];

export function Milestones() {
  return (
    <Box as="section" py={{ base: 20, md: 28 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Key Milestones
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Three decades, five inflection points.
          </Heading>
        </VStack>

        <Box position="relative">
          {/* connecting line */}
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="40px"
            left="0"
            right="0"
            h="1px"
            bgGradient="linear(to-r, transparent, rgba(255,255,255,0.12), rgba(255,255,255,0.12), transparent)"
          />
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 8, md: 4 }}>
            {milestones.map((m) => (
              <VStack
                key={m.year}
                align="flex-start"
                spacing={4}
                position="relative"
              >
                <Box
                  w="10px"
                  h="10px"
                  borderRadius="full"
                  bg="brand.gold"
                  boxShadow="0 0 20px rgba(201,169,110,0.5)"
                  position="relative"
                  zIndex={1}
                  mt={{ md: "35px" }}
                />
                <Heading fontSize="3xl" letterSpacing="-0.02em" color="white" fontWeight={600}>
                  {m.year}
                </Heading>
                <Text fontSize="md" fontWeight={600} color="white">
                  {m.title}
                </Text>
                <Text fontSize="sm" color="brand.mist" lineHeight={1.6}>
                  {m.desc}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
