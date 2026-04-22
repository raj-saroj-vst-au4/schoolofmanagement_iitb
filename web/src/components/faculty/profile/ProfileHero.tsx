"use client";

import { Box, Container, Heading, Text, VStack, HStack, Button, Tooltip } from "@chakra-ui/react";

type Props = {
  name: string;
  title?: string | null;
  area: string;
  degree: string;
  img: string;
  email?: string | null;
  homepage?: string | null;
  linkedin?: string | null;
};

function MailIcon() {
  return (
    <Box as="svg" w="15px" h="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Box>
  );
}
function GlobeIcon() {
  return (
    <Box as="svg" w="15px" h="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </Box>
  );
}
function LinkedInIcon() {
  return (
    <Box as="svg" w="13px" h="13px" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25H4.75V23H.25V8.25zM8 8.25h4.3v2h.06c.6-1.13 2.06-2.32 4.25-2.32 4.55 0 5.39 2.99 5.39 6.88V23h-4.5v-6.66c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23H8V8.25z" />
    </Box>
  );
}

export function ProfileHero(p: Props) {
  return (
    <Box
      as="section"
      position="relative"
      bg="brand.ink"
      pt={{ base: 24, md: 28 }}
      pb={{ base: 14, md: 20 }}
      overflow="hidden"
    >
      {/* Soft blurred bg derived from the portrait, sets the mood */}
      <Box
        as="img"
        src={p.img}
        alt=""
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.18}
        style={{ filter: "blur(80px) saturate(1.6)" }}
        aria-hidden
      />
      <Box position="absolute" inset={0} bgGradient="linear(to-b, rgba(5,7,10,0.7), rgba(5,7,10,0.95))" />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <HStack
          as="a"
          href="/faculty/core"
          spacing={2}
          mb={10}
          fontSize="xs"
          color="brand.mist"
          letterSpacing="0.15em"
          textTransform="uppercase"
          _hover={{ color: "white" }}
          style={{ transition: "color 150ms" }}
          w="fit-content"
        >
          <Text>←</Text>
          <Text>Core Faculty</Text>
        </HStack>

        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "320px 1fr", lg: "380px 1fr" }}
          gap={{ base: 8, md: 14 }}
          alignItems="start"
        >
          {/* Portrait */}
          <Box
            position="relative"
            borderRadius={{ base: "2xl", md: "3xl" }}
            overflow="hidden"
            border="1px solid rgba(255,255,255,0.1)"
            bg="brand.graphite"
            style={{ aspectRatio: "4 / 5" }}
            boxShadow="0 30px 80px rgba(0,0,0,0.5)"
          >
            <Box
              as="img"
              src={p.img}
              alt={p.name}
              w="full"
              h="full"
              objectFit="cover"
              style={{ filter: "contrast(1.05)" }}
            />
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-t, rgba(18,22,29,0.2) 0%, transparent 40%)"
            />
          </Box>

          {/* Copy */}
          <VStack align="flex-start" spacing={5} pt={{ md: 4 }}>
            <Text fontSize="2xs" color="brand.gold" letterSpacing="0.24em" textTransform="uppercase" fontWeight={600}>
              {p.area}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              letterSpacing="-0.04em"
              lineHeight={0.95}
              fontWeight={600}
            >
              {p.name}
            </Heading>
            {p.title && (
              <Text fontSize={{ base: "md", md: "lg" }} color="brand.chalk" fontStyle="italic">
                {p.title}
              </Text>
            )}
            <Text fontSize="sm" color="brand.mist" fontFamily="mono">
              {p.degree}
            </Text>

            {/* Action row */}
            <HStack spacing={3} pt={5} flexWrap="wrap" rowGap={3}>
              {p.email && (
                <Button
                  as="a"
                  href={`mailto:${p.email}`}
                  leftIcon={<MailIcon />}
                  bg="white"
                  color="black"
                  _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
                  size="md"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius="full"
                >
                  {p.email}
                </Button>
              )}
              {p.homepage && (
                <Button
                  as="a"
                  href={p.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<GlobeIcon />}
                  variant="outline"
                  borderColor="rgba(255,255,255,0.2)"
                  color="white"
                  size="md"
                  fontSize="sm"
                  fontWeight={500}
                  borderRadius="full"
                  _hover={{ bg: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  SJMSOM homepage ↗
                </Button>
              )}
              {p.linkedin && (
                <Tooltip label="Find on LinkedIn" placement="top" hasArrow bg="brand.obsidian" color="white" fontSize="xs">
                  <Box
                    as="a"
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    border="1px solid rgba(255,255,255,0.2)"
                    color="white"
                    style={{ transition: "all 180ms ease" }}
                    _hover={{ bg: "#0A66C2", borderColor: "#0A66C2", transform: "translateY(-1px)" }}
                  >
                    <LinkedInIcon />
                  </Box>
                </Tooltip>
              )}
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
