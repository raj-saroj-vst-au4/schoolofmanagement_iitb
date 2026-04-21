"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const features = [
  {
    title: "Technology management focus",
    desc: "Specialised courses in Technology Policy, R&D Management, and Managing Technology Transfer.",
    accent: "#1E5FFF",
  },
  {
    title: "Leadership development",
    desc: "Our signature 'Mission, Vision and Leadership' course, mentored by Indian business leaders.",
    accent: "#C9A96E",
  },
  {
    title: "Industry projects",
    desc: "Mandatory 2-month summer project and optional 1-month winter project in industry.",
    accent: "#D63638",
  },
  {
    title: "Interdisciplinary approach",
    desc: "Access to every engineering and science department at IIT Bombay for collaborative learning.",
    accent: "#7C5CFF",
  },
];

export function Overview() {
  return (
    <Box as="section" id="overview" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start" mb={{ base: 16, md: 24 }}>
          <VStack align="flex-start" spacing={6}>
            <HStack spacing={3}>
              <Box w="24px" h="1px" bg="brand.iitBlue" />
              <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                About the program
              </Text>
            </HStack>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
              Managers with an integrated
              <br />
              <Box as="span" color="brand.mist">understanding of business.</Box>
            </Heading>
          </VStack>

          <VStack align="flex-start" spacing={5} color="brand.chalk" fontSize={{ base: "md", lg: "lg" }} lineHeight={1.7}>
            <Text>
              The SJMSOM MBA is designed to develop managers with an integrated understanding
              of business functions. With a <Box as="span" color="white" fontWeight={600}>technology management focus</Box>,
              it uniquely prepares leaders for the modern business landscape.
            </Text>
            <Text>
              The program spans <Box as="span" color="white" fontWeight={600}>2 years across 8 terms</Box>
              , offering a blend of core management courses, electives, and practical
              experience through industry projects and internships.
            </Text>
          </VStack>
        </SimpleGrid>

        <VStack align="flex-start" spacing={8} mb={10}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Unique Features
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} letterSpacing="-0.03em">
            Four things that set it apart.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {features.map((f) => (
            <Box
              key={f.title}
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
              transition="all 250ms ease"
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={f.accent} opacity={0.8} />
              <VStack align="flex-start" spacing={3}>
                <Heading fontSize="xl" letterSpacing="-0.02em">{f.title}</Heading>
                <Text color="brand.chalk" fontSize="sm" lineHeight={1.65}>{f.desc}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
