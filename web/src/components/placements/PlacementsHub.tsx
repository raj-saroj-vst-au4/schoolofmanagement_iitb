"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

const heroStats = [
  { value: "100%", label: "Placed" },
  { value: "₹28.16L", label: "Average CTC" },
  { value: "₹53.80L", label: "Highest CTC" },
  { value: "35.7%", label: "PPO rate" },
];

const batchHighlights = [
  { value: "126", label: "Batch size" },
  { value: "98.87", label: "Median CAT %ile" },
  { value: "85%", label: "With work ex" },
  { value: "25", label: "Avg work ex (months)" },
  { value: "27%", label: "From premier institutes" },
  { value: "15%", label: "Gender diversity" },
];

const placementHighlights = [
  { value: "51", label: "Recruiting companies" },
  { value: "₹53.80L", label: "Highest CTC" },
  { value: "₹28.16L", label: "Average CTC" },
  { value: "₹26.00L", label: "Median CTC" },
  { value: "35.7%", label: "PPO rate" },
  { value: "35.3%", label: "New recruiters" },
];

const medianSplit = [
  { value: "₹33.36L", label: "Top 25%ile" },
  { value: "₹32.00L", label: "Top 50%ile" },
  { value: "₹30.95L", label: "Top 75%ile" },
];

const companySplit = [
  { name: "Pharma & Others", pct: 23, color: "#C9A96E" },
  { name: "Consulting", pct: 20, color: "#1E5FFF" },
  { name: "BFSI & Conglomerates", pct: 20, color: "#7C5CFF" },
  { name: "E-Comm & IT/ITeS", pct: 19, color: "#2ECC71" },
  { name: "FMCG / FMCD", pct: 18, color: "#D63638" },
];

const studentSplit = [
  { name: "Consulting", pct: 26, color: "#1E5FFF" },
  { name: "E-Comm & IT/ITeS", pct: 26, color: "#2ECC71" },
  { name: "BFSI & Conglomerates", pct: 21, color: "#7C5CFF" },
  { name: "Pharma & Others", pct: 16, color: "#C9A96E" },
  { name: "FMCG / FMCD", pct: 11, color: "#D63638" },
];

const domainSplit = [
  { name: "IT / ITeS", pct: 38, color: "#2ECC71" },
  { name: "Operations", pct: 36, color: "#1E5FFF" },
  { name: "Consulting", pct: 14, color: "#C9A96E" },
  { name: "Sales & Marketing", pct: 8, color: "#7C5CFF" },
  { name: "Others", pct: 4, color: "#D63638" },
];

type Sector = {
  name: string;
  summary: string;
  roles: string[];
  recruiters: string[];
};

