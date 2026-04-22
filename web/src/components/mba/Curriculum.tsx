"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

type Course = { code: string; name: string; credits: number };
type Term = { label: string; sub: string; credits: number; courses: Course[]; accent: string };
type ElectiveArea = { area: string; accent: string; courses: string[] };

const terms: Term[] = [
  {
    label: "Term 1", sub: "Autumn · Year 1", credits: 20, accent: "#1E5FFF",
    courses: [
      { code: "SOM 601", name: "Communication & Interpersonal Skills", credits: 4 },
      { code: "SOM 602", name: "Microeconomics", credits: 4 },
      { code: "SOM 603", name: "Fundamentals of Financial & Managerial Accounting", credits: 4 },
      { code: "SOM 604", name: "Marketing Management I", credits: 4 },
      { code: "SOM 605", name: "Statistical Methods", credits: 4 },
    ],
  },
  {
    label: "Term 2", sub: "Autumn · Year 1", credits: 24, accent: "#C9A96E",
    courses: [
      { code: "SOM 606", name: "Corporate Finance I", credits: 4 },
      { code: "SOM 607", name: "Macroeconomics", credits: 4 },
      { code: "SOM 608", name: "Decision Models in Management", credits: 4 },
      { code: "SOM 609", name: "Information Systems", credits: 4 },
      { code: "SOM 610", name: "Marketing Management II", credits: 4 },
      { code: "SOM 611", name: "Operations Management I", credits: 4 },
    ],
  },
  {
    label: "Term 3", sub: "Spring · Year 1", credits: 20, accent: "#D63638",
    courses: [
      { code: "SOM 613", name: "Corporate Finance II", credits: 4 },
      { code: "SOM 614", name: "OB & HR I", credits: 4 },
      { code: "SOM 615", name: "Operations Management II", credits: 4 },
      { code: "SOM 616", name: "Technology Management", credits: 4 },
      { code: "SOM 617", name: "Corporate Strategy", credits: 4 },
    ],
  },
  {
    label: "Term 4", sub: "Spring · Year 1", credits: 16, accent: "#7C5CFF",
    courses: [
      { code: "SOM 612", name: "Business Research Methods", credits: 4 },
      { code: "SOM 618", name: "OB & HR II", credits: 4 },
      { code: "SOM 619", name: "Corporate Governance & Business", credits: 4 },
      { code: "SOM 621", name: "Ethics & Legal Aspects of Business", credits: 4 },
    ],
  },
];

