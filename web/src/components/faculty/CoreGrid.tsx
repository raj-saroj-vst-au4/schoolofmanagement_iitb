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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import facultyData from "@/data/faculty.json";

type Faculty = {
  slug: string;
  name: string;
  degree: string;
  area: string;
  tagline?: string;
  img: string;
  bio?: string;
  homepage?: string | null;
  linkedin?: string | null;
};

const faculty: Faculty[] = facultyData as Faculty[];

type Group = { key: string; label: string; match: (area: string) => boolean };
const groups: Group[] = [
  { key: "all",          label: "All",                    match: () => true },
  { key: "finance",      label: "Finance & Accounting",   match: (a) => /finance|accounting/i.test(a) },
  { key: "marketing",    label: "Marketing",              match: (a) => /marketing|branding/i.test(a) },
  { key: "operations",   label: "Operations & Decision",  match: (a) => /operations|decision|statistics|quality|supply/i.test(a) },
  { key: "strategy",     label: "Strategy",               match: (a) => /strategy|competitiveness|international/i.test(a) },
  { key: "economics",    label: "Economics",              match: (a) => /economics|policy/i.test(a) },
  { key: "info-systems", label: "Information Systems",    match: (a) => /information|technology|systems/i.test(a) },
  { key: "hr-ob",        label: "OB & HR",                match: (a) => /organisation|ob|hr|organizational/i.test(a) },
];

/* ---------- inline icons ---------- */
function SearchIcon() {
  return (
    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.6}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </Box>
  );
}
function InfoIcon() {
  return (
    <Box as="svg" w="18px" h="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="11" x2="12" y2="16.5" />
      <circle cx="12" cy="8" r="0.6" fill="currentColor" />
    </Box>
  );
}
function HomeIcon() {
  return (
    <Box as="svg" w="18px" h="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11.5 12 4l9 7.5" strokeLinejoin="round" />
      <path d="M5 10v9h14v-9" strokeLinejoin="round" />
    </Box>
  );
}
function LinkedInIcon() {
  return (
    <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25H4.75V23H.25V8.25zM8 8.25h4.3v2h.06c.6-1.13 2.06-2.32 4.25-2.32 4.55 0 5.39 2.99 5.39 6.88V23h-4.5v-6.66c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23H8V8.25z" />
    </Box>
  );
}

/* ---------- card button ---------- */
function IconBtn({
  label,
  href,
  onClick,
  children,
  accent,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  accent?: string;
}) {
  const Common = {
    w: "36px",
    h: "36px",
    borderRadius: "full",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255,255,255,0.14)",
    bg: "rgba(255,255,255,0.04)",
    color: "brand.chalk",
    style: { transition: "all 180ms ease" },
    _hover: {
      bg: accent ? accent : "rgba(255,255,255,0.12)",
      borderColor: accent ? accent : "rgba(255,255,255,0.35)",
      color: "white",
      transform: "translateY(-1px)",
    } as never,
  };
  return (
    <Tooltip label={label} placement="top" hasArrow bg="brand.obsidian" color="white" fontSize="xs">
      {href ? (
        <Box as="a" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} {...Common}>
          {children}
        </Box>
      ) : (
        <Box as="button" onClick={onClick} aria-label={label} {...Common}>
          {children}
        </Box>
      )}
    </Tooltip>
  );
}

/* ---------- card ---------- */
function FacultyCard({ f, onInfo }: { f: Faculty; onInfo: () => void }) {
  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      bg="brand.graphite"
      border="1px solid rgba(255,255,255,0.06)"
      role="group"
      style={{ transition: "transform 300ms ease, border-color 300ms ease" }}
      _hover={{ borderColor: "rgba(255,255,255,0.2)", transform: "translateY(-4px)" }}
    >
      <Box position="relative" h={{ base: "280px", md: "320px" }} overflow="hidden" bg="brand.ink">
        <Box
          as="img"
          src={f.img}
          alt={f.name}
          w="full"
          h="full"
          objectFit="cover"
          loading="lazy"
          draggable={false}
          style={{
            transition: "transform 500ms ease, filter 300ms ease",
            filter: "grayscale(0.15) contrast(1.05)",
          }}
          _groupHover={{
            transform: "scale(1.05)",
            filter: "grayscale(0) contrast(1.05)",
          } as never}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, transparent 55%, rgba(18,22,29,0.98))"
          pointerEvents="none"
        />
      </Box>

      <VStack align="flex-start" spacing={2} p={6}>
        <Heading fontSize={{ base: "md", md: "lg" }} letterSpacing="-0.02em" lineHeight={1.2} noOfLines={2}>
          {f.name}
        </Heading>
        <Text fontSize="2xs" color="brand.gold" letterSpacing="0.18em" textTransform="uppercase" fontWeight={600} noOfLines={1}>
          {f.area}
        </Text>
        <Text fontSize="xs" color="brand.mist" fontFamily="mono" noOfLines={1}>
          {f.degree}
        </Text>

        <HStack spacing={2} pt={4}>
          <IconBtn label="About" onClick={onInfo} accent="#1E5FFF">
            <InfoIcon />
          </IconBtn>
          {f.homepage && (
            <IconBtn label="Homepage" href={f.homepage} accent="#C9A96E">
              <HomeIcon />
            </IconBtn>
          )}
          {f.linkedin && (
            <IconBtn label="LinkedIn" href={f.linkedin} accent="#0A66C2">
              <LinkedInIcon />
            </IconBtn>
          )}
        </HStack>
      </VStack>
    </Box>
  );
}

