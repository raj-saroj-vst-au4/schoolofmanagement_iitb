"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

export function ContactHero() {
  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: "55vh", md: "65vh" }}
      overflow="hidden"
      bg="brand.ink"
      display="flex"
      alignItems="flex-end"
      pt={{ base: 28, md: 32 }}
      pb={{ base: 14, md: 20 }}
    >
      <Box
        as="img"
        src="/media/footer_bg.jpg"
        alt=""
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.35}
        style={{ filter: "saturate(0.8) contrast(1.05)" }}
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, rgba(5,7,10,0.7) 0%, rgba(5,7,10,0.45) 40%, rgba(5,7,10,0.96) 100%)"
      />
      <Container maxW="7xl" position="relative" zIndex={2}>
        <VStack align="flex-start" spacing={6} maxW="3xl">
          <HStack spacing={3}>
            <Box w="6px" h="6px" borderRadius="full" bg="brand.iitRed" boxShadow="0 0 12px #D63638" />
            <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
              Contact Us
            </Text>
          </HStack>
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            lineHeight={0.95}
            letterSpacing="-0.04em"
            fontWeight={600}
          >
            Get in touch.
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
            SJMSOM, 2nd Floor, Vikram Sarabhai Library Building, IIT Bombay, Powai, Mumbai — 400076.
            Our team typically responds within a business day.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, md: 6 }} pt={4} w="full" maxW="3xl">
            <Box
              as="a"
              href="mailto:office@som.iitb.ac.in"
              p={5}
              borderRadius="xl"
              bg="rgba(10,13,18,0.5)"
              border="1px solid rgba(255,255,255,0.08)"
              backdropFilter="blur(8px)"
              style={{ transition: "all 200ms ease" }}
              _hover={{ borderColor: "rgba(255,255,255,0.3)", bg: "rgba(255,255,255,0.04)" }}
            >
              <Text fontSize="2xs" color="brand.mist" letterSpacing="0.2em" textTransform="uppercase" mb={1}>Office</Text>
              <Text fontSize="md" color="white" fontFamily="mono">office@som.iitb.ac.in</Text>
            </Box>
            <Box
              as="a"
              href="tel:+912225727781"
              p={5}
              borderRadius="xl"
              bg="rgba(10,13,18,0.5)"
              border="1px solid rgba(255,255,255,0.08)"
              backdropFilter="blur(8px)"
              style={{ transition: "all 200ms ease" }}
              _hover={{ borderColor: "rgba(255,255,255,0.3)", bg: "rgba(255,255,255,0.04)" }}
            >
              <Text fontSize="2xs" color="brand.mist" letterSpacing="0.2em" textTransform="uppercase" mb={1}>Phone</Text>
              <Text fontSize="md" color="white" fontFamily="mono">+91 22 2572 7781</Text>
            </Box>
            <Box
              as="a"
              href="https://maps.google.com/?q=SJMSOM+IIT+Bombay"
              target="_blank"
              rel="noopener noreferrer"
              p={5}
              borderRadius="xl"
              bg="rgba(10,13,18,0.5)"
              border="1px solid rgba(255,255,255,0.08)"
              backdropFilter="blur(8px)"
              style={{ transition: "all 200ms ease" }}
              _hover={{ borderColor: "rgba(255,255,255,0.3)", bg: "rgba(255,255,255,0.04)" }}
            >
              <Text fontSize="2xs" color="brand.mist" letterSpacing="0.2em" textTransform="uppercase" mb={1}>Campus</Text>
              <Text fontSize="md" color="white">Powai, Mumbai — 400076</Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
