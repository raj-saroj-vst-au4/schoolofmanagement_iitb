"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const socials = [
  {
    name: "LinkedIn",
    handle: "sjmsom-iit-bombay",
    href: "https://www.linkedin.com/school/sjmsom-iit-bombay",
    accent: "#0A66C2",
    icon: (
      <Box as="svg" w="22px" h="22px" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25H4.75V23H.25V8.25zM8 8.25h4.3v2h.06c.6-1.13 2.06-2.32 4.25-2.32 4.55 0 5.39 2.99 5.39 6.88V23h-4.5v-6.66c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23H8V8.25z" />
      </Box>
    ),
  },
  {
    name: "Instagram",
    handle: "@sjmsom_iitb",
    href: "https://www.instagram.com/sjmsom_iitb",
    accent: "#E1306C",
    icon: (
      <Box as="svg" w="22px" h="22px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </Box>
    ),
  },
  {
    name: "Twitter / X",
    handle: "@sjmsom_iitb",
    href: "https://twitter.com/sjmsom_iitb",
    accent: "#E8ECF2",
    icon: (
      <Box as="svg" w="22px" h="22px" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </Box>
    ),
  },
];

const extras = [
  { name: "Facebook", handle: "/sjmsom.iitb", href: "https://www.facebook.com/sjmsom.iitb" },
  { name: "YouTube", handle: "/sjmsom", href: "https://www.youtube.com/sjmsom" },
];

export function Social() {
  return (
    <Box as="section" id="social" py={{ base: 20, md: 28 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Follow SJMSOM
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            The school lives online too.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={8}>
          {socials.map((s) => (
            <Box
              key={s.name}
              as="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              display="block"
              position="relative"
              overflow="hidden"
              style={{ transition: "all 250ms ease" }}
              _hover={{
                transform: "translateY(-4px)",
                borderColor: s.accent,
                bg: "rgba(255,255,255,0.02)",
              } as never}
              role="group"
            >
              <Box
                position="absolute"
                top={0}
                right={0}
                w="200px"
                h="200px"
                borderRadius="full"
                bg={s.accent}
                opacity={0}
                filter="blur(60px)"
                _groupHover={{ opacity: 0.15 } as never}
                style={{ transition: "opacity 300ms ease" }}
              />
              <HStack spacing={4} mb={5} position="relative">
                <Box
                  w="52px"
                  h="52px"
                  borderRadius="xl"
                  bg="rgba(255,255,255,0.04)"
                  border="1px solid rgba(255,255,255,0.08)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="brand.chalk"
                  _groupHover={{ bg: s.accent, borderColor: s.accent, color: "white" } as never}
                  style={{ transition: "all 200ms ease" }}
                >
                  {s.icon}
                </Box>
                <VStack align="flex-start" spacing={0.5}>
                  <Heading fontSize="xl" letterSpacing="-0.02em">{s.name}</Heading>
                  <Text fontSize="sm" color="brand.mist" fontFamily="mono">{s.handle}</Text>
                </VStack>
              </HStack>
              <HStack
                color="brand.chalk"
                fontSize="sm"
                fontWeight={500}
                pt={2}
                borderTop="1px solid rgba(255,255,255,0.06)"
                justify="space-between"
                position="relative"
              >
                <Text>Visit profile</Text>
                <Text>↗</Text>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Secondary socials */}
        <HStack flexWrap="wrap" spacing={3} rowGap={3} justify="center" pt={4}>
          <Text fontSize="xs" color="brand.mist" letterSpacing="0.2em" textTransform="uppercase">
            Also on
          </Text>
          {extras.map((e) => (
            <Box
              key={e.name}
              as="a"
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              px={4}
              py={2}
              borderRadius="full"
              border="1px solid rgba(255,255,255,0.1)"
              fontSize="xs"
              color="brand.chalk"
              _hover={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
              style={{ transition: "all 150ms ease" }}
            >
              {e.name} <Box as="span" color="brand.mist" ml={1}>{e.handle}</Box>
            </Box>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
