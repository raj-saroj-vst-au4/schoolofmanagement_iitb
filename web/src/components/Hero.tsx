"use client";

import { Box, Container, Heading, Text, HStack, Button, VStack } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box as="section" position="relative" minH="100vh" overflow="hidden" bg="brand.ink">
      {/* Campus hero video — real footage from SJMSOM */}
      <Box
        as="video"
        src="/media/hero.webm"
        poster="/media/hero_still.jpg"
        autoPlay
        muted
        loop
        playsInline
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.75}
        filter="saturate(0.9) contrast(1.05)"
      />

      {/* Vignette + gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bgGradient="radial(ellipse at center, transparent 40%, rgba(5,7,10,0.85) 100%)"
      />
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bgGradient="linear(to-b, rgba(5,7,10,0.4), transparent 25%, transparent 65%, rgba(5,7,10,0.95))"
      />

      <Container maxW="7xl" position="relative" zIndex={2} pt={{ base: 32, md: 40 }} pb={20}>
        <VStack align="flex-start" spacing={8} maxW="3xl">
          <HStack spacing={3} mb={2}>
            <Box
              w="6px"
              h="6px"
              borderRadius="full"
              bg="brand.iitBlue"
              boxShadow="0 0 12px #1E5FFF"
            />
            <Text
              fontSize="sm"
              color="brand.mist"
              letterSpacing="0.24em"
              textTransform="uppercase"
            >
              Shailesh J. Mehta School of Management
            </Text>
          </HStack>

          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            lineHeight={0.95}
            letterSpacing="-0.04em"
            fontWeight={600}
          >
            Management,
            <br />
            <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
              engineered at IIT&nbsp;Bombay.
            </Box>
          </Heading>

          <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
            Where engineering precision meets business storytelling. Six decades of leaders,
            founders, and builders — shaped by Powai, shipped to the world.
          </Text>

          <HStack spacing={4} pt={4}>
            <Button
              size="lg"
              bg="white"
              color="black"
              px={8}
              _hover={{ bg: "brand.chalk", transform: "translateY(-2px)" }}
              boxShadow="0 10px 40px rgba(255,255,255,0.08)"
            >
              Explore programs →
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="rgba(255,255,255,0.2)"
              color="white"
              px={8}
              _hover={{ bg: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Watch the film
            </Button>
          </HStack>
        </VStack>
      </Container>

      {/* Scroll hint */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
      >
        <Text
          fontSize="xs"
          color="brand.mist"
          letterSpacing="0.3em"
          textTransform="uppercase"
        >
          Scroll
        </Text>
      </Box>
    </Box>
  );
}
