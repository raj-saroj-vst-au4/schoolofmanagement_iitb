"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button } from "@chakra-ui/react";

const eligibility = [
  "Foreign passport, OCI or PIO card",
  "Bachelor's degree with at least 60% marks or CPI ≥ 6.5 / 10",
  "Valid GMAT score",
  "TOEFL / IELTS waived if English was the medium of instruction",
];

const process = [
  { step: "1", title: "Apply via the IIT Bombay international portal", detail: "portal.iitb.ac.in/intadm" },
  { step: "2", title: "Shortlisting based on GMAT & profile", detail: "Same Phase-1 framework, adjusted for international criteria" },
  { step: "3", title: "Personal Interview", detail: "Scheduled separately for international candidates · communicated by email" },
  { step: "4", title: "Final offer", detail: "Announced alongside the domestic merit list in early May 2026" },
];

export function International() {
  return (
    <Box as="section" id="international" py={{ base: 20, md: 28 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              International Applicants
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            NRI, OCI and PIO applicants
            <br />
            <Box as="span" color="brand.mist">apply with GMAT.</Box>
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={8}>
          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.iitBlue" fontWeight={600} mb={5}>
              Eligibility
            </Text>
            <VStack align="stretch" spacing={3}>
              {eligibility.map((e) => (
                <HStack key={e} spacing={3} align="flex-start" pb={2.5} borderBottom="1px solid rgba(255,255,255,0.06)">
                  <Box mt={2} w="4px" h="4px" borderRadius="full" bg="brand.iitBlue" flexShrink={0} />
                  <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>{e}</Text>
                </HStack>
              ))}
            </VStack>
            <Button
              as="a"
              href="https://portal.iitb.ac.in/intadm/login"
              target="_blank"
              rel="noreferrer"
              mt={6}
              bg="white"
              color="black"
              size="md"
              _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
            >
              Apply via IITB international portal →
            </Button>
          </Box>

          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={5}>
              Process
            </Text>
            <VStack align="stretch" spacing={4}>
              {process.map((p) => (
                <HStack key={p.step} spacing={4} align="flex-start">
                  <Box
                    w="32px" h="32px" borderRadius="full"
                    bg="rgba(201,169,110,0.12)"
                    border="1px solid rgba(201,169,110,0.3)"
                    display="flex" alignItems="center" justifyContent="center"
                    flexShrink={0}
                  >
                    <Text fontSize="xs" color="brand.gold" fontWeight={600}>{p.step}</Text>
                  </Box>
                  <VStack align="flex-start" spacing={0.5}>
                    <Text fontSize="sm" color="white" fontWeight={600}>{p.title}</Text>
                    <Text fontSize="sm" color="brand.chalk">{p.detail}</Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