/* ---------- info modal ---------- */
function InfoModal({ f, isOpen, onClose }: { f: Faculty | null; isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside" isCentered>
      <ModalOverlay bg="rgba(5,7,10,0.75)" backdropFilter="blur(8px)" />
      <ModalContent bg="brand.graphite" color="white" borderRadius="2xl" border="1px solid rgba(255,255,255,0.1)" overflow="hidden">
        {f && (
          <>
            <Box position="relative" h="240px" overflow="hidden" bg="brand.ink">
              <Box
                as="img"
                src={f.img}
                alt={f.name}
                w="full"
                h="full"
                objectFit="cover"
                style={{ filter: "brightness(0.85)" }}
              />
              <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(18,22,29,1) 0%, transparent 55%)" />
              <VStack position="absolute" left={8} right={8} bottom={5} align="flex-start" spacing={1}>
                <Text fontSize="2xs" color="brand.gold" letterSpacing="0.2em" textTransform="uppercase" fontWeight={600}>
                  {f.area}
                </Text>
                <Heading fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.02em">
                  {f.name}
                </Heading>
                <Text fontSize="sm" color="brand.chalk" fontFamily="mono">
                  {f.degree}
                </Text>
              </VStack>
            </Box>

            <ModalCloseButton top={3} right={3} bg="rgba(5,7,10,0.6)" _hover={{ bg: "rgba(5,7,10,0.8)" }} color="white" borderRadius="full" />

            <ModalHeader display="none" />
            <ModalBody px={{ base: 6, md: 10 }} py={{ base: 6, md: 8 }}>
              <Text color="brand.chalk" fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
                {f.bio || "No additional bio available yet."}
              </Text>

              <HStack spacing={3} pt={8} flexWrap="wrap">
                {f.homepage && (
                  <Box
                    as="a"
                    href={f.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    px={5}
                    py={2.5}
                    borderRadius="full"
                    bg="white"
                    color="black"
                    fontSize="sm"
                    fontWeight={600}
                    _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
                    style={{ transition: "all 180ms ease" }}
                  >
                    Visit homepage →
                  </Box>
                )}
                {f.linkedin && (
                  <Box
                    as="a"
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    px={5}
                    py={2.5}
                    borderRadius="full"
                    border="1px solid rgba(255,255,255,0.2)"
                    color="white"
                    fontSize="sm"
                    fontWeight={600}
                    _hover={{ bg: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.4)" }}
                    style={{ transition: "all 180ms ease" }}
                  >
                    Find on LinkedIn ↗
                  </Box>
                )}
              </HStack>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

/* ---------- main ---------- */
export function CoreFacultyGrid() {
  const [group, setGroup] = useState("all");
  const [q, setQ] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState<Faculty | null>(null);

  const filtered = useMemo(() => {
    const g = groups.find((x) => x.key === group) ?? groups[0];
    const ql = q.trim().toLowerCase();
    return faculty.filter((f) => {
      if (!g.match(f.area)) return false;
      if (!ql) return true;
      return (
        f.name.toLowerCase().includes(ql) ||
        f.area.toLowerCase().includes(ql) ||
        f.degree.toLowerCase().includes(ql) ||
        (f.bio ?? "").toLowerCase().includes(ql)
      );
    });
  }, [group, q]);

  const handleInfo = (f: Faculty) => {
    setSelected(f);
    onOpen();
  };

  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="stretch" spacing={6} mb={{ base: 10, md: 14 }}>
          <HStack justify="space-between" flexWrap="wrap" gap={4} align={{ base: "stretch", md: "center" }}>
            <HStack spacing={2} flexWrap="wrap" rowGap={2} maxW={{ base: "full", md: "3xl" }}>
              {groups.map((g) => (
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
                  _hover={{
                    borderColor: group === g.key ? "white" : "rgba(255,255,255,0.3)",
                    bg: group === g.key ? "white" : "rgba(255,255,255,0.05)",
                  }}
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
                placeholder="Search faculty…"
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

          <HStack justify="space-between" color="brand.mist" fontSize="xs" letterSpacing="0.12em" textTransform="uppercase">
            <Text>Showing {filtered.length} of {faculty.length}</Text>
            {q && (
              <Box
                as="button"
                onClick={() => setQ("")}
                color="brand.chalk"
                _hover={{ color: "white" }}
                style={{ transition: "color 150ms" }}
              >
                Clear search ×
              </Box>
            )}
          </HStack>
        </VStack>

        {filtered.length === 0 ? (
          <VStack spacing={3} py={20} color="brand.mist">
            <Text fontSize="xl">No faculty match that filter.</Text>
            <Text fontSize="sm">Try another area or clear the search.</Text>
          </VStack>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {filtered.map((f) => (
              <FacultyCard key={f.slug} f={f} onInfo={() => handleInfo(f)} />
            ))}
          </SimpleGrid>
        )}
      </Container>

      <InfoModal f={selected} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
