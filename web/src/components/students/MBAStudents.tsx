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
import { MBACard, type MBAStudent } from "@/components/students/StudentCard";

type Batch = { year: number; status: "year-1" | "year-2" | "alumni"; students: MBAStudent[] };

function SearchIcon() {
  return (
    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.6}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </Box>
  );
}

type View = "current" | "alumni";

export function MBAStudents({ batches }: { batches: Batch[] }) {
  const current = batches.filter((b) => b.status !== "alumni");
  const alumni = batches.filter((b) => b.status === "alumni").sort((a, b) => b.year - a.year);

  const [view, setView] = useState<View>("current");
  const [alumniYear, setAlumniYear] = useState<number>(alumni[0]?.year ?? 0);
  const [q, setQ] = useState("");

  const activeBatches: Batch[] = useMemo(() => {
    if (view === "current") return current;
    const pick = alumni.find((b) => b.year === alumniYear);
    return pick ? [pick] : [];
  }, [view, alumniYear, current, alumni]);

  // If searching, search across ALL batches regardless of current/alumni tab
  const searching = q.trim().length > 0;
  const ql = q.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!searching) return [] as Array<{ batch: Batch; students: MBAStudent[] }>;
    return batches
      .sort((a, b) => b.year - a.year)
      .map((b) => ({
        batch: b,
        students: b.students.filter(
          (s) =>
            s.name.toLowerCase().includes(ql) ||
            (s.college ?? "").toLowerCase().includes(ql) ||
            (s.university ?? "").toLowerCase().includes(ql) ||
            (s.organization ?? "").toLowerCase().includes(ql) ||
            (s.degree ?? "").toLowerCase().includes(ql),
        ),
      }))
      .filter((r) => r.students.length > 0);
  }, [searching, batches, ql]);

  const searchCount = searchResults.reduce((n, r) => n + r.students.length, 0);

  return (
    <Box as="section" py={{ base: 10, md: 14 }} bg="brand.ink">
      <Container maxW="7xl">
        {/* Control row */}
        <VStack align="stretch" spacing={5} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3} flexWrap="wrap" rowGap={3} justify="space-between">
            {/* Tab switcher — hidden while searching */}
            <HStack spacing={2} display={searching ? "none" : "flex"}>
              {[
                ["current", `Current students · ${current.reduce((n, b) => n + b.students.length, 0)}`],
                ["alumni",  `Alumni · ${alumni.reduce((n, b) => n + b.students.length, 0)}`],
              ].map(([k, label]) => {
                const kt = k as View;
                return (
                  <Box
                    key={kt}
                    as="button"
                    onClick={() => setView(kt)}
                    px={5}
                    py={2.5}
                    borderRadius="full"
                    border="1px solid"
                    borderColor={view === kt ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"}
                    bg={view === kt ? "white" : "transparent"}
                    color={view === kt ? "black" : "brand.chalk"}
                    fontSize="sm"
                    fontWeight={600}
                    style={{ transition: "all 200ms ease" }}
                    _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                  >
                    {label}
                  </Box>
                );
              })}
            </HStack>

            <InputGroup maxW={{ base: "full", md: "340px" }} ml={searching ? 0 : "auto"}>
              <InputLeftElement pointerEvents="none" color="brand.mist">
                <SearchIcon />
              </InputLeftElement>
              <Input
                placeholder="Search across all batches (name, college, employer)…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.08)"
                color="white"
                _placeholder={{ color: "brand.mist" }}
                _focus={{
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: "none",
                  bg: "rgba(255,255,255,0.06)",
                }}
                fontSize="sm"
                borderRadius="full"
              />
            </InputGroup>
          </HStack>

          {/* Alumni year selector — only when on alumni tab and not searching */}
          {view === "alumni" && !searching && (
            <Box>
              <Text fontSize="xs" color="brand.mist" letterSpacing="0.16em" textTransform="uppercase" mb={3}>
                Choose a batch
              </Text>
              <HStack flexWrap="wrap" spacing={2} rowGap={2}>
                {alumni.map((b) => (
                  <Box
                    key={b.year}
                    as="button"
                    onClick={() => setAlumniYear(b.year)}
                    px={4}
                    py={2}
                    borderRadius="full"
                    border="1px solid"
                    borderColor={alumniYear === b.year ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}
                    bg={alumniYear === b.year ? "rgba(255,255,255,0.1)" : "transparent"}
                    color={alumniYear === b.year ? "white" : "brand.chalk"}
                    fontSize="xs"
                    fontWeight={600}
                    style={{ transition: "all 180ms ease" }}
                    _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                  >
                    Class of {b.year}{" "}
                    <Box as="span" color="brand.mist" ml={1} fontFamily="mono">
                      {b.students.length}
                    </Box>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}

          {searching && (
            <HStack justify="space-between" color="brand.mist" fontSize="xs" letterSpacing="0.12em" textTransform="uppercase">
              <Text>{searchCount} matches across {searchResults.length} batches</Text>
              <Box as="button" onClick={() => setQ("")} color="brand.chalk" _hover={{ color: "white" }}>
                Clear ×
              </Box>
            </HStack>
          )}
        </VStack>

        {/* Content */}
        {searching ? (
          searchResults.length === 0 ? (
            <VStack py={20} color="brand.mist">
              <Text fontSize="xl">No students match.</Text>
              <Text fontSize="sm">Try a different name, college, or company.</Text>
            </VStack>
          ) : (
            <VStack align="stretch" spacing={12}>
              {searchResults.map((r) => (
                <BatchBlock
                  key={r.batch.year}
                  batch={r.batch}
                  students={r.students}
                />
              ))}
            </VStack>
          )
        ) : activeBatches.length === 0 ? (
          <VStack py={20} color="brand.mist">
            <Text fontSize="xl">No students to show.</Text>
          </VStack>
        ) : (
          <VStack align="stretch" spacing={14}>
            {activeBatches.map((b) => (
              <BatchBlock key={b.year} batch={b} students={b.students} />
            ))}
          </VStack>
        )}
      </Container>
    </Box>
  );
}

function statusLabel(status: Batch["status"]): string {
  if (status === "year-1") return "Year 1 · Current";
  if (status === "year-2") return "Year 2 · Current";
  return "Alumni";
}

function BatchBlock({ batch, students }: { batch: Batch; students: MBAStudent[] }) {
  const isCurrent = batch.status !== "alumni";
  return (
    <Box>
      <HStack align="flex-end" justify="space-between" mb={6} flexWrap="wrap" rowGap={3}>
        <VStack align="flex-start" spacing={2}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg={isCurrent ? "brand.iitBlue" : "brand.gold"} />
            <Text
              fontSize="xs"
              color={isCurrent ? "brand.iitBlue" : "brand.gold"}
              letterSpacing="0.22em"
              textTransform="uppercase"
              fontWeight={600}
            >
              {statusLabel(batch.status)}
            </Text>
          </HStack>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
            Class of {batch.year}
          </Heading>
        </VStack>
        <Text fontSize="sm" color="brand.mist" fontFamily="mono">
          {students.length} student{students.length !== 1 ? "s" : ""}
        </Text>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {students.map((s, i) => (
          <MBACard key={`${batch.year}-${s.name}-${i}`} s={s} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