const electives: ElectiveArea[] = [
  {
    area: "Accounting & Finance", accent: "#1E5FFF",
    courses: [
      "Behavioral Finance",
      "Derivatives and Risk Management",
      "Disaster Risk Financing",
      "Econometrics of Financial Markets",
      "Financial Modelling",
      "Financial Services",
      "Fixed Income Securities",
      "Foundations of Private Equity and Venture Capital",
      "Indian Financial and Business Model",
      "Management of Banking and Behavioral Finance",
      "Markets and Treasury — Functional Architecture and Processing",
      "Mergers, Acquisitions, and Business Valuation",
      "Money: Past, Present and Future",
      "Quantitative and Algorithmic Trading",
      "Security Analysis and Portfolio Management",
      "Startup Financing",
    ],
  },
  {
    area: "Economics & Strategy", accent: "#C9A96E",
    courses: [
      "Applied Industrial Organization",
      "Aviation Business Strategies",
      "Behavioral Economics",
      "Circular Economy: Implications for Business, Economy and Society",
      "Economics of Firm Strategy",
      "Economics of Development in India",
      "Economics of Regulation",
      "Game Theory for Business Decisions",
      "Political Economy of Development in India",
      "Population Dynamics and Development",
      "Spatial Analytics I",
      "Spatial Analytics II",
      "Strategies for Growth",
      "Strategic Transformation",
      "Sustainable Finance",
    ],
  },
  {
    area: "General Management", accent: "#D63638",
    courses: [
      "Business and Sustainable Development",
      "Change",
      "Competitiveness for Sustainable Enterprise",
      "Corporate Competitiveness",
      "Environmental Management",
      "Infrastructure Development and Financing",
      "Innovation I",
      "Innovation II",
      "International Competitiveness",
      "Leadership and Vision",
      "Managerial Effectiveness Skills",
      "Managing Intellectual Property",
      "Patterns of Entrepreneurship",
      "Policy Responses to Climate",
      "Technology Design End to End",
    ],
  },
  {
    area: "Organisational Behaviour & HRM", accent: "#7C5CFF",
    courses: [
      "Business Entrepreneurship Development",
      "Management of Change",
      "Organization Theory and Design",
      "Performance Evaluation and Management System",
    ],
  },
  {
    area: "Information Technology", accent: "#1E5FFF",
    courses: [
      "Electronic Business Strategies and Implementation",
      "Hospital Information Systems",
      "Information Technology Infrastructure Management",
      "Intelligent Systems",
      "Management of Digital Transformation",
      "Managing Digital Products",
      "Managing Industry 4.0",
      "Software Project Management",
      "Systems Analysis and Design",
    ],
  },
  {
    area: "International Business", accent: "#C9A96E",
    courses: [
      "Historical and Contemporary Perspectives in International Business",
      "Information Economy and Governance I",
      "Information Economy and Governance II",
      "International Business",
      "International Trade",
      "Managing International Business",
      "Managing with New Business Models in a Knowledge Economy",
      "Political Economy, Development and Governance II",
      "WTO and Indian Business",
    ],
  },
  {
    area: "Marketing", accent: "#D63638",
    courses: [
      "Advertising and Media Management",
      "Brand Management",
      "Business to Business Marketing",
      "Consumer Behavior",
      "Consumer Behaviour and Consumer Neuroscience",
      "Customer Analytics",
      "Online Marketing",
      "Sales and Distribution Management",
      "Strategic Marketing",
    ],
  },
  {
    area: "Operations Management", accent: "#7C5CFF",
    courses: [
      "Advanced Planning and Scheduling",
      "Applied Quality Engineering and Management",
      "Design of Manufacturing System",
      "Experimental Design for Productivity and Quality Improvement",
      "Healthcare Supply Chain Management",
      "High Tech Ventures: From Concept to Commercialization",
      "Innovation and Entrepreneurship",
      "Introduction to ERP",
      "Lean Management",
      "Logistics and Supply Chain Management",
      "Operations Strategy",
      "Purchasing and Supply",
      "Quality Management",
      "Service Operations Management",
      "Supply Chain Optimization",
      "Sustainable Supply Chain Management",
      "Warehouse Operations",
    ],
  },
  {
    area: "Quantitative Techniques", accent: "#1E5FFF",
    courses: [
      "Applied Statistical Learning for Management",
      "Business Analytics and Simulation",
      "Business Dynamics Modeling and Simulation",
      "Business Forecasting",
      "Large-Scale Optimization",
      "Managerial Decision Making under Risk and Uncertainty",
      "Multivariate Data Analysis",
      "Predictive Analytics",
      "Simulation of Business Systems",
    ],
  },
  {
    area: "Technology & Innovation Management", accent: "#C9A96E",
    courses: [
      "Innovation Management",
      "Innovation and Sustainability Lab",
      "Project Management",
      "Science, Technology, and Innovation Policy",
      "Technology Acquisition, Transfer, and Absorption",
      "Technology Forecasting and Assessment",
      "Technology Strategy Lab",
    ],
  },
];

