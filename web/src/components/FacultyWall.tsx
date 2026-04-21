"use client";

import { Box, Container, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import facultyData from "@/data/faculty.json";

type Faculty = {
  slug: string;
  name: string;
  degree: string;
  area: string;
  tagline: string;
  img: string;
};

const faculty: Faculty[] = facultyData as Faculty[];

// Two staggered rows moving in opposite directions so the eye always has
// motion, but the tempo feels organized rather than chaotic.
const marqueeLeft = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
`;
const marqueeRight = keyframes`
  from { transform: translate3d(-50%, 0, 0); }
  to   { transform: translate3d(0, 0, 0); }
`;

function FacultyCard({ f }: { f: Faculty }) {
  return (
    <Box
      flex="0 0 auto"
      w={{ base: "220px", md: "280px" }}
      mr={5}
      borderRadius="2xl"
      overflow="hidden"
      bg="brand.graphite"
      border="1px solid rgba(255,255,255,0.06)"
      role="group"
      cursor="pointer"
      style={{ transition: "transform 300ms ease, border-color 300ms ease" }}
      _hover={{
        borderColor: "rgba(255,255,255,0.22)",
        transform: "translateY(-4px)",
      }}
    >
      <Box
        position="relative"
        h={{ base: "260px", md: "320px" }}
        overflow="hidden"
        bg="brand.ink"
      >
        <Box
          as="img"
          src={f.img}
          alt={f.name}
          w="full"
          h="full"
          objectFit="cover"
          loading="lazy"
          draggable={false}
          style={{
            transition: "transform 600ms ease, filter 300ms ease",
            filter: "grayscale(0.15) contrast(1.05)",
          }}
          _groupHover={{
            transform: "scale(1.06)",
            filter: "grayscale(0) contrast(1.05)",
          } as never}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, transparent 55%, rgba(18,22,29,0.98))"
          pointerEvents="none"
        />
      </Box>
      <VStack align="flex-start" spacing={2} p={5} minH="170px">
        <Heading
          fontSize={{ base: "md", md: "lg" }}
          letterSpacing="-0.02em"
          lineHeight={1.2}
          noOfLines={2}
        >
          {f.name}
        </Heading>
        <Text
          fontSize="2xs"
          color="brand.gold"
          letterSpacing="0.18em"
          textTransform="uppercase"
          fontWeight={600}
          noOfLines={1}
        >
          {f.area}
        </Text>
        <Text
          fontSize="sm"
          color="brand.chalk"
          fontStyle="italic"
          lineHeight={1.4}
          noOfLines={3}
          pt={1}
        >
          &ldquo;{f.tagline}&rdquo;
        </Text>
      </VStack>
    </Box>
  );
}

function Row({
  items,
  direction,
  duration,
}: {
  items: Faculty[];
  direction: "left" | "right";
  duration: number;
}) {
  // Duplicate the list so the animation can loop seamlessly at 50% offset.
  const doubled = [...items, ...items];
  const anim = direction === "left" ? marqueeLeft : marqueeRight;
  return (
    <Box
      position="relative"
      overflow="hidden"
      mx={{ base: -4, md: -8 }}
      sx={{
        // Fade edges so cards don't pop in/out abruptly
        maskImage:
          "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
      }}
    >
      <Box
        display="flex"
        width="max-content"
        willChange="transform"
        animation={`${anim} ${duration}s linear infinite`}
        _hover={{ animationPlayState: "paused" }}
        px={{ base: 4, md: 8 }}
      >
        {doubled.map((f, i) => (
          <FacultyCard key={`${f.slug}-${i}`} f={f} />
        ))}
      </Box>
    </Box>
  );
}

export function FacultyWall() {
  // Split into two rows for visual interest; distribute evenly
  const half = Math.ceil(faculty.length / 2);
  const rowA = faculty.slice(0, half);
  const rowB = faculty.slice(half);

  return (
    <Box as="section" id="faculty" py={{ base: 24, md: 32 }} position="relative" bg="brand.ink">
      <Container maxW="7xl" mb={{ base: 12, md: 16 }}>
        <VStack align="flex-start" spacing={4}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Faculty · {faculty.length} professors
            </Text>
          </HStack>
          <Heading fontSize={{ base: "4xl", md: "6xl" }} letterSpacing="-0.03em" lineHeight={1.05} maxW="4xl">
            The people who show up
            <br />
            <Box as="span" color="brand.mist">at 8:30 sharp.</Box>
          </Heading>
          <Text color="brand.chalk" fontSize={{ base: "md", md: "lg" }} maxW="2xl">
            Across Finance, OR, Strategy, Marketing, IS, Economics and HR — PhDs from
            the IITs, IIMs, Wharton, LBS, IGIDR and beyond.
          </Text>
        </VStack>
      </Container>

      <VStack spacing={6} align="stretch">
        <Row items={rowA} direction="left" duration={60} />
        <Row items={rowB} direction="right" duration={70} />
      </VStack>

      <Container maxW="7xl" pt={{ base: 12, md: 16 }}>
        <HStack justify="center">
          <Box
            as="a"
            href="https://www.som.iitb.ac.in/core-faculty/"
            target="_blank"
            rel="noopener noreferrer"
            fontSize="sm"
            color="brand.chalk"
            borderBottom="1px solid"
            borderColor="rgba(255,255,255,0.2)"
            pb={1}
            style={{ transition: "all 200ms ease" }}
            _hover={{ color: "white", borderColor: "white" }}
          >
            Meet all {faculty.length} core faculty →
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
