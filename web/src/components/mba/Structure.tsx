"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const learning = [
  "Case Studies",
  "Lectures & Discussions",
  "Simulation Games",
  "Collaborative Learning",
  "Experiential Learning",
];
const practical = [
  { tag: "Mandatory", note: "2-month summer internship in industry" },
  { tag: "Optional",  note: "1-month winter project" },
  { tag: "Ongoing",   note: "Research projects & group projects" },
];
const y2 = ["Finance", "Marketing", "Operations", "Strategy", "HR & OB", "Entrepreneurship"];

export function Structure() {
  return (
    <Box as="section" id="structure" py={{ base: 20, md: 28 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Program Structure
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Two years, eight terms.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {/* Year 1 */}
          <Box p={{ base: 8, md: 12 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
            <Box position="absolute" top={0} left={0} right={0} h="2px" bg="#1E5FFF" opacity={0.8} />
            <VStack align="flex-start" spacing={6}>
              <HStack justify="space-between" w="full">
                <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="#1E5FFF" fontWeight={600}>First Year</Text>
                <Text fontSize="sm" color="brand.mist" fontFamily="mono">80 credits</Text>
              </HStack>
              <Heading fontSize="3xl" letterSpacing="-0.03em">A strong foundation</Heading>
              <Text color="brand.chalk" lineHeight={1.7}>
                23 comprehensive core courses across 4 terms, laying the groundwork in
                economics, finance, marketing, operations, statistics, and strategy.
              </Text>

              <Box w="full" pt={2}>
                <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.mist" mb={3}>
                  Learning methodology
                </Text>
                <HStack flexWrap="wrap" spacing={2} rowGap={2}>
                  {learning.map((l) => (
                    <Box key={l} px={3} py={1.5} borderRadius="full" border="1px solid rgba(255,255,255,0.12)" fontSize="xs" color="brand.chalk">
                      {l}
                    </Box>
                  ))}
                </HStack>
              </Box>

              <Box w="full" pt={2}>
                <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.mist" mb={3}>
                  Practical experience
                </Text>
                <VStack align="stretch" spacing={2.5}>
                  {practical.map((p) => (
                    <HStack key={p.note} spacing={3} pb={2.5} borderBottom="1px solid rgba(255,255,255,0.06)">
                      <Text w="80px" fontSize="xs" color="brand.gold" fontWeight={600} letterSpacing="0.1em" textTransform="uppercase">
                        {p.tag}
                      </Text>
                      <Text fontSize="sm" color="brand.chalk">{p.note}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Year 2 */}
          <Box p={{ base: 8, md: 12 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
            <Box position="absolute" top={0} left={0} right={0} h="2px" bg="#C9A96E" opacity={0.8} />
            <VStack align="flex-start" spacing={6}>
              <HStack justify="space-between" w="full">
                <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="#C9A96E" fontWeight={600}>Second Year</Text>
                <Text fontSize="sm" color="brand.mist" fontFamily="mono">57 credits</Text>
              </HStack>
              <Heading fontSize="3xl" letterSpacing="-0.03em">Flex, focus, specialise</Heading>
              <Text color="brand.chalk" lineHeight={1.7}>
                Elective-driven across your chosen management domain. Design your second
                year from a broad menu of advanced courses.
              </Text>

              <Box w="full" pt={2}>
                <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.mist" mb={3}>
                  Specialisation areas
                </Text>
                <SimpleGrid columns={2} spacing={3}>
                  {y2.map((s) => (
                    <HStack key={s} spacing={3} p={3} borderRadius="md" bg="rgba(255,255,255,0.03)">
                      <Box w="4px" h="4px" borderRadius="full" bg="brand.gold" />
                      <Text fontSize="sm" color="brand.chalk">{s}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>

              <Text fontSize="xs" color="brand.mist" fontStyle="italic" pt={2}>
                The MBA is a general degree with optional specialisations in Finance and
                Operations Management.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
