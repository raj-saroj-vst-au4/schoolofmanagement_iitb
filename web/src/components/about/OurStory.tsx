"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

export function OurStory() {
  return (
    <Box as="section" id="story" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
          <VStack align="flex-start" spacing={6}>
            <HStack spacing={3}>
              <Box w="24px" h="1px" bg="brand.iitBlue" />
              <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                Our Story
              </Text>
            </HStack>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
              A school engineered
              <br />
              <Box as="span" color="brand.mist">inside a powerhouse.</Box>
            </Heading>
          </VStack>

          <VStack align="flex-start" spacing={6} color="brand.chalk" fontSize={{ base: "md", lg: "lg" }} lineHeight={1.7}>
            <Text>
              Established in <Box as="span" color="white" fontWeight={600}>1995</Box> and renamed in
              2000 in honour of <Box as="span" color="white" fontWeight={600}>Dr. Shailesh J. Mehta</Box> —
              a distinguished alumnus and venture capitalist — SJMSOM is a premier management school
              embedded within the Indian Institute of Technology Bombay.
            </Text>
            <Text>
              Our mission is unchanged since day one: to transform professionals with technological
              background into <Box as="em" fontStyle="italic" color="white">Renaissance Leaders</Box> —
              managers who can navigate and lead in an increasingly technology-driven world.
            </Text>
            <Text>
              As part of IIT Bombay (est. 1958), we sit inside one of the world&apos;s premier teaching
              and research institutions. Roughly <Box as="span" color="white" fontWeight={600}>20% of IITB alumni
              are entrepreneurs</Box>, and we leverage synergies with every engineering and science
              department on campus — preparing leaders for India&apos;s transition to a knowledge
              economy.
            </Text>
            <Text color="brand.mist" fontStyle="italic" borderLeft="2px solid" borderColor="brand.iitBlue" pl={5} mt={2}>
              Isolated expertise in finance, systems, marketing or operations is giving way to a
              composite, unified approach to managing business processes. Effective decision-making
              requires an integrated understanding of all business functions.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
