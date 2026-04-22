"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

type Ranking = {
  body: string;
  category: string;
  accent: string;
  rows: { year: string; rank: string }[];
};

const rankings: Ranking[] = [
  {
    body: "QS World University Rankings",
    category: "Business & Management Studies",
    accent: "#1E5FFF",
    rows: [
      { year: "2024", rank: "5th" },
      { year: "2023", rank: "5th" },
      { year: "2022", rank: "5th" },
    ],
  },
  {
    body: "NIRF Rankings",
    category: "Management Category",
    accent: "#C9A96E",
    rows: [
      { year: "2024", rank: "10th" },
      { year: "2023", rank: "10th" },
      { year: "2022", rank: "11th" },
    ],
  },
];

export function Rankings() {
  return (
    <Box as="section" id="rankings" py={{ base: 20, md: 32 }} bg="brand.ink" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              B-school Rankings
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            Consistently among
            <br />
            <Box as="span" color="brand.mist">India&apos;s very best.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          {rankings.map((r) => (
            <Box key={r.body} p={{ base: 4, md: 6 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={r.accent} opacity={0.8} />
              <Box px={{ base: 3, md: 4 }} pt={3}>
                <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color={r.accent} fontWeight={600} mb={2}>
                  {r.body}
                </Text>
                <Text fontSize="sm" color="brand.mist" mb={4}>{r.category}</Text>
              </Box>
              <TableContainer>
                <Table variant="unstyled" size="sm">
                  <Thead>
                    <Tr borderBottom="1px solid rgba(255,255,255,0.08)">
                      <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={3}>Year</Th>
                      <Th color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" fontSize="2xs" py={3} isNumeric>Rank</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {r.rows.map((row) => (
                      <Tr key={row.year} borderBottom="1px solid rgba(255,255,255,0.05)">
                        <Td fontSize="sm" color="brand.chalk" fontFamily="mono" py={3}>{row.year}</Td>
                        <Td fontSize="xl" color="white" fontWeight={600} letterSpacing="-0.02em" py={3} isNumeric>{row.rank}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          ))}
        </SimpleGrid>

        <Text fontSize="xs" color="brand.mist" fontStyle="italic" maxW="3xl">
          Rankings provide a useful basis for decision-making but vary in their methods and focus.
          They are not a substitute for your own research along the dimensions that matter to you.
        </Text>
      </Container>
    </Box>
  );
}
