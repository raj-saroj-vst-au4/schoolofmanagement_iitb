"use client";

import { Box, Container, Heading, Text, VStack, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, SimpleGrid } from "@chakra-ui/react";

const faqs = [
  {
    q: "What is the duration of the PhD programme?",
    a: "The typical duration is 4–5 years for full-time students. The programme consists of a minimum of 2 years of coursework and research followed by thesis work. The maximum duration allowed is 6 years for full-time students.",
  },
  {
    q: "Is financial assistance available for PhD students?",
    a: "Yes. All full-time PhD students receive a monthly fellowship as per Government of India norms. Additionally, students may receive contingency grants for research expenses and conference participation. Teaching and research assistantships are also available.",
  },
  {
    q: "Can I pursue the PhD on a part-time basis?",
    a: "Currently, SJMSOM primarily offers full-time PhD programmes. Part-time options may be available for working professionals in specific cases, subject to approval by the academic committee. Please contact the PhD office for more information.",
  },
  {
    q: "What are the publication requirements for the PhD?",
    a: "Students are required to publish their research work in peer-reviewed journals and present at conferences. Typically, at least one publication in a reputed journal is required before thesis submission. The exact requirements may vary by research area and are determined in consultation with the thesis supervisor.",
  },
  {
    q: "Can international students apply for the PhD programme?",
    a: "Yes. International students are welcome. They must meet the same eligibility criteria as Indian students and must have a valid GATE score or a GRE score of 315 or above. International students should also check visa requirements and may need to demonstrate English-language proficiency.",
  },
  {
    q: "How do I choose a research supervisor?",
    a: "After admission, students are initially assigned a temporary advisor. During the first semester, students can explore different research areas, attend seminars, and interact with faculty members. Based on mutual interest and alignment of research goals, a supervisor is finalised, typically by the end of the first year.",
  },
];

const resources = [
  "Download PhD Brochure",
  "Online Application Portal",
  "PhD Regulations & Guidelines",
  "Meet Our Faculty",
];

export function PhDFaq() {
  return (
    <Box as="section" id="faq" py={{ base: 20, md: 32 }} bg="brand.obsidian" borderTop="1px solid rgba(255,255,255,0.06)">
      <Container maxW="5xl">
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

        {/* Contact + Resources */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={14}>
          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.iitRed" fontWeight={600} mb={4}>
              Contact · PhD office
            </Text>
            <Heading fontSize="xl" letterSpacing="-0.02em" mb={4}>Talk to us</Heading>
            <VStack align="flex-start" spacing={2} color="brand.chalk" fontSize="sm">
              <Text>Shailesh J. Mehta School of Management</Text>
              <Text>IIT Bombay, Powai, Mumbai — 400076</Text>
              <Text fontFamily="mono" pt={2}>+91 22 2576 7782</Text>
              <Text fontFamily="mono">phd@som.iitb.ac.in</Text>
            </VStack>
            <Button
              as="a"
              href="mailto:phd@som.iitb.ac.in"
              mt={6}
              bg="white"
              color="black"
              _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
            >
              Email the PhD office →
            </Button>
          </Box>

          <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)">
            <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={4}>
              Useful resources
            </Text>
            <Heading fontSize="xl" letterSpacing="-0.02em" mb={4}>Go deeper</Heading>
            <VStack align="stretch" spacing={3}>
              {resources.map((r) => (
                <HStack
                  key={r}
                  as="a"
                  href="#"
                  justify="space-between"
                  p={3}
                  borderRadius="md"
                  bg="rgba(255,255,255,0.02)"
                  _hover={{ bg: "rgba(255,255,255,0.05)" }}
                  transition="background 200ms ease"
                >
                  <Text fontSize="sm" color="brand.chalk">{r}</Text>
                  <Text fontSize="sm" color="brand.mist">→</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
