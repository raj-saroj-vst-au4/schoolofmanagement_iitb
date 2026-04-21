"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Props = {
  eyebrow: string;
  name: string;
  role: string;
  email: string;
  image: string;
  quote: string;
  body: string;
  reverse?: boolean;
};

export function LeadershipMessage({
  eyebrow,
  name,
  role,
  email,
  image,
  quote,
  body,
  reverse = false,
}: Props) {
  return (
    <Box as="section" py={{ base: 20, md: 28 }} bg="brand.ink">
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 20 }}
          alignItems="center"
        >
          {/* Portrait */}
          <Box order={{ base: 0, lg: reverse ? 1 : 0 }}>
            <Box
              position="relative"
              w="full"
              style={{ aspectRatio: "4 / 5" }}
              borderRadius="3xl"
              overflow="hidden"
              border="1px solid rgba(255,255,255,0.08)"
              bg="brand.graphite"
              maxW="480px"
              mx={{ base: "auto", lg: reverse ? "0" : "auto" }}
              ml={{ lg: reverse ? "auto" : 0 }}
            >
              <Box
                as="img"
                src={image}
                alt={name}
                position="absolute"
                inset={0}
                w="full"
                h="full"
                objectFit="cover"
                style={{ filter: "grayscale(0.08) contrast(1.05)" }}
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-b, transparent 60%, rgba(10,13,18,0.4))"
              />
            </Box>
          </Box>

          {/* Text */}
          <VStack align="flex-start" spacing={6} order={{ base: 1, lg: reverse ? 0 : 1 }}>
            <HStack spacing={3}>
              <Box w="24px" h="1px" bg="brand.iitBlue" />
              <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                {eyebrow}
              </Text>
            </HStack>
            <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
              {name}
            </Heading>
            <VStack align="flex-start" spacing={1}>
              <Text fontSize="sm" color="brand.mist" fontFamily="mono">
                {role}
              </Text>
              <Text fontSize="sm" color="brand.mist" fontFamily="mono">
                {email}
              </Text>
            </VStack>

            <Text
              color="white"
              fontSize={{ base: "lg", md: "xl" }}
              fontStyle="italic"
              lineHeight={1.5}
              borderLeft="2px solid"
              borderColor="brand.gold"
              pl={6}
              mt={2}
            >
              &ldquo;{quote}&rdquo;
            </Text>

            <Text color="brand.chalk" fontSize={{ base: "md", lg: "lg" }} lineHeight={1.7}>
              {body}
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
