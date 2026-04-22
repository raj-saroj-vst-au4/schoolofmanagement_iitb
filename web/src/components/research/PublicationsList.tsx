"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import type { Entry } from "@/lib/aggregate";

function SearchIcon() {
  return (
    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.6}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </Box>
  );
}

const PAGE = 25;

export function PublicationsList({ entries }: { entries: Entry[] }) {
  const [q, setQ] = useState("");
  const [yearFilter, setYearFilter] = useState<"all" | "recent" | "older">("all");
  const [facultySlug, setFacultySlug] = useState<string>("all");
  const [shown, setShown] = useState(PAGE);

  const years = useMemo(() => {
    const set = new Set<number>();
    for (const e of entries) if (e.year) set.add(e.year);
    return [...set].sort((a, b) => b - a);
  }, [entries]);

  const faculty = useMemo(() => {
    const m = new Map<string, { name: string; count: number }>();
    for (const e of entries) {
      const cur = m.get(e.facultySlug);
      if (cur) cur.count++;
      else m.set(e.facultySlug, { name: e.facultyName, count: 1 });
    }
    return [...m.entries()]
      .map(([slug, v]) => ({ slug, ...v }))
      .sort((a, b) => b.count - a.count);
  }, [entries]);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    const now = new Date().getFullYear();
    return entries
      .filter((e) => {
        if (facultySlug !== "all" && e.facultySlug !== facultySlug) return false;
        if (yearFilter === "recent" && (!e.year || e.year < now - 5)) return false;
        if (yearFilter === "older" && (!e.year || e.year >= now - 5)) return false;
        if (ql && !e.text.toLowerCase().includes(ql) && !e.facultyName.toLowerCase().includes(ql)) return false;
        return true;
      })
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }, [entries, q, yearFilter, facultySlug]);

  const visible = filtered.slice(0, shown);

  return (
    <Box as="section" py={{ base: 10, md: 16 }} bg="brand.ink">
      <Container maxW="6xl">
        {/* Filter bar */}
        <VStack align="stretch" spacing={5} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3} flexWrap="wrap" rowGap={3}>
            {(
              [
                ["all", "All years"],
                ["recent", "Last 5 years"],
                ["older", "Earlier"],
              ] as const
            ).map(([k, label]) => (
              <Box
                key={k}
                as="button"
                onClick={() => { setYearFilter(k); setShown(PAGE); }}
                px={4}
                py={2}
                borderRadius="full"
                border="1px solid"
                borderColor={yearFilter === k ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"}
                bg={yearFilter === k ? "white" : "transparent"}
                color={yearFilter === k ? "black" : "brand.chalk"}
                fontSize="xs"
                fontWeight={600}
                style={{ transition: "all 200ms ease" }}
                _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                {label}
              </Box>
            ))}
            <Box flex={1} />
            <InputGroup maxW={{ base: "full", md: "280px" }}>
              <InputLeftElement pointerEvents="none" color="brand.mist">
                <SearchIcon />
              </InputLeftElement>
              <Input
                placeholder="Search publications…"
                value={q}
                onChange={(e) => { setQ(e.target.value); setShown(PAGE); }}
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

          {/* Faculty filter */}
          <Box>
            <Text fontSize="xs" color="brand.mist" letterSpacing="0.16em" textTransform="uppercase" mb={3}>
              Filter by faculty ({faculty.length})
            </Text>
            <HStack flexWrap="wrap" spacing={2} rowGap={2}>
              <Box
                as="button"
                onClick={() => { setFacultySlug("all"); setShown(PAGE); }}
                px={3}
                py={1.5}
                borderRadius="full"
                border="1px solid"
                borderColor={facultySlug === "all" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}
                bg={facultySlug === "all" ? "rgba(255,255,255,0.1)" : "transparent"}
                color={facultySlug === "all" ? "white" : "brand.chalk"}
                fontSize="xs"
                style={{ transition: "all 180ms" }}
                _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                All faculty
              </Box>
              {faculty.map((f) => (
                <Box
                  key={f.slug}
                  as="button"
                  onClick={() => { setFacultySlug(f.slug); setShown(PAGE); }}
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={facultySlug === f.slug ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}
                  bg={facultySlug === f.slug ? "rgba(255,255,255,0.1)" : "transparent"}
                  color={facultySlug === f.slug ? "white" : "brand.chalk"}
                  fontSize="xs"
                  style={{ transition: "all 180ms" }}
                  _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  {f.name.replace(/^Prof\.\s*/, "")}{" "}
                  <Box as="span" color="brand.mist" ml={1}>({f.count})</Box>
                </Box>
              ))}
            </HStack>
          </Box>

          <HStack justify="space-between" color="brand.mist" fontSize="xs" letterSpacing="0.12em" textTransform="uppercase">
            <Text>Showing {Math.min(shown, filtered.length)} of {filtered.length}</Text>
            {(q || yearFilter !== "all" || facultySlug !== "all") && (
              <Box
                as="button"
                onClick={() => { setQ(""); setYearFilter("all"); setFacultySlug("all"); setShown(PAGE); }}
                color="brand.chalk"
                _hover={{ color: "white" }}
              >
                Clear filters ×
              </Box>
            )}
          </HStack>
        </VStack>

        {/* List */}
        {filtered.length === 0 ? (
          <VStack py={20} color="brand.mist">
            <Text fontSize="xl">No publications match.</Text>
            <Text fontSize="sm">Try a different filter or search term.</Text>
          </VStack>
        ) : (
          <>
            <VStack align="stretch" spacing={3}>
              {visible.map((e, i) => (
                <Box
                  key={`${e.facultySlug}-${i}`}
                  p={{ base: 5, md: 6 }}
                  borderRadius="xl"
                  bg="brand.graphite"
                  border="1px solid rgba(255,255,255,0.05)"
                  style={{ transition: "all 180ms ease" }}
                  _hover={{ borderColor: "rgba(255,255,255,0.15)", transform: "translateX(3px)" }}
                >
                  <HStack align="flex-start" spacing={5}>
                    {/* Year badge */}
                    <Box
                      minW="72px"
                      py={2}
                      borderRadius="lg"
                      bg={e.year ? "rgba(30,95,255,0.1)" : "rgba(255,255,255,0.04)"}
                      border="1px solid"
                      borderColor={e.year ? "rgba(30,95,255,0.25)" : "rgba(255,255,255,0.08)"}
                      textAlign="center"
                      flexShrink={0}
                    >
                      <Text fontFamily="mono" fontSize={{ base: "md", md: "lg" }} color={e.year ? "brand.iitBlue" : "brand.mist"} fontWeight={600}>
                        {e.year ?? "—"}
                      </Text>
                    </Box>

                    <VStack align="flex-start" spacing={2} flex={1} minW={0}>
                      <Text fontSize={{ base: "sm", md: "md" }} color="brand.chalk" lineHeight={1.55}>
                        {e.text}
                      </Text>
                      <Box
                        as="a"
                        href={`/faculty/${e.facultySlug}`}
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                        pt={1}
                        fontSize="xs"
                        color="brand.mist"
                        _hover={{ color: "white" }}
                        style={{ transition: "color 150ms" }}
                      >
                        <Box as="img" src={e.facultyImg} alt="" w="20px" h="20px" borderRadius="full" objectFit="cover" />
                        <Text>{e.facultyName}</Text>
                        <Text color="brand.gold" fontSize="2xs" letterSpacing="0.12em" textTransform="uppercase">
                          · {e.facultyArea}
                        </Text>
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>

            {shown < filtered.length && (
              <HStack justify="center" pt={10}>
                <Button
                  onClick={() => setShown((s) => s + PAGE)}
                  size="md"
                  variant="outline"
                  borderColor="rgba(255,255,255,0.2)"
                  color="white"
                  borderRadius="full"
                  px={8}
                  _hover={{ bg: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  Show {Math.min(PAGE, filtered.length - shown)} more →
                </Button>
              </HStack>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}
