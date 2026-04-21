"use client";

import { Box, Container, Heading, Text, VStack, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from "@chakra-ui/react";

const faqs = [
  {
    q: "Can three-year Bachelor's degree holders apply?",
    a: "Yes. Candidates with a three-year Bachelor's degree can apply if they have first class (60% or 6.5 CGPA for General category; 55% or 6.0 for SC/ST/PWD) and a valid CAT 2024 score.",
  },
  {
    q: "What degree is awarded upon completion?",
    a: "A Master of Business Administration (MBA) from IIT Bombay. It is a general MBA with optional specialisations in Finance and Operations Management.",
  },
  {
    q: "What is the faculty–student ratio?",
    a: "Approximately 1:9.6 — around 26 core faculty for ~250 students — ensuring personalised attention and close mentorship.",
  },
  {
    q: "When are admission results announced?",
    a: "Final admission results are expected in the first week of May 2025, following personal interviews conducted 6–9 March 2025.",
  },
  {
    q: "What are the unique features of SJMSOM's MBA?",
    a: "A curriculum with a technology-management focus; access to IIT Bombay's wider resources and labs; a strong entrepreneurial ecosystem through SINE; industry-experienced faculty; student exchange programs; and a 100% placement record.",
  },
  {
    q: "Do NRI / OCI / PIO candidates need CAT scores?",
    a: "No — GMAT scores are accepted instead of CAT. TOEFL/IELTS are not required if English was the medium of instruction in previous education.",
  },
  {
    q: "What is the placement scenario?",
    a: "100% placement record. Top recruiters include J.P. Morgan, ICICI Bank, Amazon, Google Analytics, Deloitte, McKinsey & Company, BCG, and many other leading firms across sectors.",
  },
  {
    q: "Are there opportunities for entrepreneurship?",
    a: "Yes. Students have access to SINE (Society for Innovation and Entrepreneurship), IIT Bombay's incubation centre, which provides mentorship, funding opportunities, and infrastructure support for student startups.",
  },
];

export function MBAFaq() {
  return (
    <Box as="section" id="faq" py={{ base: 20, md: 32 }} bg="brand.obsidian" borderTop="1px solid rgba(255,255,255,0.06)">
      <Container maxW="4xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              FAQ
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            Answers before you ask.
          </Heading>
        </VStack>

        <Accordion allowToggle>
          {faqs.map((f) => (
            <AccordionItem key={f.q} borderColor="rgba(255,255,255,0.08)" py={1}>
              <h3>
                <AccordionButton
                  px={0}
                  py={5}
                  _hover={{ bg: "rgba(255,255,255,0.02)" }}
                  _expanded={{ color: "white" }}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={{ base: "md", md: "lg" }} fontWeight={500} letterSpacing="-0.01em">
                    {f.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel px={0} pb={5} color="brand.chalk" fontSize={{ base: "sm", md: "md" }} lineHeight={1.7}>
                {f.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Box
          mt={16}
          p={{ base: 8, md: 10 }}
          borderRadius="2xl"
          bg="brand.graphite"
          border="1px solid rgba(255,255,255,0.06)"
          textAlign="center"
        >
          <Heading fontSize="2xl" letterSpacing="-0.02em" mb={3}>
            Still have questions?
          </Heading>
          <Text color="brand.chalk" mb={6}>
            Our admissions team typically responds within a business day.
          </Text>
          <HStack justify="center" flexWrap="wrap" spacing={3}>
            <Button
              as="a"
              href="mailto:admissions@sjmsom.in"
              bg="white"
              color="black"
              size="lg"
              _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
            >
              admissions@sjmsom.in
            </Button>
            <Button
              as="a"
              href="#admissions"
              variant="outline"
              borderColor="rgba(255,255,255,0.2)"
              color="white"
              size="lg"
              _hover={{ bg: "rgba(255,255,255,0.06)" }}
            >
              Back to admissions →
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
