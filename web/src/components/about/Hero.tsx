"use client";

import { Box, Container, Heading, Text, VStack, HStack } from "@chakra-ui/react";

export function AboutHero() {
  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: "70vh", md: "85vh" }}
      overflow="hidden"
      bg="brand.ink"
      display="flex"
      alignItems="flex-end"
      pt={{ base: 28, md: 32 }}
      pb={{ base: 16, md: 24 }}
    >
      <Box
        as="img"
        src="/media/about/SJMSOM_Front_Image.jpg"
        alt="SJMSOM building"
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.55}
        style={{ filter: "saturate(0.9) contrast(1.05)" }}
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, rgba(5,7,10,0.7) 0%, rgba(5,7,10,0.4) 40%, rgba(5,7,10,0.95) 100%)"
      />
      <Container maxW="7xl" position="relative" zIndex={2}>
        <VStack align="flex-start" spacing={6} maxW="4xl">
          <HStack spacing={3}>
            <Box w="6px" h="6px" borderRadius="full" bg="brand.iitBlue" boxShadow="0 0 12px #1E5FFF" />
            <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
              About Us
            </Text>
          </HStack>
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            lineHeight={0.95}
            letterSpacing="-0.04em"
            fontWeight={600}
          >
            Transforming professionals
            <br />
            <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
              into Renaissance leaders.
            </Box>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
            Since 1995, SJMSOM has trained managers with strong technological foundations to
            navigate and lead in an increasingly technology-driven world.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
