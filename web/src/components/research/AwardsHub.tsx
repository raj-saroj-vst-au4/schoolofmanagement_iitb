"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { AwardsList } from "./AwardsList";
import { StudentAwardsList } from "./StudentAwardsList";
import type { Award } from "@/lib/aggregate";

type Tab = "faculty" | "students";

type Props = {
  facultyEntries: Award[];
  studentEntries: Award[];
  stats: {
    facultyCount: number;
    uniqueFaculty: number;
    earliestYear: number | null;
    studentCount: number;
    studentEarliestYear: number | null;
  };
};

export function AwardsHub({ facultyEntries, studentEntries, stats }: Props) {
  const [tab, setTab] = useState<Tab>("faculty");

  const statCards =
    tab === "faculty"
      ? [
          { value: String(stats.facultyCount), label: "Awards & honours" },
          { value: String(stats.uniqueFaculty), label: "Faculty recognised" },
          { value: stats.earliestYear ? `${stats.earliestYear}→` : "—", label: "Earliest on record" },
        ]
      : [
          { value: String(stats.studentCount), label: "Student awards" },
          {
            value: String(new Set(studentEntries.map((e) => e.recipient)).size),
            label: "Students honoured",
          },
          {
            value: stats.studentEarliestYear ? `${stats.studentEarliestYear}→` : "—",
            label: "Earliest on record",
          },
        ];

  const headline =
    tab === "faculty" ? (
      <>
        The receipts
        <br />
        <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
          of the work.
        </Box>
      </>
    ) : (
      <>
        Students who
        <br />
        <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
          went out and won.
        </Box>
      </>
    );

  const subhead =
    tab === "faculty"
      ? "Teaching awards, research fellowships, editorial-board memberships, grants and other recognition earned by our core faculty."
      : "Hackathons, case competitions, and industry recognition earned by SJMSOM students and alumni.";

  return (
    <>
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
              {headline}
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
              {subhead}
            </Text>
            <SimpleGrid columns={3} spacing={{ base: 4, md: 10 }} pt={4} w="full" maxW="3xl">
              {statCards.map((s) => (
                <VStack key={s.label} align="flex-start" spacing={1}>
                  <Text
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight={600}
                    letterSpacing="-0.04em"
                    lineHeight={1}
                    color="white"
                  >
                    {s.value}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="brand.mist"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    pt={1}
                  >
                    {s.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Box
        as="section"
        bg="brand.ink"
        borderTop="1px solid rgba(255,255,255,0.06)"
        borderBottom="1px solid rgba(255,255,255,0.06)"
        position="sticky"
        top={0}
        zIndex={5}
        backdropFilter="blur(12px)"
        backgroundColor="rgba(10,14,20,0.85)"
      >
        <Container maxW="6xl">
          <HStack spacing={0} py={2} role="tablist">
            <TabButton active={tab === "faculty"} onClick={() => setTab("faculty")} count={stats.facultyCount}>
              Faculty
            </TabButton>
            <TabButton active={tab === "students"} onClick={() => setTab("students")} count={stats.studentCount}>
              Students
            </TabButton>
          </HStack>
        </Container>
      </Box>

      {tab === "faculty" ? (
        <AwardsList entries={facultyEntries} />
      ) : (
        <StudentAwardsList entries={studentEntries} />
      )}
    </>
  );
}

function TabButton({
  active,
  onClick,
  count,
  children,
}: {
  active: boolean;
  onClick: () => void;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <Box
      as="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      px={{ base: 4, md: 6 }}
      py={{ base: 3, md: 4 }}
      position="relative"
      fontSize={{ base: "sm", md: "md" }}
      fontWeight={500}
      letterSpacing="0.02em"
      color={active ? "white" : "brand.mist"}
      _hover={{ color: "white" }}
      style={{ transition: "color 180ms" }}
    >
      <HStack spacing={2}>
        <Text>{children}</Text>
        <Text fontSize="xs" color={active ? "brand.gold" : "brand.mist"} fontFamily="mono">
          {count}
        </Text>
      </HStack>
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        h="2px"
        bg={active ? "brand.gold" : "transparent"}
        style={{ transition: "background 180ms" }}
      />
    </Box>
  );
}
