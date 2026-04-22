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
  Button,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { PhDCard, type PhDStudent } from "@/components/students/StudentCard";

function SearchIcon() {
  return (
    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.6}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </Box>
  );
}

type View = "current" | "graduated";
const PAGE = 30;

export function PhDStudents({
  current,
  graduated,
}: {
  current: PhDStudent[];
  graduated: PhDStudent[];
}) {
  const [view, setView] = useState<View>("current");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(PAGE);

  const list = view === "current" ? current : graduated;
  const ql = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!ql) return list;
    return list.filter(
      (s) =>
        s.name.toLowerCase().includes(ql) ||
        (s.area ?? "").toLowerCase().includes(ql) ||
        (s.supervisor ?? "").toLowerCase().includes(ql) ||
        (s.thesisTitle ?? "").toLowerCase().includes(ql) ||
        (s.degree ?? "").toLowerCase().includes(ql),
    );
  }, [list, ql]);

  const visible = filtered.slice(0, shown);

  return (
    <Box as="section" py={{ base: 10, md: 14 }} bg="brand.ink">
      <Container maxW="7xl">
        <HStack spacing={3} flexWrap="wrap" rowGap={3} justify="space-between" mb={{ base: 10, md: 14 }}>
          <HStack spacing={2}>
            {[
              ["current", `Current · ${current.length}`],
              ["graduated", `Graduated · ${graduated.length}`],
            ].map(([k, label]) => {
              const kt = k as View;
              return (
                <Box
                  key={kt}
                  as="button"
                  onClick={() => { setView(kt); setShown(PAGE); }}
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

          <InputGroup maxW={{ base: "full", md: "340px" }}>
            <InputLeftElement pointerEvents="none" color="brand.mist">
              <SearchIcon />
            </InputLeftElement>
            <Input
              placeholder="Search by name, area, supervisor, thesis…"
              value={q}
              onChange={(e) => { setQ(e.target.value); setShown(PAGE); }}
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

        <HStack justify="space-between" color="brand.mist" fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" mb={6}>
          <Text>
            Showing {Math.min(shown, filtered.length)} of {filtered.length}
          </Text>
          {q && (
            <Box as="button" onClick={() => { setQ(""); setShown(PAGE); }} color="brand.chalk" _hover={{ color: "white" }}>
              Clear search ×
            </Box>
          )}
        </HStack>

        {filtered.length === 0 ? (
          <VStack py={20} color="brand.mist">
            <Text fontSize="xl">No scholars match.</Text>
          </VStack>
        ) : (
          <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {visible.map((s, i) => (
                <PhDCard key={`${s.name}-${i}`} s={s} />
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
