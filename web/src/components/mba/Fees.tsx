"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const totals = [
  { cat: "General / EWS / OBC-NCL", total: "₹15,15,500", perSem: "₹3,73,750", accent: "#1E5FFF" },
  { cat: "SC / ST / PWD",          total: "₹7,15,500",  perSem: "₹1,73,750", accent: "#C9A96E" },
];

const deposits = [
  { label: "Without Hostel · General / EWS / OBC-NCL", value: "₹3,94,250" },
  { label: "Without Hostel · SC / ST / PWD",          value: "₹1,94,250" },
  { label: "With Hostel · General / EWS / OBC-NCL",    value: "₹4,13,950" },
  { label: "With Hostel · SC / ST / PWD",              value: "₹2,13,950" },
];

const extras = [
  { label: "Admission Fee (non-refundable)", value: "₹10,500" },
  { label: "Refundable Deposits (one-time)", value: "₹10,000" },
  { label: "Hostel & Mess (per semester)",   value: "₹46,700" },
];

const support = [
  "15–20 merit-based scholarships",
  "Industry-sponsored scholarships",
  "Need-based financial aid",
  "On-campus bank branches facilitate education loans",
  "Tie-ups with major banks · simplified loan procedures",
];

export function Fees() {
  return (
    <Box as="section" id="fees" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Tuition & Fees
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            An investment
            <br />
            <Box as="span" color="brand.mist">that pays back.</Box>
          </Heading>
        </VStack>

        {/* Totals */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={12}>
          {totals.map((t) => (
            <Box key={t.cat} p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" position="relative" overflow="hidden">
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={t.accent} opacity={0.8} />
              <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color={t.accent} fontWeight={600} mb={5}>
                {t.cat}
              </Text>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} letterSpacing="-0.03em" color="white">
                {t.total}
              </Heading>
              <Text fontSize="sm" color="brand.mist" mt={2}>
                Total program fees
              </Text>
              <Box mt={6} pt={5} borderTop="1px solid rgba(255,255,255,0.06)">
                <HStack justify="space-between">
                  <Text fontSize="sm" color="brand.chalk">Per semester</Text>
                  <Text fontSize="sm" color="white" fontFamily="mono">{t.perSem}</Text>
                </HStack>
                <HStack justify="space-between" mt={2}>
                  <Text fontSize="sm" color="brand.chalk">Across 4 semesters</Text>
                  <Text fontSize="sm" color="white" fontFamily="mono">
                    {t.cat.startsWith("General") ? "₹14,95,000" : "₹6,95,000"}
                  </Text>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={12}>
          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.iitBlue" fontWeight={600} mb={5}>
              Initial deposit for offer acceptance
            </Text>
            <VStack align="stretch" spacing={3}>
              {deposits.map((d) => (
                <HStack key={d.label} justify="space-between" pb={2.5} borderBottom="1px solid rgba(255,255,255,0.06)">
                  <Text fontSize="sm" color="brand.chalk">{d.label}</Text>
                  <Text fontSize="sm" color="white" fontFamily="mono">{d.value}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.iitRed" fontWeight={600} mb={5}>
              Additional fees components
            </Text>
            <VStack align="stretch" spacing={3}>
              {extras.map((e) => (
                <HStack key={e.label} justify="space-between" pb={2.5} borderBottom="1px solid rgba(255,255,255,0.06)">
                  <Text fontSize="sm" color="brand.chalk">{e.label}</Text>
                  <Text fontSize="sm" color="white" fontFamily="mono">{e.value}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Financial support */}
        <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="rgba(201,169,110,0.04)" border="1px solid rgba(201,169,110,0.18)">
          <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={5}>
            Financial Support
          </Text>
          <Heading fontSize="2xl" letterSpacing="-0.02em" mb={5}>You shouldn&apos;t have to choose.</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {support.map((s) => (
              <HStack key={s} spacing={3} align="flex-start">
                <Box mt={2} w="4px" h="4px" borderRadius="full" bg="brand.gold" flexShrink={0} />
                <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>{s}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
