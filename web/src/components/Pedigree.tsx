"use client";

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionBox = motion.create(Box);

const stats = [
  { value: 4, suffix: "", label: "NIRF Management rank", prefix: "#" },
  { value: 60, suffix: "+", label: "Years of IIT Bombay" },
  { value: 100, suffix: "%", label: "Placement record" },
  { value: 34.7, suffix: " LPA", label: "Average CTC" },
];

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(to * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  const display = to % 1 === 0 ? Math.round(val) : val.toFixed(1);
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Pedigree() {
  return (
    <Box
      as="section"
      id="pedigree"
      py={{ base: 24, md: 40 }}
      position="relative"
      bgGradient="linear(to-b, brand.ink, brand.obsidian)"
      overflow="hidden"
    >
      {/* Pedigree backdrop — brushed-steel crest macro */}
      <Box
        as="img"
        src="/media/pedigree_bg.jpg"
        alt=""
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        opacity={0.22}
        style={{ filter: "grayscale(0.4) contrast(1.05)" }}
        loading="lazy"
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-r, rgba(5,7,10,0.92), rgba(5,7,10,0.55) 50%, rgba(5,7,10,0.92))"
        pointerEvents="none"
      />
      {/* Subtle grid lines */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.35}
        pointerEvents="none"
        backgroundImage="linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
        backgroundSize="80px 80px"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <Container maxW="7xl" position="relative">
        <VStack spacing={6} align="center" textAlign="center" mb={24}>
          <HStack spacing={3}>
            <Box w="24px" h="1px" bg="brand.gold" />
            <Text fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" color="brand.mist">
              Pedigree
            </Text>
            <Box w="24px" h="1px" bg="brand.gold" />
          </HStack>
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            maxW="4xl"
            letterSpacing="-0.03em"
            lineHeight={1.05}
          >
            Machined in the same institute
            <br />
            <Box as="span" bgGradient="linear(to-r, #C9A96E, #E8ECF2)" bgClip="text">
              that engineered modern India.
            </Box>
          </Heading>
          <Text color="brand.mist" maxW="2xl" fontSize="lg">
            Every SJMSOM graduate carries the IIT Bombay crest — and the standard that comes with it.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 10 }}>
          {stats.map((s, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              p={{ base: 6, md: 10 }}
              borderRadius="xl"
              bg="rgba(10,13,18,0.5)"
              border="1px solid rgba(255,255,255,0.06)"
              backdropFilter="blur(10px)"
            >
              <VStack align="flex-start" spacing={3}>
                <Heading
                  fontSize={{ base: "5xl", md: "7xl" }}
                  letterSpacing="-0.04em"
                  bgGradient="linear(to-b, #FFFFFF, #8A94A6)"
                  bgClip="text"
                  fontWeight={500}
                >
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </Heading>
                <Text color="brand.mist" fontSize="sm" letterSpacing="0.1em">
                  {s.label}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