const sectors: Sector[] = [
  {
    name: "BFSI & Conglomerates",
    summary:
      "Renowned BFSI firms and India's largest conglomerates offered roles across wholesale banking, investment banking, risk, internal audit and business development.",
    roles: [
      "Investment Banking",
      "Wholesale Banking",
      "Business Development",
      "Internal Audit",
      "Risk",
      "Sales & Marketing",
      "General Management",
      "Product Management",
      "Supply Chain Management",
    ],
    recruiters: [
      "Aditya Birla Capital",
      "Axis Bank",
      "Godrej",
      "ICICI Bank",
      "JPMorgan Chase & Co.",
      "Kiwi General Insurance",
      "Nomura",
      "Reliance",
      "TAS",
      "Yes Bank",
    ],
  },
  {
    name: "Consulting",
    summary:
      "Top strategy, management and technology consulting firms extended offers across business consulting, data & AI, M&A and strategy advisory.",
    roles: [
      "Strategy Consulting",
      "Management Consulting",
      "Business Consulting",
      "Data & AI Consulting",
      "Technology Consulting",
      "M&A / Deals",
      "Operations & Supply Chain",
      "Project Management",
      "R&D Transformation",
    ],
    recruiters: [
      "Accenture Strategy",
      "Alvarez & Marsal",
      "Capgemini",
      "Deloitte USI",
      "EY",
      "Kearney",
      "Miebach Consulting",
      "PwC",
      "Tata Consulting Engineers",
      "Wipro",
    ],
  },
  {
    name: "E-Commerce & IT/ITeS",
    summary:
      "Leading internet and IT firms offered roles across product, program, operations and technology consulting; e-commerce majors hired into category and supply chain.",
    roles: [
      "Product Management",
      "Program Management",
      "Business Consulting",
      "Business Transformation",
      "Technology Consulting",
      "Operations",
      "Marketing",
    ],
    recruiters: [
      "Accenture",
      "Amazon",
      "Flipkart",
      "Juspay",
      "Mastek",
      "Mastercard",
      "MDPL",
      "PlaySimple Games",
      "Zepto",
    ],
  },
  {
    name: "FMCG / FMCD",
    summary:
      "A deep FMCG cohort extended offers across sales & marketing, supply chain, IT management and product roles at flagship consumer companies.",
    roles: [
      "Sales & Marketing",
      "Supply Chain Management",
      "Operations Management",
      "Product Management",
      "Information Technology Management",
    ],
    recruiters: [
      "Asian Paints",
      "Bajaj Consumer Care",
      "Berger Paints",
      "Britannia",
      "Hindustan Unilever",
      "L'Oréal",
      "Marico",
      "Mondelēz International",
      "P&G",
    ],
  },
  {
    name: "Pharma & Others",
    summary:
      "Pharma, energy, retail and real-estate recruiters hired into brand marketing, general management, procurement and program management.",
    roles: [
      "Brand Marketing",
      "Operations Management",
      "General Management",
      "Procurement",
      "Program Management",
      "Sales & Marketing",
    ],
    recruiters: [
      "ABFRL",
      "Decode Group",
      "ExxonMobil",
      "Lupin",
      "Mahindra & Mahindra",
      "PI Industries",
      "Saint-Gobain",
      "Sobha Realty",
      "Truemeds",
      "UPL",
      "Vedanta",
    ],
  },
];

const competitions = [
  { host: "Asian Paints", name: "Chain Reaction" },
  { host: "Castrol", name: "Power Up" },
  { host: "Flipkart", name: "Wired" },
  { host: "Mankind", name: "Innovate 365" },
  { host: "Mondelēz International", name: "Maestros" },
  { host: "Paytm", name: "Innovation Challenge" },
  { host: "PI Industries", name: "Nexus" },
  { host: "Tata Consumer Products", name: "Grow Beyond Better" },
  { host: "TATA", name: "InvicTAS" },
  { host: "thouCentric", name: "Bottoms Up" },
];

const certifications = [
  "Microsoft Certified Associate",
  "CFA Institute",
  "CFI",
  "Google Analytics",
  "NISM",
  "KPMG",
  "Six Sigma Lean",
  "Oracle Certified Professional",
  "SAP",
];

const educationSplit = [
  { name: "CS / IT Engineering", pct: 29 },
  { name: "Mechanical Engineering", pct: 26 },
  { name: "EE / ECE", pct: 13 },
  { name: "Civil / Chem Engineering", pct: 13 },
  { name: "Other Engineering", pct: 11 },
  { name: "Arts & Others", pct: 8 },
];

const workExSplit = [
  { name: "< 1 year", pct: 11 },
  { name: "1–2 years", pct: 34 },
  { name: "2–3 years", pct: 51 },
  { name: "3+ years", pct: 4 },
];

const placementTeam = [
  "Arka Bandyopadhyay",
  "Harshil Singhi",
  "Himaja Shivankar",
  "Jai Krishnan V",
  "Kumar Manas",
  "Pratyansh Chauhan",
  "Ramana Velu Padmanaban",
  "Vandana Shekhar",
];

