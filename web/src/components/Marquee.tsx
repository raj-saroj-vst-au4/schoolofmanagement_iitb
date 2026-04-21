"use client";

import { Box, HStack, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const items = [
  "NIRF #4 Management 2025",
  "60+ years of IIT Bombay",
  "₹34.7 LPA avg CTC",
  "100% placements",
  "450+ recruiters",
  "1200+ alumni across 40 countries",
  "Powai, Mumbai",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <Box
      py={6}
      borderY="1px solid"
      borderColor="rgba(255,255,255,0.06)"
      bg="brand.obsidian"
      overflow="hidden"
      position="relative"
    >
      <Box
        display="flex"
        width="max-content"
        animation={`${scroll} 40s linear infinite`}
      >
        {row.map((t, i) => (
          <HStack key={i} spacing={10} px={6}>
            <Text fontSize="sm" color="brand.mist" letterSpacing="0.18em" textTransform="uppercase">
              {t}
            </Text>
            <Box w="4px" h="4px" borderRadius="full" bg="brand.steel" />
          </HStack>
        ))}
      </Box>
    </Box>
  );
}
