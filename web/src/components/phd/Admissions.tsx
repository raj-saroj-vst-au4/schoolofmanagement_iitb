"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const dates = [
  { when: "April – May", what: "Application Opens" },
  { when: "May – June", what: "Application Deadline" },
  { when: "June – July", what: "Written Test & Interview" },
  { when: "July – August", what: "Programme Commences" },
];

const steps = [
  { n: "01", h: "Online Application", b: "Submit your application through the IIT Bombay admission portal with all required documents." },
  { n: "02", h: "Document Verification", b: "Shortlisted candidates' documents are verified for eligibility criteria." },
  { n: "03", h: "Written Test", b: "Candidates appear for a written test covering research aptitude and subject knowledge." },
  { n: "04", h: "Interview", b: "Selected candidates undergo an interview with a faculty panel to assess research potential." },
  { n: "05", h: "Final Selection", b: "A final merit list is prepared and offers are sent to successful candidates." },
];

const docs = [
  { h: "Academic Transcripts", b: "All degree certificates and mark sheets." },
  { h: "GATE / GRE Scorecard",  b: "Valid score as per eligibility." },
  { h: "Statement of Purpose",  b: "Research interests and career goals." },
  { h: "Letters of Recommendation", b: "Two academic references." },
  { h: "Research Proposal",     b: "Preliminary research idea (optional)." },
  { h: "ID Proof",              b: "Government-issued photo ID." },
];

export function Admissions() {
  return (
    <Box as="section" id="admissions" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitRed" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Admissions
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            Join our community
            <br />
            <Box as="span" color="brand.mist">of scholars.</Box>
          </Heading>
        </VStack>

        {/* Dates */}
        <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={5}>
          Important dates · tentative
        </Text>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={{ base: 12, md: 20 }}>
          {dates.map((d) => (
            <Box key={d.what} p={6} borderRadius="xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
              <Text fontSize="xl" color="white" fontWeight={600} letterSpacing="-0.02em">
                {d.when}
              </Text>
              <Text mt={2} fontSize="xs" color="brand.mist" letterSpacing="0.12em" textTransform="uppercase">
                {d.what}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <Text fontSize="xs" color="brand.mist" fontStyle="italic" mt={-8} mb={{ base: 12, md: 20 }}>
          Dates are subject to change. Please check the official website for updates.
        </Text>

        {/* Application process */}
        <VStack align="flex-start" spacing={4} mb={8}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Application Process
            </Text>
          </HStack>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
            Five steps to start.
          </Heading>
        </VStack>

        <VStack align="stretch" spacing={4} mb={{ base: 12, md: 20 }}>
          {steps.map((s, i) => (
            <HStack
              key={s.n}
              align="flex-start"
              spacing={6}
              p={{ base: 5, md: 7 }}
              borderRadius="xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              transition="all 250ms ease"
              _hover={{ borderColor: "rgba(255,255,255,0.14)" }}
            >
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="mono"
                color="brand.iitBlue"
                opacity={0.8}
                fontWeight={600}
                minW={{ base: "48px", md: "70px" }}
                letterSpacing="-0.03em"
                lineHeight={1}
              >
                {s.n}
              </Text>
              <VStack align="flex-start" spacing={2} flex={1}>
                <Heading fontSize={{ base: "md", md: "xl" }} letterSpacing="-0.02em">{s.h}</Heading>
                <Text fontSize={{ base: "sm", md: "md" }} color="brand.chalk" lineHeight={1.6}>{s.b}</Text>
              </VStack>
            </HStack>
          ))}
        </VStack>

        {/* Required Documents */}
        <VStack align="flex-start" spacing={4} mb={8}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Required documents
            </Text>
          </HStack>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
            What to have ready.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {docs.map((d) => (
            <Box key={d.h} p={6} borderRadius="xl" bg="rgba(255,255,255,0.02)" border="1px solid rgba(255,255,255,0.06)">
              <Heading fontSize="md" letterSpacing="-0.02em" mb={2}>{d.h}</Heading>
              <Text fontSize="sm" color="brand.mist" lineHeight={1.6}>{d.b}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