export function PlacementsHub() {
  return (
    <>
      {/* HERO */}
      <Box
        as="section"
        position="relative"
        minH={{ base: "60vh", md: "70vh" }}
        overflow="hidden"
        bg="brand.ink"
        display="flex"
        alignItems="flex-end"
        pt={{ base: 28, md: 32 }}
        pb={{ base: 14, md: 20 }}
      >
        <Box
          position="absolute"
          inset={0}
          bgGradient="radial(circle at 30% 40%, rgba(30,95,255,0.18) 0%, transparent 55%)"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="radial(circle at 80% 70%, rgba(201,169,110,0.14) 0%, transparent 60%)"
        />
        <Container maxW="7xl" position="relative" zIndex={2}>
          <VStack align="flex-start" spacing={6} maxW="5xl">
            <HStack spacing={3}>
              <Box w="6px" h="6px" borderRadius="full" bg="brand.iitRed" boxShadow="0 0 12px #D63638" />
              <Text fontSize="sm" color="brand.mist" letterSpacing="0.3em" textTransform="uppercase">
                Final Placement Report · 2024–26
              </Text>
            </HStack>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              lineHeight={0.95}
              letterSpacing="-0.04em"
              fontWeight={600}
            >
              The market showed up.
              <br />
              <Box as="span" bgGradient="linear(to-r, #E8ECF2, #8A94A6)" bgClip="text">
                So did our graduates.
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="brand.mist" maxW="2xl">
              The MBA Class of 2024–26 at SJMSOM, IIT Bombay concluded placements at 100%,
              with 51 recruiting companies extending offers across consulting, BFSI, technology,
              FMCG and pharma.
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, md: 10 }} pt={4} w="full" maxW="4xl">
              {heroStats.map((s) => (
                <VStack key={s.label} align="flex-start" spacing={1}>
                  <Text
                    fontSize={{ base: "3xl", md: "5xl" }}
                    fontWeight={600}
                    letterSpacing="-0.04em"
                    lineHeight={1}
                    color="white"
                  >
                    {s.value}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="brand.mist"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    pt={1}
                  >
                    {s.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* FOREWORD */}
      <Box as="section" bg="brand.obsidian" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)">
        <Container maxW="6xl">
          <SectionLabel>Foreword</SectionLabel>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }} pt={10}>
            <QuoteCard
              name="Prof. S.V.D. Nageswara Rao"
              role="Head of School, SJMSOM"
              quote="I am delighted that the final placement process for the MBA batch of 2024–26 has been successfully completed with 100% placements. The school has firmly established itself as one of the top B-Schools in the country, and the average annual CTC of ₹28.16 lakhs and 35.7% of the batch receiving PPOs is reflective of the same."
            />
            <QuoteCard
              name="Prof. Mayank Pareek"
              role="Faculty Placement Coordinator"
              quote="Leading organizations across industries extended offers to our students for a wide range of coveted roles. The addition of 18 prominent organizations to our recruiter base highlights our growing legacy and the dedicated efforts of the Placement Team."
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* BATCH HIGHLIGHTS */}
      <Box as="section" bg="brand.ink" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)">
        <Container maxW="7xl">
          <SectionLabel>Batch highlights</SectionLabel>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            letterSpacing="-0.03em"
            fontWeight={600}
            maxW="3xl"
            mt={6}
          >
            A 126-strong cohort with engineering depth and real-world time in the trenches.
          </Heading>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} pt={{ base: 10, md: 14 }}>
            {batchHighlights.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 16 }} pt={{ base: 14, md: 20 }}>
            <SplitBlock title="Education split" items={educationSplit} />
            <SplitBlock title="Work experience" items={workExSplit} />
          </SimpleGrid>
        </Container>
      </Box>

      {/* PLACEMENT HIGHLIGHTS */}
      <Box as="section" bg="brand.obsidian" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)">
        <Container maxW="7xl">
          <SectionLabel>Placement highlights</SectionLabel>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            letterSpacing="-0.03em"
            fontWeight={600}
            maxW="3xl"
            mt={6}
          >
            Compensation, held up at the top of the market.
          </Heading>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} pt={{ base: 10, md: 14 }}>
            {placementHighlights.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} pt={{ base: 10, md: 14 }}>
            {medianSplit.map((s) => (
              <VStack
                key={s.label}
                align="flex-start"
                spacing={2}
                p={6}
                bg="brand.graphite"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.06)"
              >
                <Text
                  fontSize="xs"
                  color="brand.mist"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                >
                  {s.label} · median CTC
                </Text>
                <Text fontSize="4xl" fontWeight={600} letterSpacing="-0.03em" color="white">
                  {s.value}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 16 }} pt={{ base: 14, md: 20 }}>
            <BarBlock title="Company split" items={companySplit} />
            <BarBlock title="Student split" items={studentSplit} />
          </SimpleGrid>

          <Box pt={{ base: 14, md: 20 }}>
            <BarBlock title="Domain split" items={domainSplit} />
          </Box>
        </Container>
      </Box>

      {/* SECTORS */}
      <Box as="section" bg="brand.ink" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)">
        <Container maxW="7xl">
          <SectionLabel>Sector highlights</SectionLabel>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            letterSpacing="-0.03em"
            fontWeight={600}
            maxW="3xl"
            mt={6}
          >
            Where the Class of 2024–26 went.
          </Heading>
          <Text color="brand.mist" fontSize={{ base: "md", md: "lg" }} maxW="3xl" mt={5}>
            Legacy recruiters returned in force; 18 new companies joined the roster this season,
            including Aditya Birla Capital, Alvarez & Marsal, Bajaj Consumer Care, Berger Paints,
            Decode Group, EY, ExxonMobil, Kiwi General Insurance, Lupin, Mahindra & Mahindra, PI
            Industries, Saint-Gobain, Tata Consulting Engineers, Truemeds, UPL and Zepto.
          </Text>

          <VStack align="stretch" spacing={{ base: 8, md: 12 }} pt={{ base: 14, md: 20 }}>
            {sectors.map((s) => (
              <SectorCard key={s.name} sector={s} />
            ))}
          </VStack>
        </Container>
      </Box>

      {/* COMPETITIONS + CERTIFICATIONS */}
      <Box as="section" bg="brand.obsidian" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 14, lg: 20 }}>
            <VStack align="stretch" spacing={8}>
              <Box>
                <SectionLabel>Corporate hall of fame</SectionLabel>
                <Heading
                  fontSize={{ base: "2xl", md: "4xl" }}
                  letterSpacing="-0.02em"
                  fontWeight={600}
                  mt={5}
                >
                  Flagship competitions won.
                </Heading>
              </Box>
              <VStack align="stretch" spacing={0}>
                {competitions.map((c, i) => (
                  <HStack
                    key={`${c.host}-${c.name}`}
                    justify="space-between"
                    py={4}
                    borderBottom={i === competitions.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)"}
                  >
                    <Text color="white" fontSize={{ base: "md", md: "lg" }} fontWeight={500}>
                      {c.name}
                    </Text>
                    <Text color="brand.mist" fontSize="sm">
                      {c.host}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>

            <VStack align="stretch" spacing={8}>
              <Box>
                <SectionLabel>Certifications</SectionLabel>
                <Heading
                  fontSize={{ base: "2xl", md: "4xl" }}
                  letterSpacing="-0.02em"
                  fontWeight={600}
                  mt={5}
                >
                  Credentials the batch brings to the table.
                </Heading>
              </Box>
              <HStack flexWrap="wrap" spacing={3} rowGap={3}>
                {certifications.map((c) => (
                  <Box
                    key={c}
                    px={4}
                    py={2}
                    borderRadius="full"
                    border="1px solid rgba(255,255,255,0.1)"
                    bg="rgba(255,255,255,0.02)"
                    fontSize="sm"
                    color="brand.chalk"
                  >
                    {c}
                  </Box>
                ))}
              </HStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* TEAM + CONTACT */}
      <Box as="section" bg="brand.ink" py={{ base: 20, md: 28 }} borderTop="1px solid rgba(255,255,255,0.06)">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }}>
            <VStack align="stretch" spacing={8}>
              <Box>
                <SectionLabel>Corporate relations &amp; placement team 2026</SectionLabel>
                <Heading
                  fontSize={{ base: "2xl", md: "4xl" }}
                  letterSpacing="-0.02em"
                  fontWeight={600}
                  mt={5}
                >
                  The team that ran the season.
                </Heading>
              </Box>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
                {placementTeam.map((name) => (
                  <Box
                    key={name}
                    p={4}
                    bg="brand.graphite"
                    borderRadius="lg"
                    border="1px solid rgba(255,255,255,0.06)"
                  >
                    <Text color="white" fontSize="md" fontWeight={500}>
                      {name}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>

            <VStack
              align="stretch"
              spacing={6}
              p={{ base: 6, md: 10 }}
              bg="brand.graphite"
              borderRadius="2xl"
              border="1px solid rgba(255,255,255,0.06)"
            >
              <SectionLabel>Contact</SectionLabel>
              <Heading fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.02em" fontWeight={600}>
                Hire from SJMSOM.
              </Heading>
              <Text color="brand.mist" fontSize="md" lineHeight={1.65}>
                Corporate relations partners with recruiters through every step of the placement
                calendar — pre-placement talks, summer internships, live projects and final
                placements.
              </Text>
              <Stack spacing={3}>
                <ContactRow label="Email" value="placement@sjmsom.in" href="mailto:placement@sjmsom.in" />
                <ContactRow label="Website" value="som.iitb.ac.in" href="https://www.som.iitb.ac.in" />
                <ContactRow
                  label="Address"
                  value="Placement Office, SJMSOM, IIT Bombay, Mumbai – 400076"
                />
              </Stack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <HStack spacing={3}>
      <Box w="24px" h="1px" bg="brand.iitRed" />
      <Text
        fontSize="xs"
        letterSpacing="0.3em"
        textTransform="uppercase"
        color="brand.mist"
      >
        {children}
      </Text>
    </HStack>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <VStack
      align="flex-start"
      spacing={2}
      p={5}
      bg="brand.graphite"
      borderRadius="xl"
      border="1px solid rgba(255,255,255,0.06)"
      style={{ transition: "border-color 180ms ease" }}
      _hover={{ borderColor: "rgba(255,255,255,0.14)" }}
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight={600}
        letterSpacing="-0.03em"
        color="white"
        lineHeight={1}
      >
        {value}
      </Text>
      <Text
        fontSize="xs"
        color="brand.mist"
        letterSpacing="0.12em"
        textTransform="uppercase"
        lineHeight={1.3}
      >
        {label}
      </Text>
    </VStack>
  );
}

function BarBlock({
  title,
  items,
}: {
  title: string;
  items: { name: string; pct: number; color?: string }[];
}) {
  const maxPct = Math.max(...items.map((i) => i.pct));
  return (
    <VStack align="stretch" spacing={5}>
      <Text
        fontSize="sm"
        color="brand.mist"
        letterSpacing="0.2em"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <VStack align="stretch" spacing={4}>
        {items.map((s) => (
          <Box key={s.name}>
            <HStack justify="space-between" mb={2}>
              <Text fontSize="md" fontWeight={500} color="white">
                {s.name}
              </Text>
              <Text fontSize="sm" color="brand.mist" fontFamily="mono">
                {s.pct}%
              </Text>
            </HStack>
            <Box h="8px" borderRadius="full" bg="rgba(255,255,255,0.05)" overflow="hidden">
              <Box
                h="full"
                borderRadius="full"
                bg={s.color ?? "#C9A96E"}
                w={`${(s.pct / maxPct) * 100}%`}
                boxShadow={`0 0 20px ${s.color ?? "#C9A96E"}55`}
              />
            </Box>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
}

function SplitBlock({
  title,
  items,
}: {
  title: string;
  items: { name: string; pct: number }[];
}) {
  return (
    <VStack align="stretch" spacing={5}>
      <Text
        fontSize="sm"
        color="brand.mist"
        letterSpacing="0.2em"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <VStack align="stretch" spacing={0}>
        {items.map((s, i) => (
          <HStack
            key={s.name}
            justify="space-between"
            py={3.5}
            borderBottom={i === items.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)"}
          >
            <Text color="white" fontSize="md">
              {s.name}
            </Text>
            <Text color="brand.mist" fontFamily="mono" fontSize="sm">
              {s.pct}%
            </Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}

function QuoteCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <VStack
      align="flex-start"
      spacing={6}
      p={{ base: 6, md: 10 }}
      bg="brand.graphite"
      borderRadius="2xl"
      border="1px solid rgba(255,255,255,0.06)"
      position="relative"
    >
      <Box position="absolute" top={6} left={6} fontSize="6xl" color="brand.gold" opacity={0.15} lineHeight={1}>
        "
      </Box>
      <Text color="brand.chalk" fontSize={{ base: "md", md: "lg" }} lineHeight={1.7} pt={4}>
        {quote}
      </Text>
      <Box borderTop="1px solid rgba(255,255,255,0.08)" pt={5} w="full">
        <Text color="white" fontWeight={600} fontSize="md">
          {name}
        </Text>
        <Text color="brand.mist" fontSize="sm" pt={0.5}>
          {role}
        </Text>
      </Box>
    </VStack>
  );
}

function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Box
      p={{ base: 6, md: 10 }}
      bg="brand.graphite"
      borderRadius="2xl"
      border="1px solid rgba(255,255,255,0.06)"
      style={{ transition: "border-color 200ms ease" }}
      _hover={{ borderColor: "rgba(255,255,255,0.14)" }}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 10 }}>
        <VStack align="flex-start" spacing={3}>
          <Heading fontSize={{ base: "xl", md: "2xl" }} letterSpacing="-0.02em" color="white">
            {sector.name}
          </Heading>
          <Text color="brand.mist" fontSize="sm" lineHeight={1.65}>
            {sector.summary}
          </Text>
        </VStack>

        <VStack align="stretch" spacing={3}>
          <Text
            fontSize="xs"
            color="brand.mist"
            letterSpacing="0.16em"
            textTransform="uppercase"
          >
            Roles offered
          </Text>
          <HStack flexWrap="wrap" spacing={2} rowGap={2}>
            {sector.roles.map((r) => (
              <Box
                key={r}
                px={3}
                py={1.5}
                borderRadius="full"
                border="1px solid rgba(255,255,255,0.08)"
                fontSize="xs"
                color="brand.chalk"
              >
                {r}
              </Box>
            ))}
          </HStack>
        </VStack>

        <VStack align="stretch" spacing={3}>
          <Text
            fontSize="xs"
            color="brand.mist"
            letterSpacing="0.16em"
            textTransform="uppercase"
          >
            Recruiters · sample
          </Text>
          <VStack align="stretch" spacing={0}>
            {sector.recruiters.map((r, i) => (
              <Box
                key={r}
                py={2}
                borderBottom={i === sector.recruiters.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)"}
              >
                <Text color="white" fontSize="sm">
                  {r}
                </Text>
              </Box>
            ))}
          </VStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <HStack spacing={6} align="flex-start">
      <Text
        fontSize="xs"
        color="brand.mist"
        letterSpacing="0.16em"
        textTransform="uppercase"
        minW="70px"
        pt={0.5}
      >
        {label}
      </Text>
      {href ? (
        <Box
          as="a"
          href={href}
          color="white"
          fontSize="md"
          _hover={{ color: "brand.gold" }}
          style={{ transition: "color 150ms" }}
        >
          {value}
        </Box>
      ) : (
        <Text color="white" fontSize="md">
          {value}
        </Text>
      )}
    </HStack>
  );
}
