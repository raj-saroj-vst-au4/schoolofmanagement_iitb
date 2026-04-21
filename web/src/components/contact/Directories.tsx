"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const channels = [
  {
    label: "General office",
    accent: "#1E5FFF",
    rows: [
      { k: "Email", v: "office@som.iitb.ac.in", href: "mailto:office@som.iitb.ac.in" },
      { k: "Phone (main)", v: "+91 22 2572 7781", href: "tel:+912225727781" },
      { k: "Phone (alt)", v: "+91 22 2572 8781", href: "tel:+912225728781" },
    ],
  },
  {
    label: "MBA admissions",
    accent: "#C9A96E",
    rows: [
      { k: "Email", v: "admissions@sjmsom.in", href: "mailto:admissions@sjmsom.in" },
      { k: "Phone", v: "+91 22 2576 7781", href: "tel:+912225767781" },
    ],
  },
  {
    label: "Doctoral programme",
    accent: "#D63638",
    rows: [
      { k: "Email", v: "phd@som.iitb.ac.in", href: "mailto:phd@som.iitb.ac.in" },
      { k: "Phone", v: "+91 22 2576 7782", href: "tel:+912225767782" },
    ],
  },
  {
    label: "Head of school",
    accent: "#7C5CFF",
    rows: [
      { k: "Email", v: "head.som@iitb.ac.in", href: "mailto:head.som@iitb.ac.in" },
      { k: "Office", v: "Prof. S.V.D. Nageswara Rao" },
    ],
  },
];

export function Directories() {
  return (
    <Box as="section" py={{ base: 20, md: 28 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Reach the right desk
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Four channels. Pick one.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          {channels.map((c) => (
            <Box
              key={c.label}
              p={{ base: 7, md: 8 }}
              borderRadius="2xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              style={{ transition: "all 200ms ease" }}
              _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={c.accent} opacity={0.8} />
              <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color={c.accent} fontWeight={600} mb={5}>
                {c.label}
              </Text>
              <VStack align="stretch" spacing={3}>
                {c.rows.map((r) => (
                  <Box key={r.k}>
                    <Text fontSize="2xs" color="brand.mist" letterSpacing="0.1em" textTransform="uppercase" mb={0.5}>
                      {r.k}
                    </Text>
                    {r.href ? (
                      <Box
                        as="a"
                        href={r.href}
                        fontSize="sm"
                        color="white"
                        fontFamily="mono"
                        borderBottom="1px dashed rgba(255,255,255,0.12)"
                        _hover={{ borderBottomColor: "white" }}
                        style={{ transition: "border-color 150ms" }}
                      >
                        {r.v}
                      </Box>
                    ) : (
                      <Text fontSize="sm" color="white">{r.v}</Text>
                    )}
                  </Box>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
