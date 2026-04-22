"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import type { FacultyResearch } from "@/lib/aggregate";
import { areaGroups } from "@/lib/aggregate";

function SearchIcon() {
  return (
    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.6}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </Box>
  );
}

export function ResearchHub({
  faculty,
  topInterests,
}: {
  faculty: FacultyResearch[];
  topInterests: { text: string; count: number }[];
}) {
  const [group, setGroup] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const g = areaGroups.find((x) => x.key === group) ?? areaGroups[0];
    const ql = q.trim().toLowerCase();
    return faculty
      .filter((f) => {
        if (!g.match(f.area)) return false;
        if (!ql) return true;
        return (
          f.name.toLowerCase().includes(ql) ||
          f.area.toLowerCase().includes(ql) ||
          f.interests.some((i) => i.toLowerCase().includes(ql)) ||
          f.projects.some((p) => p.toLowerCase().includes(ql))
        );
      })
      .filter((f) => f.interests.length > 0 || f.projects.length > 0 || f.publicationCount > 0);
  }, [faculty, group, q]);

  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="brand.ink">
      <Container maxW="7xl">
        {/* Interest cloud */}
        {topInterests.length > 0 && (
          <Box mb={{ base: 16, md: 24 }}>
            <VStack align="flex-start" spacing={4} mb={8}>
              <HStack spacing={3}>
                <Box w="24px" h="1px" bg="brand.iitBlue" />
                <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                  Research interest map
                </Text>
              </HStack>
              <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
                What the school is thinking about.
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="brand.chalk" maxW="3xl" lineHeight={1.6}>
                The most-studied topics across our core faculty — sized by how many professors list them as an interest.
              </Text>
            </VStack>

            <HStack flexWrap="wrap" spacing={3} rowGap={3}>
              {topInterests.map((t) => {
                const size = t.count >= 3 ? "lg" : t.count === 2 ? "md" : "sm";
                const accent = t.count >= 3 ? "#1E5FFF" : t.count === 2 ? "#C9A96E" : "#8A94A6";
                return (
                  <Box
                    key={t.text}
                    px={size === "lg" ? 5 : size === "md" ? 4 : 3.5}
                    py={size === "lg" ? 3 : size === "md" ? 2.5 : 2}
                    borderRadius="full"
                    border="1px solid"
                    borderColor={`${accent}44`}
                    bg={`${accent}0f`}
                    color="brand.chalk"
                    fontSize={size === "lg" ? "md" : size === "md" ? "sm" : "xs"}
                    fontWeight={size === "lg" ? 600 : 500}
                  >
                    {t.text}{" "}
                    <Box as="span" color="brand.mist" ml={1} fontSize="xs" fontFamily="mono">
                      ×{t.count}
                    </Box>
                  </Box>
                );
              })}
            </HStack>
          </Box>
        )}

        {/* Filter bar */}
        <VStack align="stretch" spacing={6} mb={{ base: 8, md: 12 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Research by faculty
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Who's working on what.
          </Heading>

          <HStack
            justify="space-between"
            flexWrap="wrap"
            gap={4}
            align={{ base: "stretch", md: "center" }}
            pt={4}
          >
            <HStack spacing={2} flexWrap="wrap" rowGap={2}>
              {areaGroups.map((g) => (
                <Box
                  key={g.key}
                  as="button"
                  onClick={() => setGroup(g.key)}
                  px={4}
                  py={2}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={group === g.key ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"}
                  bg={group === g.key ? "white" : "transparent"}
                  color={group === g.key ? "black" : "brand.chalk"}
                  fontSize="xs"
                  fontWeight={600}
                  style={{ transition: "all 200ms ease" }}
                  _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  {g.label}
                </Box>
              ))}
            </HStack>

            <InputGroup maxW={{ base: "full", md: "260px" }}>
              <InputLeftElement pointerEvents="none" color="brand.mist">
                <SearchIcon />
              </InputLeftElement>
              <Input
                placeholder="Search topics or names…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.08)"
                color="white"
                _placeholder={{ color: "brand.mist" }}
                _focus={{ borderColor: "rgba(255,255,255,0.3)", boxShadow: "none", bg: "rgba(255,255,255,0.06)" }}
                fontSize="sm"
                borderRadius="full"
              />
            </InputGroup>
          </HStack>

          <Text fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase">
            Showing {filtered.length} of {faculty.filter((f) => f.interests.length || f.projects.length || f.publicationCount).length}
          </Text>
        </VStack>

        {filtered.length === 0 ? (
          <VStack py={20} color="brand.mist">
            <Text fontSize="xl">No researchers match.</Text>
          </VStack>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {filtered.map((f) => (
              <Box
                key={f.slug}
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                bg="brand.graphite"
                border="1px solid rgba(255,255,255,0.06)"
                display="flex"
                gap={6}
                alignItems="flex-start"
                style={{ transition: "all 200ms ease" }}
                _hover={{ borderColor: "rgba(255,255,255,0.16)", transform: "translateY(-3px)" }}
              >
                <Box
                  as="a"
                  href={`/faculty/${f.slug}`}
                  minW="90px"
                  w="90px"
                  h="110px"
                  borderRadius="xl"
                  overflow="hidden"
                  position="relative"
                  flexShrink={0}
                >
                  <Box as="img" src={f.img} alt={f.name} w="full" h="full" objectFit="cover" style={{ filter: "grayscale(0.1) contrast(1.05)" }} />
                </Box>
                <VStack align="flex-start" spacing={3} flex={1} minW={0}>
                  <Box
                    as="a"
                    href={`/faculty/${f.slug}`}
                    style={{ transition: "color 150ms" }}
                    _hover={{ color: "white" }}
                  >
                    <Heading fontSize="lg" letterSpacing="-0.02em" lineHeight={1.2}>
                      {f.name}
                    </Heading>
                    <Text fontSize="2xs" color="brand.gold" letterSpacing="0.18em" textTransform="uppercase" fontWeight={600} mt={1}>
                      {f.area}
                    </Text>
                  </Box>

                  {f.interests.length > 0 && (
                    <HStack flexWrap="wrap" spacing={1.5} rowGap={1.5}>
                      {f.interests.slice(0, 4).map((i) => (
                        <Box
                          key={i}
                          px={2.5}
                          py={1}
                          borderRadius="full"
                          bg="rgba(30,95,255,0.08)"
                          border="1px solid rgba(30,95,255,0.2)"
                          fontSize="2xs"
                          color="brand.chalk"
                        >
                          {i}
                        </Box>
                      ))}
                      {f.interests.length > 4 && (
                        <Text fontSize="2xs" color="brand.mist">
                          +{f.interests.length - 4} more
                        </Text>
                      )}
                    </HStack>
                  )}

                  <HStack spacing={4} pt={1} fontSize="xs" color="brand.mist">
                    {f.projects.length > 0 && (
                      <Text>
                        <Box as="span" color="white" fontWeight={600}>
                          {f.projects.length}
                        </Box>{" "}
                        projects
                      </Text>
                    )}
                    {f.publicationCount > 0 && (
                      <Text>
                        <Box as="span" color="white" fontWeight={600}>
                          {f.publicationCount}
                        </Box>{" "}
                        publications
                      </Text>
                    )}
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}
