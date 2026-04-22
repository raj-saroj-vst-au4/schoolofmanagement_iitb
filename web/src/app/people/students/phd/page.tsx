import type { Metadata } from "next";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PhDStudents } from "@/components/students/PhDStudents";
import studentsData from "@/data/students.json";
import type { PhDStudent } from "@/components/students/StudentCard";

const data = studentsData as unknown as {
  phd: { current: PhDStudent[]; graduated: PhDStudent[] };
};

const current = data.phd.current;
const graduated = data.phd.graduated;
const total = current.length + graduated.length;

export const metadata: Metadata = {
  title: "PhD Students — SJMSOM, IIT Bombay",
  description: `Our doctoral community — ${current.length} current scholars and ${graduated.length} PhD graduates across every research area at SJMSOM.`,
};

export default function PhDStudentsPage() {
  const stats = [
    { value: String(current.length), label: "Current scholars" },
    { value: String(graduated.length), label: "PhD graduates" },
    { value: String(total), label: "Doctoral community" },
  ];

  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />

      {/* Hero */}
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
        <Box position="absolute" inset={0} bgGradient="radial(circle at 60% 50%, rgba(124,92,255,0.18) 0%, transparent 60%)" />
        <Container maxW="7xl" position="relative" zIndex={2}>
          <VStack align="flex-start" spacing={6} maxW="4xl">
            <HStack spacing={3}>
              <Box w="6px" h="6px" borderRadius="full" bg="#7C5CFF" boxShadow="0 0 12px #7C5CFF" />
              <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
                PhD Students
              </Text>
            </HStack>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              lineHeight={0.95}
              letterSpacing="-0.04em"
              fontWeight={600}
            >
              The people doing
              <br />
              <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
                the actual research.
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
              Doctoral scholars in Finance, OR, Strategy, Marketing, Economics, OB and more —
              {" "}{current.length} currently in residence and {graduated.length} who have
              defended their thesis and moved on to academia and industry.
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

      <PhDStudents current={current} graduated={graduated} />
      <FooterCTA />
    </Box>
  );
}
