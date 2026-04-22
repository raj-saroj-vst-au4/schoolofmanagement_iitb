"use client";

import {
  Box,
  Container,
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
import type { Award } from "@/lib/aggregate";
import { AwardCard } from "./AwardCard";

function SearchIcon() {
  return (
    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.6}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </Box>
  );
}

const PAGE = 12;

export function StudentAwardsList({ entries }: { entries: Award[] }) {
  const [q, setQ] = useState("");
  const [batch, setBatch] = useState("all");
  const [shown, setShown] = useState(PAGE);

  const batches = useMemo(() => {
    const m = new Map<string, number>();
    for (const e of entries) {
      const key = e.batch ?? "Unspecified";
      m.set(key, (m.get(key) ?? 0) + 1);
    }
    return [...m.entries()]
      .map(([key, count]) => ({ key, count }))
      .sort((a, b) => b.count - a.count);
  }, [entries]);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return entries.filter((e) => {
      if (batch !== "all" && (e.batch ?? "Unspecified") !== batch) return false;
      if (ql) {
        const hay = [e.title, e.event ?? "", e.recipient, e.team ?? "", e.writeup]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(ql)) return false;
      }
      return true;
    });
  }, [entries, q, batch]);

  const visible = filtered.slice(0, shown);

  if (!entries.length) {
    return (
      <Box as="section" py={{ base: 10, md: 16 }} bg="brand.ink">
        <Container maxW="6xl">
          <VStack py={20} color="brand.mist" spacing={3}>
            <Text fontSize="xl">No student awards yet.</Text>
            <Text fontSize="sm" maxW="md" textAlign="center">
              Achievements by our MBA and PhD students will appear here as they come in.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  }

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
                placeholder="Search student awards…"
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

          {batches.length > 1 && (
            <Box>
              <Text fontSize="xs" color="brand.mist" letterSpacing="0.16em" textTransform="uppercase" mb={3}>
                Filter by batch ({batches.length})
              </Text>
              <HStack flexWrap="wrap" spacing={2} rowGap={2}>
                <Box
                  as="button"
                  onClick={() => { setBatch("all"); setShown(PAGE); }}
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={batch === "all" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}
                  bg={batch === "all" ? "rgba(255,255,255,0.1)" : "transparent"}
                  color={batch === "all" ? "white" : "brand.chalk"}
                  fontSize="xs"
                  _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  All batches
                </Box>
                {batches.map((b) => (
                  <Box
                    key={b.key}
                    as="button"
                    onClick={() => { setBatch(b.key); setShown(PAGE); }}
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    border="1px solid"
                    borderColor={batch === b.key ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}
                    bg={batch === b.key ? "rgba(255,255,255,0.1)" : "transparent"}
                    color={batch === b.key ? "white" : "brand.chalk"}
                    fontSize="xs"
                    _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                  >
                    {b.key} <Box as="span" color="brand.mist" ml={1}>({b.count})</Box>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}

          <HStack justify="space-between" color="brand.mist" fontSize="xs" letterSpacing="0.12em" textTransform="uppercase">
            <Text>Showing {Math.min(shown, filtered.length)} of {filtered.length}</Text>
            {(q || batch !== "all") && (
              <Box
                as="button"
                onClick={() => { setQ(""); setBatch("all"); setShown(PAGE); }}
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
            <Text fontSize="xl">No student awards match.</Text>
          </VStack>
        ) : (
          <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6 }}>
              {visible.map((a) => (
                <AwardCard key={a.id} award={a} />
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
