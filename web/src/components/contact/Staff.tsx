"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import staffData from "@/data/staff.json";

type Staff = {
  slug: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
};
const staff: Staff[] = staffData as Staff[];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

// Deterministic pick from a small palette so each card has a consistent colour
const palette = [
  ["#1E5FFF", "#7C5CFF"],
  ["#C9A96E", "#D63638"],
  ["#2ECC71", "#1E5FFF"],
  ["#D63638", "#C9A96E"],
  ["#7C5CFF", "#E066C9"],
  ["#0A66C2", "#1E5FFF"],
];

function MailIcon() {
  return (
    <Box as="svg" w="14px" h="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Box>
  );
}
function PhoneIcon() {
  return (
    <Box as="svg" w="14px" h="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
    </Box>
  );
}

export function Staff() {
  return (
    <Box as="section" id="staff" py={{ base: 20, md: 28 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Office Staff
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            The people who keep
            <br />
            <Box as="span" color="brand.mist">the school running.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
          {staff.map((s, i) => {
            const [c1, c2] = palette[i % palette.length];
            return (
              <Box
                key={s.slug}
                p={{ base: 6, md: 7 }}
                borderRadius="2xl"
                bg="brand.graphite"
                border="1px solid rgba(255,255,255,0.06)"
                display="flex"
                gap={{ base: 5, md: 6 }}
                alignItems="center"
                style={{ transition: "border-color 200ms ease, transform 200ms ease" }}
                _hover={{ borderColor: "rgba(255,255,255,0.16)", transform: "translateY(-3px)" }}
              >
                {/* Avatar — image if present at /media/staff/<slug>.jpg, else initials disc */}
                <Box
                  w={{ base: "110px", md: "128px" }}
                  h={{ base: "110px", md: "128px" }}
                  minW={{ base: "110px", md: "128px" }}
                  borderRadius="full"
                  overflow="hidden"
                  position="relative"
                  bgGradient={`linear(135deg, ${c1}, ${c2})`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow={`0 0 40px ${c1}22`}
                >
                  <Box
                    as="img"
                    src={`/media/staff/${s.slug}.jpg`}
                    alt=""
                    position="absolute"
                    inset={0}
                    w="full"
                    h="full"
                    objectFit="cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <Text
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight={600}
                    color="white"
                    position="relative"
                    zIndex={1}
                    letterSpacing="-0.03em"
                  >
                    {initials(s.name)}
                  </Text>
                </Box>

                <VStack align="flex-start" spacing={1} flex={1} minW={0}>
                  <Heading fontSize="md" letterSpacing="-0.02em" lineHeight={1.2}>
                    {s.name}
                  </Heading>
                  <Text fontSize="xs" color="brand.gold" letterSpacing="0.12em" textTransform="uppercase" fontWeight={600}>
                    {s.designation}
                  </Text>

                  <VStack align="flex-start" spacing={1.5} pt={3} w="full">
                    <HStack spacing={2} color="brand.mist" _hover={{ color: "white" }} as="a" href={`mailto:${s.email}`} style={{ transition: "color 150ms" }}>
                      <MailIcon />
                      <Text fontSize="xs" fontFamily="mono" isTruncated>{s.email}</Text>
                    </HStack>
                    <HStack spacing={2} color="brand.mist" _hover={{ color: "white" }} as="a" href={`tel:${s.phone.replace(/[^+\d]/g,'')}`} style={{ transition: "color 150ms" }}>
                      <PhoneIcon />
                      <Text fontSize="xs" fontFamily="mono">{s.phone}</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
