import type { Metadata } from "next";
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AwardsList } from "@/components/research/AwardsList";
import { flatten } from "@/lib/aggregate";

const entries = flatten("awards");
const uniqueFaculty = new Set(entries.map((e) => e.facultySlug)).size;
const withYear = entries.filter((e) => e.year !== null);
const earliestYear = withYear.length ? Math.min(...withYear.map((e) => e.year!)) : null;

export const metadata: Metadata = {
  title: "Awards & honours — SJMSOM, IIT Bombay",
  description: `${entries.length} awards and honours received across our ${uniqueFaculty} core faculty.`,
};

export default function AwardsPage() {
  const stats = [
    { value: String(entries.length), label: "Awards & honours" },
    { value: String(uniqueFaculty), label: "Faculty recognised" },
    { value: earliestYear ? `${earliestYear}→` : "—", label: "Earliest on record" },
  ];

  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />

      <Box
        as="section"
        position="relative"
        minH={{ base: "55vh", md: "60vh" }}
        overflow="hidden"
        bg="brand.ink"
        display="flex"
        alignItems="flex-end"
        pt={{ base: 28, md: 32 }}
        pb={{ base: 14, md: 20 }}
      >
        <Box position="absolute" inset={0} bgGradient="radial(circle at 70% 50%, rgba(201,169,110,0.18) 0%, transparent 60%)" />
        <Container maxW="7xl" position="relative" zIndex={2}>
          <VStack align="flex-start" spacing={6} maxW="4xl">
            <HStack spacing={3}>
              <Box w="6px" h="6px" borderRadius="full" bg="brand.gold" boxShadow="0 0 12px #C9A96E" />
              <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
                Awards & Honours
              </Text>
            </HStack>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              lineHeight={0.95}
              letterSpacing="-0.04em"
              fontWeight={600}
            >
              The receipts
              <br />
              <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
                of the work.
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
              Teaching awards, research fellowships, editorial-board memberships, grants and
              other recognition earned by our core faculty.
            </Text>
            <SimpleGrid columns={3} spacing={{ base: 4, md: 10 }} pt={4} w="full" maxW="3xl">
              {stats.map((s) => (
                <VStack key={s.label} align="flex-start" spacing={1}>
                  <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={600} letterSpacing="-0.04em" lineHeight={1} color="white">
                    {s.value}
                  </Text>
                  <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase" pt={1}>
                    {s.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <AwardsList entries={entries} />
      <FooterCTA />
    </Box>
  );
}
