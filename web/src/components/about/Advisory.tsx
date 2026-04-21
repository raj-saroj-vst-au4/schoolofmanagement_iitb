"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Member = {
  name: string;
  role: string;
  image: string;
};

const members: Member[] = [
  { name: "Dr. Shailesh J. Mehta", role: "President, Granite Hill Capital Ventures LP, USA", image: "/media/about/shailesh-j-mehta.jpeg" },
  { name: "Mr. Yogi Sriram", role: "Advisor-HR to CEO & MD, Larsen & Toubro Ltd", image: "/media/about/yogisriram.jpg" },
  { name: "Mr. Ravi Kant", role: "Former Vice Chairman, Tata Motors Ltd", image: "/media/about/Ravi_kant.jpg" },
  { name: "Dr. Devi Prasad Shetty", role: "Chairman, Narayana Hrudayalaya Ltd", image: "/media/about/deviprasadshetty.png" },
  { name: "Prof. Rishikesha T. Krishnan", role: "Director, IIM Bangalore", image: "/media/about/rishitkrishnan.jpg" },
  { name: "Mr. Ajit Rangnekar", role: "Former Dean, Indian School of Business", image: "/media/about/ajit-rangnekar.jpg" },
  { name: "Mr. Deepak Parikh", role: "Chairman, HDFC Ltd", image: "/media/about/deepak-parekh.jpg" },
  { name: "Mr. Ashishkumar Chauhan", role: "MD & CEO, National Stock Exchange Ltd", image: "/media/about/ashishkumarchauhan.jpg" },
];

export function Advisory() {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Advisory Committee
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" maxW="3xl" lineHeight={1.05}>
            Distinguished leaders
            <br />
            <Box as="span" color="brand.mist">guiding our vision.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
          {members.map((m) => (
            <Box
              key={m.name}
              borderRadius="xl"
              overflow="hidden"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              role="group"
              style={{ transition: "transform 300ms ease, border-color 300ms ease" }}
              _hover={{
                borderColor: "rgba(255,255,255,0.2)",
                transform: "translateY(-4px)",
              }}
            >
              <Box position="relative" w="full" style={{ aspectRatio: "4 / 5" }} overflow="hidden" bg="brand.ink">
                <Box
                  as="img"
                  src={m.image}
                  alt={m.name}
                  position="absolute"
                  inset={0}
                  w="full"
                  h="full"
                  objectFit="cover"
                  loading="lazy"
                  style={{
                    transition: "transform 500ms ease, filter 300ms ease",
                    filter: "grayscale(0.15) contrast(1.05)",
                  }}
                  _groupHover={{
                    transform: "scale(1.05)",
                    filter: "grayscale(0) contrast(1.05)",
                  } as never}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-b, transparent 55%, rgba(18,22,29,0.95))"
                />
              </Box>
              <VStack align="flex-start" spacing={1.5} p={5}>
                <Heading fontSize="md" letterSpacing="-0.02em" lineHeight={1.2}>
                  {m.name}
                </Heading>
                <Text fontSize="xs" color="brand.mist" lineHeight={1.5}>
                  {m.role}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
