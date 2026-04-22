"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ---------------- types ---------------- */

type Section = { heading: string; items: string[]; paragraphs: string[] };
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
  name: string;
  title?: string | null;
  area: string;
  degree: string;
  img: string;
  bio?: string;
  email?: string | null;
  homepage?: string | null;
  linkedin?: string | null;
  sections: Sections;
  extraSections?: Section[];
};

/* ---------------- icons ---------------- */
function MailIcon() { return <Box as="svg" w="14px" h="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Box>; }
function GlobeIcon() { return <Box as="svg" w="14px" h="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></Box>; }
function LinkedInIcon() { return <Box as="svg" w="13px" h="13px" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25H4.75V23H.25V8.25zM8 8.25h4.3v2h.06c.6-1.13 2.06-2.32 4.25-2.32 4.55 0 5.39 2.99 5.39 6.88V23h-4.5v-6.66c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23H8V8.25z" /></Box>; }

/* ---------------- small helpers ---------------- */
function ChipRow({ items, accent }: { items: string[]; accent: string }) {
  return (
    <HStack flexWrap="wrap" spacing={2.5} rowGap={2.5}>
      {items.map((it) => (
        <Box key={it} px={4} py={2} borderRadius="full" border="1px solid" borderColor={`${accent}33`} bg={`${accent}0a`} fontSize="sm" color="brand.chalk">
          {it}
        </Box>
      ))}
    </HStack>
  );
}

function Bullets({ items, accent }: { items: string[]; accent: string }) {
  const [open, setOpen] = useState(false);
  const visible = open ? items : items.slice(0, 6);
  const hasMore = items.length > 6;
  return (
    <VStack align="stretch" spacing={3}>
      {visible.map((it, i) => (
        <HStack key={i} spacing={4} align="flex-start" p={4} borderRadius="lg" bg="rgba(255,255,255,0.02)" border="1px solid rgba(255,255,255,0.05)">
          <Box mt={1.5} w="6px" h="6px" borderRadius="full" bg={accent} flexShrink={0} opacity={0.85} />
          <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>{it}</Text>
        </HStack>
      ))}
      {hasMore && (
        <Button variant="ghost" color="brand.chalk" size="sm" onClick={() => setOpen(!open)} _hover={{ bg: "rgba(255,255,255,0.06)", color: "white" }} fontSize="xs" letterSpacing="0.1em" textTransform="uppercase" w="fit-content" mt={2}>
          {open ? "Show less" : `Show ${items.length - 6} more`}
        </Button>
      )}
    </VStack>
  );
}

/* ---------------- pin state types ---------------- */
type Pin = "before" | "pinned" | "after";

/* ---------------- main component ---------------- */

export function PinnedProfile(p: Props) {
  const s = p.sections;

  // Build an ordered list of sections that exist for THIS faculty.
  type SectionDef = {
    key: string;
    eyebrow: string;
    title: string;
    accent: string;
    hint: string;
    render: () => React.ReactNode;
  };

  const defs: SectionDef[] = [];

  if (p.bio) {
    defs.push({
      key: "about",
      eyebrow: "About",
      title: "In their own words",
      accent: "#E8ECF2",
      hint: "A short intro",
      render: () => (
        <Text fontSize={{ base: "lg", md: "2xl" }} color="brand.chalk" lineHeight={1.55} letterSpacing="-0.01em" fontWeight={300}>
          {p.bio}
        </Text>
      ),
    });
  }

  if (s.researchInterests?.items?.length || s.teachingInterests?.items?.length) {
    defs.push({
      key: "interests",
      eyebrow: "Interests",
      title: "Research & teaching",
      accent: "#1E5FFF",
      hint: "What they work on and what they teach",
      render: () => (
        <VStack align="stretch" spacing={8}>
          {s.researchInterests?.items?.length ? (
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="xs" color="brand.iitBlue" letterSpacing="0.2em" textTransform="uppercase" fontWeight={600}>Research</Text>
              <ChipRow items={s.researchInterests.items} accent="#1E5FFF" />
            </VStack>
          ) : null}
          {s.teachingInterests?.items?.length ? (
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="xs" color="brand.gold" letterSpacing="0.2em" textTransform="uppercase" fontWeight={600}>Teaching</Text>
              <ChipRow items={s.teachingInterests.items} accent="#C9A96E" />
            </VStack>
          ) : null}
        </VStack>
      ),
    });
  }

  if (s.education?.items?.length) {
    defs.push({
      key: "education",
      eyebrow: "Education",
      title: "Degrees & training",
      accent: "#7C5CFF",
      hint: "Where they learned",
      render: () => (
        <VStack align="stretch" spacing={4}>
          {s.education!.items.map((it, i) => (
            <HStack key={i} spacing={5} p={5} borderRadius="xl" bg="rgba(124,92,255,0.04)" border="1px solid rgba(124,92,255,0.15)" align="flex-start">
              <Box minW="36px" h="36px" borderRadius="full" bg="rgba(124,92,255,0.2)" display="flex" alignItems="center" justifyContent="center" fontFamily="mono" fontSize="sm" color="#b1a0ff" fontWeight={600}>
                {s.education!.items.length - i}
              </Box>
              <Text fontSize={{ base: "md", md: "lg" }} color="brand.chalk" lineHeight={1.5}>{it}</Text>
            </HStack>
          ))}
        </VStack>
      ),
    });
  }

  if (s.positions?.items?.length) {
    defs.push({ key: "positions", eyebrow: "Positions", title: "Positions & experience", accent: "#2ECC71", hint: "Professional journey", render: () => <Bullets items={s.positions!.items} accent="#2ECC71" /> });
  }
  if (s.awards?.items?.length) {
    defs.push({ key: "awards", eyebrow: "Recognition", title: "Awards & honours", accent: "#C9A96E", hint: "Recognition received", render: () => <Bullets items={s.awards!.items} accent="#C9A96E" /> });
  }
  if (s.publications?.items?.length) {
    defs.push({ key: "publications", eyebrow: "Publications", title: `${s.publications.items.length} selected publications`, accent: "#1E5FFF", hint: "Journal articles & papers", render: () => <Bullets items={s.publications!.items} accent="#1E5FFF" /> });
  }
  if (s.projects?.items?.length) {
    defs.push({ key: "projects", eyebrow: "Projects", title: "Research projects", accent: "#D63638", hint: "Funded research", render: () => <Bullets items={s.projects!.items} accent="#D63638" /> });
  }
  if (s.phdStudents?.items?.length) {
    defs.push({ key: "phd", eyebrow: "Supervision", title: "PhD students", accent: "#7C5CFF", hint: "Doctoral students mentored", render: () => <Bullets items={s.phdStudents!.items} accent="#7C5CFF" /> });
  }
  if (s.consultancy?.items?.length) {
    defs.push({ key: "consultancy", eyebrow: "Consulting", title: "Consultancy", accent: "#C9A96E", hint: "Industry engagements", render: () => <Bullets items={s.consultancy!.items} accent="#C9A96E" /> });
  }
  if (s.books?.items?.length) {
    defs.push({ key: "books", eyebrow: "Books", title: "Books & chapters", accent: "#E066C9", hint: "Authored works", render: () => <Bullets items={s.books!.items} accent="#E066C9" /> });
  }
  (p.extraSections ?? [])
    .filter((e) => (e.items && e.items.length) || (e.paragraphs && e.paragraphs.length))
    .forEach((e, i) => {
      defs.push({
        key: `extra-${i}`,
        eyebrow: e.heading,
        title: e.heading,
        accent: "#8A94A6",
        hint: "",
        render: () => (
          <VStack align="stretch" spacing={5}>
            {e.paragraphs.map((para, j) => (
              <Text key={j} color="brand.chalk" lineHeight={1.7}>{para}</Text>
            ))}
            {e.items.length > 0 && <Bullets items={e.items} accent="#8A94A6" />}
          </VStack>
        ),
      });
    });
  if (s.other?.items?.length) {
    defs.push({ key: "other", eyebrow: "Also", title: "Other interests", accent: "#8A94A6", hint: "Personal", render: () => <ChipRow items={s.other!.items} accent="#8A94A6" /> });
  }

  /* ---------- pin + active tracking ---------- */
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftOuterRef = useRef<HTMLDivElement>(null);
  const [pin, setPin] = useState<Pin>("before");
  const [active, setActive] = useState(0);
  const [leftWidth, setLeftWidth] = useState<number | null>(null);
  const [leftLeft, setLeftLeft] = useState<number>(0);

  useLayoutEffect(() => {
    const el = leftOuterRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setLeftWidth(r.width);
      setLeftLeft(r.left);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let rafId = 0;
    let queued = false;
    const update = () => {
      queued = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top > 0) setPin("before");
      else if (rect.bottom <= vh) setPin("after");
      else setPin("pinned");
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (defs.length === 0) return;
    const slots = Array.from(document.querySelectorAll<HTMLElement>("[data-profile-section]"));
    if (!slots.length) return;
    let rafId = 0;
    let queued = false;
    const update = () => {
      queued = false;
      const vhCenter = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (const el of slots) {
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const d = Math.abs(c - vhCenter);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = Number(el.dataset.profileSection);
        }
      }
      setActive(bestIdx);
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [defs.length]);

  const pinnedStyle =
    pin === "pinned"
      ? { position: "fixed" as const, top: 0, left: leftLeft, width: leftWidth ?? undefined }
      : pin === "after"
        ? { position: "absolute" as const, bottom: 0, left: 0, width: "100%" }
        : { position: "absolute" as const, top: 0, left: 0, width: "100%" };

  const activeDef = defs[active];

  /* ---------- render ---------- */
  return (
    <Box as="section" position="relative" bg="brand.ink">
      {/* Soft blurred backdrop derived from the portrait */}
      <Box
        as="img"
        src={p.img}
        alt=""
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.12}
        style={{ filter: "blur(80px) saturate(1.6)" }}
        aria-hidden
      />
      <Box position="absolute" inset={0} bgGradient="linear(to-b, rgba(5,7,10,0.7), rgba(5,7,10,0.96))" />

      <Container maxW="7xl" position="relative" zIndex={2}>
        {/* Breadcrumb */}
        <HStack
          as="a"
          href="/faculty/core"
          spacing={2}
          pt={{ base: 24, md: 28 }}
          mb={{ base: 8, md: 10 }}
          fontSize="xs"
          color="brand.mist"
          letterSpacing="0.15em"
          textTransform="uppercase"
          _hover={{ color: "white" }}
          style={{ transition: "color 150ms" }}
          w="fit-content"
        >
          <Text>←</Text>
          <Text>Core Faculty</Text>
        </HStack>

        {/* MOBILE layout — simple stack, no pinning */}
        <Box display={{ base: "block", lg: "none" }}>
          <Box
            position="relative"
            borderRadius="2xl"
            overflow="hidden"
            style={{ aspectRatio: "4 / 5" }}
            maxW="400px"
            border="1px solid rgba(255,255,255,0.1)"
            mb={8}
          >
            <Box as="img" src={p.img} alt={p.name} w="full" h="full" objectFit="cover" />
          </Box>
          <Text fontSize="2xs" color="brand.gold" letterSpacing="0.24em" textTransform="uppercase" fontWeight={600}>{p.area}</Text>
          <Heading as="h1" fontSize="5xl" letterSpacing="-0.04em" lineHeight={0.95} fontWeight={600} mt={3} mb={3}>{p.name}</Heading>
          {p.title && <Text fontSize="md" color="brand.chalk" fontStyle="italic">{p.title}</Text>}
          <Text fontSize="sm" color="brand.mist" fontFamily="mono" mt={2}>{p.degree}</Text>
          <HStack spacing={2} pt={5} flexWrap="wrap" rowGap={2}>
            {p.email && <Button as="a" href={`mailto:${p.email}`} leftIcon={<MailIcon />} bg="white" color="black" size="sm" fontSize="xs" borderRadius="full" _hover={{ bg: "brand.chalk" }}>Email</Button>}
            {p.homepage && <Button as="a" href={p.homepage} target="_blank" rel="noopener noreferrer" leftIcon={<GlobeIcon />} variant="outline" borderColor="rgba(255,255,255,0.2)" color="white" size="sm" fontSize="xs" borderRadius="full" _hover={{ bg: "rgba(255,255,255,0.06)" }}>SJMSOM</Button>}
            {p.linkedin && <Button as="a" href={p.linkedin} target="_blank" rel="noopener noreferrer" leftIcon={<LinkedInIcon />} variant="outline" borderColor="rgba(255,255,255,0.2)" color="white" size="sm" fontSize="xs" borderRadius="full" _hover={{ bg: "rgba(255,255,255,0.06)" }}>LinkedIn</Button>}
          </HStack>

          <VStack align="stretch" spacing={14} pt={16}>
            {defs.map((d) => (
              <VStack key={d.key} align="stretch" spacing={5}>
                <HStack spacing={3}>
                  <Box w="24px" h="1px" bg={d.accent} />
                  <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">{d.eyebrow}</Text>
                </HStack>
                <Heading fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.03em">{d.title}</Heading>
                {d.render()}
              </VStack>
            ))}
          </VStack>
        </Box>

        {/* DESKTOP layout — pinned parallax */}
        <Box
          display={{ base: "none", lg: "flex" }}
          ref={sectionRef}
          position="relative"
          alignItems="stretch"
          pb={{ lg: 16 }}
        >
          {/* LEFT outer — stretches to full right-column height */}
          <Box ref={leftOuterRef} flex="1 1 0" w="42%" maxW="42%" pr={14} position="relative">
            <Box
              {...pinnedStyle}
              h="100vh"
              display="flex"
              alignItems="center"
              pr={14}
              pointerEvents="none"
            >
              <VStack align="flex-start" spacing={6} w="full" pointerEvents="auto">
                {/* Portrait */}
                <Box
                  position="relative"
                  w="full"
                  maxW="380px"
                  style={{ aspectRatio: "4 / 5" }}
                  borderRadius="3xl"
                  overflow="hidden"
                  border="1px solid rgba(255,255,255,0.1)"
                  boxShadow="0 30px 80px rgba(0,0,0,0.5)"
                >
                  <Box as="img" src={p.img} alt={p.name} w="full" h="full" objectFit="cover" style={{ filter: "contrast(1.05)" }} />
                  <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(18,22,29,0.3) 0%, transparent 40%)" />
                </Box>

                {/* Identity */}
                <VStack align="flex-start" spacing={2}>
                  <Text fontSize="2xs" color="brand.gold" letterSpacing="0.24em" textTransform="uppercase" fontWeight={600}>{p.area}</Text>
                  <Heading as="h1" fontSize={{ lg: "3xl", xl: "4xl" }} letterSpacing="-0.03em" lineHeight={0.95} fontWeight={600}>{p.name}</Heading>
                  {p.title && <Text fontSize="sm" color="brand.chalk" fontStyle="italic">{p.title}</Text>}
                  <Text fontSize="xs" color="brand.mist" fontFamily="mono">{p.degree}</Text>
                </VStack>

                {/* Active-section indicator + progress */}
                {activeDef && (
                  <Box w="full" borderTop="1px solid rgba(255,255,255,0.08)" pt={4}>
                    <HStack spacing={3} mb={2}>
                      <Box w="24px" h="1px" bg={activeDef.accent} style={{ transition: "background 400ms" }} />
                      <Text
                        fontSize="2xs"
                        letterSpacing="0.3em"
                        textTransform="uppercase"
                        color="brand.mist"
                        key={activeDef.key}
                      >
                        Now reading · {active + 1} of {defs.length}
                      </Text>
                    </HStack>

                    {/* Crossfade the section label */}
                    <Box position="relative" minH="70px">
                      {defs.map((d, i) => {
                        const isActive = i === active;
                        return (
                          <VStack
                            key={d.key}
                            position="absolute"
                            inset={0}
                            align="flex-start"
                            spacing={1}
                            opacity={isActive ? 1 : 0}
                            transform={isActive ? "translateY(0)" : "translateY(6px)"}
                            transition="opacity 400ms ease, transform 400ms ease"
                            pointerEvents={isActive ? "auto" : "none"}
                          >
                            <Heading fontSize="xl" letterSpacing="-0.02em" lineHeight={1.15}>
                              {d.title}
                            </Heading>
                            {d.hint && <Text fontSize="xs" color="brand.mist">{d.hint}</Text>}
                          </VStack>
                        );
                      })}
                    </Box>

                    {/* Progress rail */}
                    <HStack spacing={1.5} pt={3}>
                      {defs.map((d, i) => (
                        <Box
                          key={d.key}
                          h="2px"
                          flex="1 1 0"
                          borderRadius="full"
                          bg={i === active ? d.accent : "rgba(255,255,255,0.12)"}
                          style={{ transition: "background 400ms" }}
                        />
                      ))}
                    </HStack>
                  </Box>
                )}

                {/* Action buttons */}
                <HStack spacing={2} pt={2} flexWrap="wrap" rowGap={2}>
                  {p.email && (
                    <Button as="a" href={`mailto:${p.email}`} leftIcon={<MailIcon />} bg="white" color="black" _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }} size="sm" fontSize="xs" fontWeight={600} borderRadius="full">
                      {p.email}
                    </Button>
                  )}
                  {p.homepage && (
                    <Tooltip label="SJMSOM homepage" placement="top" hasArrow bg="brand.obsidian" color="white" fontSize="xs">
                      <Box as="a" href={p.homepage} target="_blank" rel="noopener noreferrer" aria-label="SJMSOM homepage" display="inline-flex" alignItems="center" justifyContent="center" w="36px" h="36px" borderRadius="full" border="1px solid rgba(255,255,255,0.2)" color="white" style={{ transition: "all 180ms ease" }} _hover={{ bg: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.4)" }}>
                        <GlobeIcon />
                      </Box>
                    </Tooltip>
                  )}
                  {p.linkedin && (
                    <Tooltip label="Find on LinkedIn" placement="top" hasArrow bg="brand.obsidian" color="white" fontSize="xs">
                      <Box as="a" href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" display="inline-flex" alignItems="center" justifyContent="center" w="36px" h="36px" borderRadius="full" border="1px solid rgba(255,255,255,0.2)" color="white" style={{ transition: "all 180ms ease" }} _hover={{ bg: "#0A66C2", borderColor: "#0A66C2", transform: "translateY(-1px)" }}>
                        <LinkedInIcon />
                      </Box>
                    </Tooltip>
                  )}
                </HStack>
              </VStack>
            </Box>
          </Box>

          {/* RIGHT — scrolling content */}
          <Box flex="1 1 0" w="58%" maxW="58%" pt={4}>
            <VStack align="stretch" spacing={{ lg: 28, xl: 32 }}>
              {defs.map((d, i) => (
                <Box
                  key={d.key}
                  data-profile-section={i}
                  minH={i === 0 || i === defs.length - 1 ? "60vh" : "80vh"}
                >
                  <VStack align="stretch" spacing={6}>
                    <HStack spacing={3}>
                      <Box w="24px" h="1px" bg={d.accent} />
                      <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
                        {d.eyebrow}
                      </Text>
                    </HStack>
                    <Heading fontSize={{ lg: "3xl", xl: "4xl" }} letterSpacing="-0.03em" lineHeight={1.1}>
                      {d.title}
                    </Heading>
                    <Box pt={2}>{d.render()}</Box>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box as="section" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)" mt={{ base: 16, lg: 0 }}>
          <VStack spacing={6} textAlign="center">
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Explore more
            </Text>
            <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
              Meet the rest of the core faculty.
            </Heading>
            <Button as="a" href="/faculty/core" size="lg" bg="white" color="black" _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }} borderRadius="full" px={8}>
              ← All core faculty
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
