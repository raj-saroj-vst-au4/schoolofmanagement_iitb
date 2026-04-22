"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button } from "@chakra-ui/react";
import { useState } from "react";

type Section = { heading: string; items: string[]; paragraphs: string[] };
type ExtraSection = { heading: string; items: string[]; paragraphs: string[] };

type Sections = {
  education?: Section;
  researchInterests?: Section;
  teachingInterests?: Section;
  positions?: Section;
  awards?: Section;
  publications?: Section;
  projects?: Section;
  consultancy?: Section;
  phdStudents?: Section;
  books?: Section;
  other?: Section;
};

type Props = {
  bio?: string;
  sections: Sections;
  extraSections?: ExtraSection[];
};

function SectionShell({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title?: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <Box as="section" py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <VStack align="flex-start" spacing={{ base: 6, md: 8 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg={accent} />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              {eyebrow}
            </Text>
          </HStack>
          {title && (
            <Heading fontSize={{ base: "3xl", md: "4xl" }} letterSpacing="-0.03em" lineHeight={1.1}>
              {title}
            </Heading>
          )}
          <Box w="full">{children}</Box>
        </VStack>
      </Container>
    </Box>
  );
}

function ChipRow({ items, accent }: { items: string[]; accent: string }) {
  return (
    <HStack flexWrap="wrap" spacing={2.5} rowGap={2.5}>
      {items.map((it) => (
        <Box
          key={it}
          px={4}
          py={2}
          borderRadius="full"
          border="1px solid"
          borderColor={`${accent}33`}
          bg={`${accent}0a`}
          fontSize="sm"
          color="brand.chalk"
        >
          {it}
        </Box>
      ))}
    </HStack>
  );
}

function Collapsible({
  items,
  initial = 6,
  accent,
  labelMore = "Show more",
  labelLess = "Show less",
}: {
  items: string[];
  initial?: number;
  accent: string;
  labelMore?: string;
  labelLess?: string;
}) {
  const [open, setOpen] = useState(false);
  const visible = open ? items : items.slice(0, initial);
  const hasMore = items.length > initial;
  return (
    <VStack align="stretch" spacing={3}>
      {visible.map((it, i) => (
        <HStack
          key={i}
          spacing={4}
          align="flex-start"
          p={4}
          borderRadius="lg"
          bg="rgba(255,255,255,0.02)"
          border="1px solid rgba(255,255,255,0.05)"
        >
          <Box
            mt={1.5}
            w="6px"
            h="6px"
            borderRadius="full"
            bg={accent}
            flexShrink={0}
            opacity={0.8}
          />
          <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>
            {it}
          </Text>
        </HStack>
      ))}
      {hasMore && (
        <HStack pt={2}>
          <Button
            variant="ghost"
            color="brand.chalk"
            size="sm"
            onClick={() => setOpen(!open)}
            _hover={{ bg: "rgba(255,255,255,0.06)", color: "white" }}
            fontSize="xs"
            letterSpacing="0.1em"
            textTransform="uppercase"
          >
            {open ? labelLess : `${labelMore} (${items.length - initial} more)`}
          </Button>
        </HStack>
      )}
    </VStack>
  );
}

export function ProfileBody({ bio, sections, extraSections = [] }: Props) {
  const s = sections;

  return (
    <Box bg="brand.ink">
      {/* Bio paragraph */}
      {bio && (
        <Box as="section" py={{ base: 14, md: 20 }} borderBottom="1px solid rgba(255,255,255,0.04)">
          <Container maxW="4xl">
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              color="brand.chalk"
              lineHeight={1.55}
              letterSpacing="-0.01em"
              fontWeight={300}
            >
              {bio}
            </Text>
          </Container>
        </Box>
      )}

      {/* Interests row — research + teaching side by side */}
      {(s.researchInterests?.items?.length || s.teachingInterests?.items?.length) ? (
        <Box as="section" py={{ base: 12, md: 16 }} borderBottom="1px solid rgba(255,255,255,0.04)">
          <Container maxW="6xl">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 14 }}>
              {s.researchInterests?.items?.length ? (
                <VStack align="flex-start" spacing={5}>
                  <HStack spacing={3}>
                    <Box w="24px" h="1px" bg="brand.iitBlue" />
                    <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                      Research Interests
                    </Text>
                  </HStack>
                  <ChipRow items={s.researchInterests.items} accent="#1E5FFF" />
                </VStack>
              ) : <Box />}
              {s.teachingInterests?.items?.length ? (
                <VStack align="flex-start" spacing={5}>
                  <HStack spacing={3}>
                    <Box w="24px" h="1px" bg="brand.gold" />
                    <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                      Teaching Interests
                    </Text>
                  </HStack>
                  <ChipRow items={s.teachingInterests.items} accent="#C9A96E" />
                </VStack>
              ) : <Box />}
            </SimpleGrid>
          </Container>
        </Box>
      ) : null}

      {/* Education timeline */}
      {s.education?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell eyebrow="Education" accent="#7C5CFF">
            <VStack align="stretch" spacing={4}>
              {s.education.items.map((it, i) => (
                <HStack
                  key={i}
                  spacing={5}
                  p={5}
                  borderRadius="xl"
                  bg="rgba(124,92,255,0.04)"
                  border="1px solid rgba(124,92,255,0.15)"
                  align="flex-start"
                >
                  <Box
                    minW="36px"
                    h="36px"
                    borderRadius="full"
                    bg="rgba(124,92,255,0.2)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontFamily="mono"
                    fontSize="sm"
                    color="#b1a0ff"
                    fontWeight={600}
                  >
                    {s.education!.items.length - i}
                  </Box>
                  <Text fontSize={{ base: "md", md: "lg" }} color="brand.chalk" lineHeight={1.5}>
                    {it}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </SectionShell>
        </Box>
      ) : null}

      {/* Positions */}
      {s.positions?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell eyebrow="Positions & experience" accent="#2ECC71">
            <Collapsible items={s.positions.items} initial={6} accent="#2ECC71" />
          </SectionShell>
        </Box>
      ) : null}

      {/* Awards */}
      {s.awards?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell eyebrow="Awards & honours" accent="#C9A96E">
            <Collapsible items={s.awards.items} initial={5} accent="#C9A96E" />
          </SectionShell>
        </Box>
      ) : null}

      {/* Publications */}
      {s.publications?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell
            eyebrow="Publications"
            title={s.publications.items.length > 10 ? `Selected publications (${s.publications.items.length})` : "Publications"}
            accent="#1E5FFF"
          >
            <Collapsible items={s.publications.items} initial={10} accent="#1E5FFF" />
          </SectionShell>
        </Box>
      ) : null}

      {/* Projects */}
      {s.projects?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell eyebrow="Research projects" accent="#D63638">
            <Collapsible items={s.projects.items} initial={5} accent="#D63638" />
          </SectionShell>
        </Box>
      ) : null}

      {/* PhD Students */}
      {s.phdStudents?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell eyebrow="PhD students supervised" accent="#7C5CFF">
            <Collapsible items={s.phdStudents.items} initial={6} accent="#7C5CFF" />
          </SectionShell>
        </Box>
      ) : null}

      {/* Consultancy */}
      {s.consultancy?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell eyebrow="Consultancy" accent="#C9A96E">
            <Collapsible items={s.consultancy.items} initial={5} accent="#C9A96E" />
          </SectionShell>
        </Box>
      ) : null}

      {/* Books */}
      {s.books?.items?.length ? (
        <Box borderBottom="1px solid rgba(255,255,255,0.04)">
          <SectionShell eyebrow="Books" accent="#E066C9">
            <Collapsible items={s.books.items} initial={5} accent="#E066C9" />
          </SectionShell>
        </Box>
      ) : null}

      {/* Extra catchall sections */}
      {extraSections
        .filter((e) => (e.items && e.items.length) || (e.paragraphs && e.paragraphs.length))
        .map((e) => (
          <Box key={e.heading} borderBottom="1px solid rgba(255,255,255,0.04)">
            <SectionShell eyebrow={e.heading} accent="#8A94A6">
              {e.paragraphs.length > 0 && (
                <VStack align="stretch" spacing={4} mb={e.items.length ? 5 : 0}>
                  {e.paragraphs.map((p, i) => (
                    <Text key={i} color="brand.chalk" lineHeight={1.7}>
                      {p}
                    </Text>
                  ))}
                </VStack>
              )}
              {e.items.length > 0 && <Collapsible items={e.items} initial={5} accent="#8A94A6" />}
            </SectionShell>
          </Box>
        ))}

      {/* Other interests / personal */}
      {s.other?.items?.length ? (
        <SectionShell eyebrow="Also" accent="#8A94A6">
          <ChipRow items={s.other.items} accent="#8A94A6" />
        </SectionShell>
      ) : null}

      {/* Back to core faculty CTA */}
      <Box as="section" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)">
        <Container maxW="4xl" textAlign="center">
          <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist" mb={5}>
            Explore more
          </Text>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" mb={8}>
            Meet the rest of the core faculty.
          </Heading>
          <Button
            as="a"
            href="/faculty/core"
            size="lg"
            bg="white"
            color="black"
            _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
            borderRadius="full"
            px={8}
          >
            ← All core faculty
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
