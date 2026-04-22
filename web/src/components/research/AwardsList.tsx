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

const PAGE = 20;

export function AwardsList({ entries }: { entries: Entry[] }) {
  const [q, setQ] = useState("");
  const [facultySlug, setFacultySlug] = useState("all");
  const [shown, setShown] = useState(PAGE);

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
    return entries
      .filter((e) => {
        if (facultySlug !== "all" && e.facultySlug !== facultySlug) return false;
        if (ql && !e.text.toLowerCase().includes(ql) && !e.facultyName.toLowerCase().includes(ql)) return false;
        return true;
      })
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }, [entries, q, facultySlug]);

  const visible = filtered.slice(0, shown);

  return (
    <Box as="section" py={{ base: 10, md: 16 }} bg="brand.ink">
      <Container maxW="6xl">
        <VStack align="stretch" spacing={5} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box flex={1} />
            <InputGroup maxW={{ base: "full", md: "280px" }}>
              <InputLeftElement pointerEvents="none" color="brand.mist">
                <SearchIcon />
              </InputLeftElement>
              <Input
                placeholder="Search awards…"
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
                  _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  {f.name.replace(/^Prof\.\s*/, "")} <Box as="span" color="brand.mist" ml={1}>({f.count})</Box>
                </Box>
              ))}
            </HStack>
          </Box>

          <HStack justify="space-between" color="brand.mist" fontSize="xs" letterSpacing="0.12em" textTransform="uppercase">
            <Text>Showing {Math.min(shown, filtered.length)} of {filtered.length}</Text>
            {(q || facultySlug !== "all") && (
              <Box
                as="button"
                onClick={() => { setQ(""); setFacultySlug("all"); setShown(PAGE); }}
                color="brand.chalk"
                _hover={{ color: "white" }}
              >
                Clear filters ×
              </Box>
            )}
          </HStack>
        </VStack>

        {filtered.length === 0 ? (
          <VStack py={20} color="brand.mist">
            <Text fontSize="xl">No awards match.</Text>
          </VStack>
        ) : (
          <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {visible.map((e, i) => (
                <Box
                  key={`${e.facultySlug}-${i}`}
                  p={{ base: 5, md: 6 }}
                  borderRadius="xl"
                  bg="brand.graphite"
                  border="1px solid rgba(255,255,255,0.06)"
                  position="relative"
                  overflow="hidden"
                  style={{ transition: "all 180ms ease" }}
                  _hover={{ borderColor: "rgba(201,169,110,0.4)", transform: "translateY(-2px)" }}
                >
                  <Box position="absolute" top={0} left={0} bottom={0} w="3px" bg="brand.gold" opacity={0.7} />
                  <VStack align="stretch" spacing={4} pl={2}>
                    {e.year && (
                      <Text fontFamily="mono" fontSize="xs" color="brand.gold" fontWeight={600} letterSpacing="0.15em">
                        {e.year}
                      </Text>
                    )}
                    <Text fontSize="sm" color="brand.chalk" lineHeight={1.55}>
                      {e.text}
                    </Text>
                    <Box
                      as="a"
                      href={`/faculty/${e.facultySlug}`}
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      fontSize="xs"
                      color="brand.mist"
                      _hover={{ color: "white" }}
                      style={{ transition: "color 150ms" }}
                    >
                      <Box as="img" src={e.facultyImg} alt="" w="20px" h="20px" borderRadius="full" objectFit="cover" />
                      <Text>{e.facultyName}</Text>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

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