export function Curriculum() {
  return (
    <Box as="section" id="curriculum" py={{ base: 20, md: 32 }} bg="brand.ink">
      <Container maxW="7xl">
        <VStack align="flex-start" spacing={4} mb={{ base: 10, md: 16 }}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Core Curriculum
            </Text>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
            The first-year bones.
          </Heading>
          <Text color="brand.chalk" maxW="2xl">
            Eighty credits across four terms — 23 core courses building a common vocabulary
            across economics, finance, marketing, operations, strategy and organisational
            behaviour.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={5} mb={{ base: 10, md: 14 }}>
          {terms.map((t) => (
            <Box
              key={t.label}
              p={6}
              borderRadius="xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
              transition="all 200ms ease"
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={t.accent} opacity={0.8} />
              <VStack align="stretch" spacing={5}>
                <HStack justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={0.5}>
                    <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color={t.accent} fontWeight={600}>
                      {t.label}
                    </Text>
                    <Text fontSize="2xs" color="brand.mist" letterSpacing="0.1em" textTransform="uppercase">
                      {t.sub}
                    </Text>
                  </VStack>
                  <Text fontSize="xs" color="brand.mist" fontFamily="mono">
                    {t.credits} cr
                  </Text>
                </HStack>
                <VStack align="stretch" spacing={2.5}>
                  {t.courses.map((c) => (
                    <Box key={c.code} pb={2.5} borderBottom="1px solid rgba(255,255,255,0.05)">
                      <HStack justify="space-between" align="flex-start">
                        <VStack align="flex-start" spacing={0.5}>
                          <Text fontSize="2xs" color="brand.mist" fontFamily="mono" letterSpacing="0.05em">
                            {c.code}
                          </Text>
                          <Text fontSize="sm" color="brand.chalk" lineHeight={1.3}>{c.name}</Text>
                        </VStack>
                        <Text fontSize="xs" color="brand.mist" fontFamily="mono">{c.credits}</Text>
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box p={{ base: 8, md: 10 }} borderRadius="2xl" bg="brand.graphite" border="1px solid rgba(255,255,255,0.06)" mb={{ base: 10, md: 14 }}>
          <Text fontSize="xs" letterSpacing="0.24em" textTransform="uppercase" color="brand.gold" fontWeight={600} mb={5}>
            Year 2 · Electives & Projects
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="3xl" color="white" fontWeight={600} letterSpacing="-0.02em">12–18</Text>
              <Text fontSize="sm" color="brand.chalk">Credits of elective courses per term across terms 5–8.</Text>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="3xl" color="white" fontWeight={600} letterSpacing="-0.02em">2 cr</Text>
              <Text fontSize="sm" color="brand.chalk">Summer Project — a capstone industry engagement between years.</Text>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="3xl" color="white" fontWeight={600} letterSpacing="-0.02em">6 cr</Text>
              <Text fontSize="sm" color="brand.chalk">Final Project — integrated across the year.</Text>
            </VStack>
          </SimpleGrid>
          <Text mt={6} fontSize="sm" color="brand.mist" fontStyle="italic">
            Year 2 totals 57 credits · Programme total 137 credits.
          </Text>
        </Box>

        <VStack align="flex-start" spacing={4} mb={8}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.iitBlue" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Year 2 Electives
            </Text>
          </HStack>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
            Design your second year.
          </Heading>
          <Text color="brand.chalk" maxW="3xl">
            Over 100 electives across ten areas. Students typically mix across groups; those who
            concentrate may pursue optional specialisations in Finance or Operations Management.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {electives.map((e) => (
            <Box
              key={e.area}
              p={6}
              borderRadius="xl"
              bg="brand.graphite"
              border="1px solid rgba(255,255,255,0.06)"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "rgba(255,255,255,0.16)" }}
              transition="all 200ms ease"
            >
              <Box position="absolute" top={0} left={0} right={0} h="2px" bg={e.accent} opacity={0.8} />
              <HStack justify="space-between" mb={4}>
                <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color={e.accent} fontWeight={600}>
                  {e.area}
                </Text>
                <Text fontSize="xs" color="brand.mist" fontFamily="mono">
                  {e.courses.length}
                </Text>
              </HStack>
              <VStack align="stretch" spacing={0}>
                {e.courses.map((c) => (
                  <HStack key={c} spacing={3} py={2} borderBottom="1px solid rgba(255,255,255,0.04)">
                    <Box w="3px" h="3px" borderRadius="full" bg={e.accent} flexShrink={0} opacity={0.6} />
                    <Text fontSize="sm" color="brand.chalk" lineHeight={1.4}>{c}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
