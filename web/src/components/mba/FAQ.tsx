"use client";

import { Box, Container, Heading, Text, VStack, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from "@chakra-ui/react";

const faqs = [
  {
    q: "Can candidates with a three-year Bachelor's degree apply?",
    a: "Yes. Candidates with a three-year Bachelor's degree can apply if they have first class (60% or 6.5 CGPA for General category; 55% or 6.0 CGPA for SC/ST/PWD) and a valid CAT 2025 score.",
  },
  {
    q: "What degree is awarded upon completion?",
    a: "A Master of Business Administration (MBA) from SJMSOM, Indian Institute of Technology Bombay.",
  },
  {
    q: "Is it a general MBA or a specialised one?",
    a: "It is a general MBA with a range of electives in the second year. Students interested in specialising may pursue Finance or Operations Management tracks.",
  },
  {
    q: "Does SJMSOM apply a sectional cut-off on CAT?",
    a: "Sectional and overall cut-offs are determined after applications close and are applied while drawing up the shortlist for Personal Interviews (5–8 March 2026).",
  },
  {
    q: "What is the faculty–student ratio?",
    a: "Approximately 1:9.6 — around 26 core faculty members for ~250 MBA students, ensuring personalised attention and close mentorship.",
  },
  {
    q: "Are student exchange programs available?",
    a: "Yes. SJMSOM runs active student exchange programs with several leading international universities and also organises international study tours.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. 15 to 20 scholarships are awarded each year on the basis of academic performance. Industry-sponsored awards and need-based support are also available.",
  },
  {
    q: "Is educational-loan assistance available on campus?",
    a: "Yes. On-campus branches of State Bank of India and Canara Bank offer educational loans curated for IIT Bombay students, with simplified procedures.",
  },
  {
    q: "I hold a dual degree. Which should I enter in the application?",
    a: "Select your undergraduate degree (e.g., B.Tech) under Undergraduate Details, and list the postgraduate component under the Additional Post Graduate / Professional Qualification section.",
  },
  {
    q: "How should dual-degree holders enter marks?",
    a: "Enter undergraduate marks as reported by the university in the UG section, and the post-graduation marks in the Additional Post Graduate / Professional Qualification section.",
  },
  {
    q: "Should CGPA or percentage be entered?",
    a: "If the original grade card mentions CGPA, enter CGPA as-is — even if your institution publishes a conversion formula.",
  },
  {
    q: "Who do I contact for application-form queries?",
    a: "Write to admissions@sjmsom.in for any online application and admission-related questions.",
  },
  {
    q: "Where can I find the eligibility criteria?",
    a: "Refer to the MBA Admissions Criteria page for full eligibility details for the 2026–28 cycle.",
  },
  {
    q: "Do NRI / OCI / PIO candidates need CAT scores?",
    a: "No. NRI / OCI / PIO candidates may apply with a valid GMAT score instead. Shortlisting is based on GMAT and the applicable criteria; personal-interview attendance is required.",
  },
  {
    q: "Are there reserved seats for sponsored candidates?",
    a: "No. There is no reservation for sponsored candidates — they are treated on par with all other candidates in their respective category.",
  },
  {
    q: "What is the basis for selection to the Personal Interview?",
    a: "Candidates must appear for the CAT 2025 conducted by the IIMs. Phase-1 shortlisting for PI uses a composite score built from CAT performance, academic profile and work experience.",
  },
  {
    q: "When and where are Personal Interviews held?",
    a: "Interviews in India are scheduled for 5–8 March 2026. The schedule for international candidates is communicated separately by email.",
  },
  {
    q: "Can Personal Interviews be rescheduled?",
    a: "Rescheduling is considered only under exceptional circumstances. The decision of the institute is final.",
  },
  {
    q: "When are final admission results announced?",
    a: "Final admission results are tentatively announced in the first week of May 2026 on the SJMSOM website and the admissions portal.",
  },
  {
    q: "What makes SJMSOM different from other B-schools?",
    a: "An industry-relevant curriculum, research-accomplished faculty, interdisciplinary access across IIT Bombay departments, the SINE incubator (home to 200+ startups), flagship student events such as Avenues, Diksha and Continuum, and a vibrant ecosystem of activity clubs.",
  },
  {
    q: "Are there opportunities for research and industry projects?",
    a: "Yes. Many courses carry projects in addition to industry projects ranging from three to six months. Students can also work part-time with companies and startups through the SINE incubator.",
  },
  {
    q: "What are the placement prospects?",
    a: "The School has placed every batch so far. Major recruiters include J.P. Morgan Chase, ICICI Bank, Axis Bank, and leading consulting, technology and consumer-goods firms.",
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
