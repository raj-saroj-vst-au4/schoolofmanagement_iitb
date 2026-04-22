"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button } from "@chakra-ui/react";

type Step = {
  n: string;
  title: string;
  detail: string;
  color: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Visit the IITB portal",
    detail: "Go to portal.iitb.ac.in and click the MBA Admissions tab.",
    color: "#1E5FFF",
  },
  {
    n: "02",
    title: "Register",
    detail: "Click ‘New User? Click here to Register’. Enter the email you wish to use as login.",
    color: "#C9A96E",
  },
  {
    n: "03",
    title: "Activate within 12 hours",
    detail: "An activation URL is sent by email. Click it within 12 hours and complete the personal details.",
    color: "#D63638",
  },
  {
    n: "04",
    title: "Fill the application",
    detail: "Log in, click ‘Fill Form’, and complete each section. Session expires after 50 minutes of inactivity — have your data ready.",
    color: "#7C5CFF",
  },
  {
    n: "05",
    title: "Upload documents",
    detail: "Use ‘Upload Documents’ to attach transcripts, certificates and ID proofs in the required formats.",
    color: "#1E5FFF",
  },
  {
    n: "06",
    title: "Preview & submit",
    detail: "Preview the form at every stage. Only applications that click ‘Submit Finally’ are processed.",
    color: "#C9A96E",
  },
  {
    n: "07",
    title: "Pay online",
    detail: "Click ‘Pay Online’ to complete the application fee. Track status on the ‘Registered Applicant’ page.",
    color: "#D63638",
  },
];

const reminders = [
  "Fill mandatory details in one go — the session expires after 50 minutes of inactivity.",
  "Once you click ‘Submit Finally’, the form cannot be edited. Verify every field first.",
  "For CGPA, enter the grade exactly as printed on your transcript — do not convert to percentage.",
  "Dual-degree holders: list the UG degree under UG details and the PG component under Additional PG / Professional Qualification.",
  "NRI / OCI / PIO candidates apply with a valid GMAT score via the IITB international portal.",
  "For queries, write to admissions@sjmsom.in — responses typically within a business day.",
];

export function ApplicationProcess() {
  return (
    <Box as="section" id="how-to-apply" py={{ base: 20, md: 28 }} bg="brand.ink" borderY="1px solid rgba(255,255,255,0.06)">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Application Form Instructions
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em" lineHeight={1.05}>
            Seven steps,
            <br />
            <Box as="span" color="brand.mist">one application.</Box>
          </Heading>
        </VStack>

        {/* Process flow - connected vertical steps */}
        <Box position="relative" mb={{ base: 10, md: 14 }}>
          <Box
            position="absolute"
            left={{ base: "28px", md: "36px" }}
            top="24px"
            bottom="24px"
            w="1px"
            bg="linear-gradient(180deg, rgba(30,95,255,0.4), rgba(201,169,110,0.4), rgba(214,54,56,0.4))"
            display={{ base: "block", md: "block" }}
          />
          <VStack align="stretch" spacing={4}>
            {steps.map((s) => (
              <HStack
                key={s.n}
                spacing={{ base: 4, md: 6 }}
                align="flex-start"
                p={{ base: 4, md: 6 }}
                borderRadius="xl"
                bg="brand.graphite"
                border="1px solid rgba(255,255,255,0.06)"
                _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
                transition="all 200ms ease"
                position="relative"
                zIndex={1}
              >
                <Box
                  w={{ base: "48px", md: "56px" }}
                  h={{ base: "48px", md: "56px" }}
                  borderRadius="full"
                  border="2px solid"
                  borderColor={s.color}
                  bg="rgba(5,7,10,0.9)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                  boxShadow={`0 0 24px ${s.color}33`}
                >
                  <Text fontFamily="mono" fontSize={{ base: "sm", md: "md" }} color={s.color} fontWeight={600}>
                    {s.n}
                  </Text>
                </Box>
                <VStack align="flex-start" spacing={1.5} flex="1">
                  <Heading fontSize={{ base: "md", md: "lg" }} letterSpacing="-0.01em">
                    {s.title}
                  </Heading>
                  <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>
                    {s.detail}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Reminders */}
        <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="rgba(214,54,56,0.04)" border="1px solid rgba(214,54,56,0.18)" mb={6}>
          <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.iitRed" fontWeight={600} mb={5}>
            Before you click ‘Submit Finally’
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {reminders.map((r) => (
              <HStack key={r} spacing={3} align="flex-start">
                <Box mt={2} w="4px" h="4px" borderRadius="full" bg="brand.iitRed" flexShrink={0} />
                <Text fontSize="sm" color="brand.chalk" lineHeight={1.6}>{r}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>

        <HStack spacing={3} flexWrap="wrap">
          <Button
            as="a"
            href="https://portal.iitb.ac.in/"
            target="_blank"
            rel="noreferrer"
            bg="white"
            color="black"
            size="lg"
            _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
          >
            Open IITB Admissions Portal →
          </Button>
          <Button
            as="a"
            href="/media/mba/documents/MBA_Application_Instructions.pdf"
            target="_blank"
            rel="noreferrer"
            variant="outline"
            borderColor="rgba(255,255,255,0.2)"
            color="white"
            size="lg"
            _hover={{ bg: "rgba(255,255,255,0.06)" }}
          >
            Download full instructions (PDF)
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
