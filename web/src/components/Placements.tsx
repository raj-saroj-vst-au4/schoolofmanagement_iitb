"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion.create(Box);

const sectors = [
  { name: "Pharma & Others", pct: 23, color: "#C9A96E" },
  { name: "Consulting", pct: 20, color: "#1E5FFF" },
  { name: "BFSI & Conglomerates", pct: 20, color: "#7C5CFF" },
  { name: "E-Comm & IT/ITeS", pct: 19, color: "#2ECC71" },
  { name: "FMCG / FMCD", pct: 18, color: "#D63638" },
];
const maxSectorPct = Math.max(...sectors.map((s) => s.pct));

const recruiters = [
  "Accenture Strategy", "Alvarez & Marsal", "Kearney", "Deloitte USI", "EY", "PwC", "Capgemini", "Wipro",
  "JPMorgan Chase", "ICICI Bank", "Axis Bank", "Nomura", "Yes Bank", "Aditya Birla Capital",
  "Amazon", "Flipkart", "Zepto", "Mastercard", "Juspay", "Mastek",
  "Asian Paints", "HUL", "P&G", "Mondelēz", "L'Oréal", "Marico", "Britannia", "Berger Paints",
  "Reliance", "Godrej", "TAS", "ExxonMobil", "Mahindra & Mahindra", "Saint-Gobain", "Vedanta", "UPL",
];

export function Placements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <Box
      as="section"
      id="placements"
      py={{ base: 24, md: 40 }}
      bg="brand.obsidian"
      borderTop="1px solid rgba(255,255,255,0.06)"
      borderBottom="1px solid rgba(255,255,255,0.06)"
    >
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={6} mb={20}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Placements 2024–26
            </Text>
          </HStack>
          <Heading fontSize={{ base: "4xl", md: "6xl" }} letterSpacing="-0.03em" lineHeight={1.05} maxW="4xl">
            The market showed up.
            <br />
            <Box as="span" color="brand.mist">So did our graduates.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} ref={ref}>
          {/* Salary skyline */}
          <VStack align="stretch" spacing={8}>
            <Text fontSize="sm" color="brand.mist" letterSpacing="0.2em" textTransform="uppercase">
              Sector mix
            </Text>
            <VStack align="stretch" spacing={5}>
              {sectors.map((s, i) => (
                <Box key={s.name}>
                  <HStack justify="space-between" mb={2}>
                    <Text fontSize="md" fontWeight={500}>{s.name}</Text>
                    <Text fontSize="sm" color="brand.mist" fontFamily="mono">{s.pct}%</Text>
                  </HStack>
                  <Box h="8px" borderRadius="full" bg="rgba(255,255,255,0.05)" overflow="hidden">
                    <MotionBox
                      h="full"
                      borderRadius="full"
                      bg={s.color}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(s.pct / maxSectorPct) * 92}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                      boxShadow={`0 0 24px ${s.color}55`}
                    />
                  </Box>
                </Box>
              ))}
            </VStack>

            <SimpleGrid columns={3} spacing={4} pt={6}>
              {[
                { v: "₹53.80L", l: "Highest" },
                { v: "₹28.16L", l: "Average" },
                { v: "₹26.00L", l: "Median" },
              ].map((k) => (
                <VStack key={k.l} align="flex-start" spacing={1} p={4} bg="brand.graphite" borderRadius="lg">
                  <Text fontSize="xl" fontWeight={500} letterSpacing="-0.02em">{k.v}</Text>
                  <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase">
                    {k.l}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Recruiters */}
          <VStack align="stretch" spacing={8}>
            <Text fontSize="sm" color="brand.mist" letterSpacing="0.2em" textTransform="uppercase">
              51 recruiters · a sample
            </Text>
            <Box>
              <HStack flexWrap="wrap" spacing={3} rowGap={3}>
                {recruiters.map((r, i) => (
                  <MotionBox
                    key={r}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    px={4}
                    py={2}
                    borderRadius="full"
                    border="1px solid rgba(255,255,255,0.1)"
                    bg="rgba(255,255,255,0.02)"
                    fontSize="sm"
                    color="brand.chalk"
                    _hover={{ borderColor: "rgba(255,255,255,0.25)", bg: "rgba(255,255,255,0.05)" }}
                    style={{ transition: "border-color 200ms ease, background 200ms ease" }}
                    cursor="default"
                  >
                    {r}
                  </MotionBox>
                ))}
              </HStack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
