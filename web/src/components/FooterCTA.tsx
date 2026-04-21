"use client";

import { Box, Container, Heading, Text, VStack, HStack, Button, SimpleGrid, Divider } from "@chakra-ui/react";

export function FooterCTA() {
  return (
    <Box as="footer" bg="brand.ink" position="relative" overflow="hidden">
      {/* Big CTA */}
      <Box
        position="relative"
        py={{ base: 32, md: 48 }}
        borderTop="1px solid rgba(255,255,255,0.06)"
        overflow="hidden"
      >
        <Box
          as="img"
          src="/media/footer_bg.jpg"
          alt=""
          position="absolute"
          inset={0}
          w="full"
          h="full"
          objectFit="cover"
          opacity={0.35}
          style={{ filter: "saturate(0.7) contrast(1.1)" }}
          loading="lazy"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, rgba(5,7,10,0.6), rgba(5,7,10,0.85) 50%, rgba(5,7,10,0.95))"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          top="-20%"
          left="50%"
          transform="translateX(-50%)"
          w="900px"
          h="900px"
          borderRadius="full"
          bgGradient="radial(circle, rgba(30,95,255,0.22), transparent 60%)"
          filter="blur(40px)"
          pointerEvents="none"
        />
        <Container maxW="5xl" position="relative" textAlign="center">
          <VStack spacing={8}>
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Admissions 2026
            </Text>
            <Heading
              fontSize={{ base: "5xl", md: "8xl" }}
              letterSpacing="-0.04em"
              lineHeight={0.95}
              bgGradient="linear(to-b, #FFFFFF, #8A94A6)"
              bgClip="text"
            >
              Your turn to be
              <br />
              engineered.
            </Heading>
            <Text color="brand.mist" fontSize="lg" maxW="2xl">
              Applications open for the 2026–28 MBA cohort. CAT scores accepted. Early interviews in Powai.
            </Text>
            <HStack spacing={4} pt={4}>
              <Button
                size="lg"
                bg="white"
                color="black"
                px={10}
                _hover={{ bg: "brand.chalk", transform: "translateY(-2px)" }}
                boxShadow="0 20px 60px rgba(255,255,255,0.1)"
              >
                Start application →
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="rgba(255,255,255,0.2)"
                color="white"
                px={10}
                _hover={{ bg: "rgba(255,255,255,0.06)" }}
              >
                Download brochure
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Divider borderColor="rgba(255,255,255,0.06)" />

      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} mb={12}>
          <VStack align="flex-start" spacing={5}>
            <Box
              as="img"
              src="/sjmsom-logo.png"
              alt="Shailesh J. Mehta School of Management, IIT Bombay"
              h="44px"
              w="auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <Text fontSize="sm" color="brand.mist" maxW="xs">
              Shailesh J. Mehta School of Management, IIT Bombay. Powai, Mumbai — 400076.
            </Text>
          </VStack>

          {[
            { title: "Programs", items: ["MBA", "EMBA", "PhD", "Executive Education"] },
            { title: "School", items: ["Faculty", "Research", "News", "Placements"] },
            { title: "Connect", items: ["Admissions", "Recruiters", "Alumni", "Contact"] },
          ].map((col) => (
            <VStack key={col.title} align="flex-start" spacing={3}>
              <Text fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" color="brand.mist">
                {col.title}
              </Text>
              {col.items.map((it) => (
                <Box
                  key={it}
                  as="a"
                  href="#"
                  fontSize="sm"
                  color="brand.chalk"
                  _hover={{ color: "white" }}
                >
                  {it}
                </Box>
              ))}
            </VStack>
          ))}
        </SimpleGrid>

        <HStack
          justify="space-between"
          pt={8}
          borderTop="1px solid rgba(255,255,255,0.06)"
          flexWrap="wrap"
          spacing={4}
        >
          <Text fontSize="xs" color="brand.mist" fontFamily="mono">
            © 2026 SJMSOM · IIT Bombay
          </Text>
          <HStack spacing={6} fontSize="xs" color="brand.mist">
            <Text>Privacy</Text>
            <Text>Accessibility</Text>
            <Text>Sitemap</Text>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
