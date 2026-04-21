"use client";

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion.create(Box);

const programs = [
  {
    tag: "Flagship",
    name: "MBA",
    duration: "2 years · Full-time",
    blurb:
      "A rigorous, analytics-first MBA taught alongside the engineers and scientists of IIT Bombay.",
    accent: "#1E5FFF",
    image: "/media/programs/mba.jpg",
  },
  {
    tag: "Executive",
    name: "EMBA",
    duration: "15 months · Weekend",
    blurb: "For senior professionals who want the IITB crest without pausing their career.",
    accent: "#C9A96E",
    image: "/media/programs/emba.jpg",
  },
  {
    tag: "Research",
    name: "PhD",
    duration: "4–6 years",
    blurb: "Doctoral research across OR, Finance, Marketing, Strategy, and Information Systems.",
    accent: "#D63638",
    image: "/media/programs/phd.jpg",
  },
  {
    tag: "Short",
    name: "Executive Education",
    duration: "2–12 weeks",
    blurb: "Open & custom programs for industry leaders in AI, fintech, operations and policy.",
    accent: "#7C5CFF",
    image: "/media/programs/execed.jpg",
  },
];

export function ProgramStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <Box as="section" id="programs" py={{ base: 24, md: 40 }} position="relative" bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={20}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Programs
            </Text>
          </HStack>
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            maxW="4xl"
            letterSpacing="-0.03em"
            lineHeight={1.05}
          >
            Four ways to build
            <br />
            <Box as="span" color="brand.mist">a career that compounds.</Box>
          </Heading>
        </VStack>

        <SimpleGrid ref={ref} columns={{ base: 1, md: 2 }} spacing={6}>
          {programs.map((p, i) => (
            <MotionBox
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" as const }}
              position="relative"
              p={0}
              borderRadius="2xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              overflow="hidden"
              cursor="pointer"
              role="group"
              style={{ transition: "transform 300ms ease, border-color 300ms ease" }}
              _hover={{
                borderColor: "rgba(255,255,255,0.14)",
                transform: "translateY(-4px)",
              }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="2px"
                bg={p.accent}
                opacity={0.7}
                transition="opacity 300ms"
                _groupHover={{ opacity: 1 }}
                zIndex={3}
              />
              {/* Program photo — top half of the card, normal flow */}
              <Box
                position="relative"
                w="full"
                h={{ base: "200px", md: "280px" }}
                overflow="hidden"
              >
                <Box
                  as="img"
                  src={p.image}
                  alt={p.name}
                  w="full"
                  h="full"
                  objectFit="cover"
                  loading="lazy"
                  style={{
                    transition: "transform 600ms ease",
                    transformOrigin: "center",
                  }}
                  _groupHover={{ transform: "scale(1.06)" } as never}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-b, transparent 45%, rgba(18,22,29,1))"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient={`linear(135deg, ${p.accent}26, transparent 55%)`}
                  mixBlendMode="color"
                />
              </Box>

              <VStack align="flex-start" spacing={5} position="relative" px={{ base: 8, md: 12 }} pt={4} pb={{ base: 8, md: 12 }}>
                <HStack justify="space-between" w="full">
                  <Text
                    fontSize="xs"
                    letterSpacing="0.24em"
                    textTransform="uppercase"
                    color={p.accent}
                    fontWeight={600}
                  >
                    {p.tag}
                  </Text>
                  <Text fontSize="sm" color="brand.mist" fontFamily="mono">
                    0{i + 1} / 04
                  </Text>
                </HStack>

                <Heading fontSize={{ base: "4xl", md: "5xl" }} letterSpacing="-0.03em">
                  {p.name}
                </Heading>

                <Text color="brand.mist" fontSize="sm" fontFamily="mono">
                  {p.duration}
                </Text>

                <Text color="brand.chalk" fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  {p.blurb}
                </Text>

                <HStack
                  pt={4}
                  color="white"
                  fontSize="sm"
                  fontWeight={500}
                  transition="transform 200ms"
                  _groupHover={{ transform: "translateX(4px)" }}
                >
                  <Text>Explore</Text>
                  <Text>→</Text>
                </HStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
