"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Resource = {
  title: string;
  description: string;
  href: string;
  kind: "pdf" | "section" | "external";
};

const resources: Resource[] = [
  {
    title: "MBA Brochure 2026",
    description: "Complete programme booklet — curriculum, faculty, campus life, placements.",
    href: "/media/mba/documents/MBA_Brochure_2026.pdf",
    kind: "pdf",
  },
  {
    title: "Application Form Instructions",
    description: "Official step-by-step guide for completing the MBA application form.",
    href: "/media/mba/documents/MBA_Application_Instructions.pdf",
    kind: "pdf",
  },
  {
    title: "Admission Criteria 2026–28",
    description: "Eligibility, accepted disciplines and selection-process summary.",
    href: "#admissions",
    kind: "section",
  },
  {
    title: "PI Shortlisting Criteria",
    description: "Phase-1 weightages used to shortlist candidates for the Personal Interview.",
    href: "#admissions",
    kind: "section",
  },
  {
    title: "Composite Score Cut-off",
    description: "Category-wise PI-shortlisting cut-off scores for the 2026–28 cycle.",
    href: "#admissions",
    kind: "section",
  },
  {
    title: "Phase 2 · Final Shortlisting",
    description: "Final merit-list weightages combining CAT, PI and candidate profile.",
    href: "#admissions",
    kind: "section",
  },
  {
    title: "Course Bulletin — MBA",
    description: "Full list of core and elective courses, term by term, with credits.",
    href: "#curriculum",
    kind: "section",
  },
  {
    title: "International Applicants",
    description: "Eligibility, process and apply route for NRI / OCI / PIO candidates.",
    href: "#international",
    kind: "section",
  },
  {
    title: "How to Apply",
    description: "Seven-step walkthrough of the online application form.",
    href: "#how-to-apply",
    kind: "section",
  },
  {
    title: "IITB International Admissions Portal",
    description: "Apply portal for NRI / OCI / PIO candidates applying with GMAT.",
    href: "https://portal.iitb.ac.in/intadm/login",
    kind: "external",
  },
];

const tagStyles = {
  pdf: { bg: "rgba(214,54,56,0.12)", border: "rgba(214,54,56,0.3)", color: "brand.iitRed", label: "PDF" },
  section: { bg: "rgba(30,95,255,0.12)", border: "rgba(30,95,255,0.3)", color: "brand.iitBlue", label: "Section" },
  external: { bg: "rgba(201,169,110,0.12)", border: "rgba(201,169,110,0.3)", color: "brand.gold", label: "External" },
} as const;

export function Resources() {
  return (
    <Box as="section" id="resources" py={{ base: 20, md: 28 }} bg="brand.obsidian" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Resources & Downloads
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Everything, in one place.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {resources.map((r) => {
            const style = tagStyles[r.kind];
            const external = r.kind === "external" || r.kind === "pdf";
            return (
              <Box
                key={r.title}
                as="a"
                href={r.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                p={6}
                borderRadius="xl"
                bg="brand.graphite"
                border="1px solid rgba(255,255,255,0.06)"
                _hover={{ borderColor: "rgba(255,255,255,0.2)", transform: "translateY(-2px)" }}
                transition="all 200ms ease"
                display="block"
              >
                <HStack justify="space-between" align="flex-start" mb={3}>
                  <Box
                    px={2} py={1}
                    borderRadius="md"
                    bg={style.bg}
                    border="1px solid"
                    borderColor={style.border}
                  >
                    <Text fontSize="2xs" letterSpacing="0.14em" textTransform="uppercase" color={style.color} fontWeight={600}>
                      {style.label}
                    </Text>
                  </Box>
                  <Text color="brand.mist" fontSize="lg">→</Text>
                </HStack>
                <Heading fontSize="lg" letterSpacing="-0.02em" mb={2}>
                  {r.title}
                </Heading>
                <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>
                  {r.description}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
