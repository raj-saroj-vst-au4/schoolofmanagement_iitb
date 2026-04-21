"use client";

import { Box, Container, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Moment = {
  time: string;
  title: string;
  desc: string;
  image: string;
};

const moments: Moment[] = [
  {
    time: "06:20",
    title: "Powai sunrise",
    desc: "The lake wakes up before the campus does. Mist lifts off the water; Mumbai is still asleep, but Powai is thinking.",
    image: "/media/day/day_06-20.jpg",
  },
  {
    time: "09:00",
    title: "Case discussion",
    desc: "Sixty minds, one P&L, zero easy answers. By the end of class you will have argued a position you didn't hold at 08:59.",
    image: "/media/day/day_09-00.jpg",
  },
  {
    time: "13:30",
    title: "Library silence",
    desc: "Where the next unicorn thesis gets drafted. A hush so deep you can hear the building thinking.",
    image: "/media/day/day_13-30.jpg",
  },
  {
    time: "17:45",
    title: "Lake walk",
    desc: "Hostel 12 loop. Strategy talk, chai in hand, the kind of conversation that becomes a startup deck two years later.",
    image: "/media/day/day_17-45.jpg",
  },
  {
    time: "22:10",
    title: "Powai at night",
    desc: "Skyline lit like a term-sheet full of yeses. You go home, open the laptop one more time, and keep going.",
    image: "/media/day/day_22-10.jpg",
  },
];

type Pin = "before" | "pinned" | "after";

/**
 * Parallax pinning: the section is tall (moments × 100vh). A scroll listener
 * on the window reads the section's bounding rect on every frame and flips the
 * left panel's positioning between:
 *   - "before"  → absolute at the top of the section (section hasn't reached viewport)
 *   - "pinned"  → fixed to the viewport (actively scrolling through)
 *   - "after"   → absolute at the bottom of the section (scrolled past)
 * This is Apple/Bloomberg-style parallax and doesn't rely on position:sticky,
 * which can silently break inside grid/flex layouts or under smooth-scroll libs.
 *
 * The active moment index is derived from scroll progress through the section,
 * so the left caption always matches whichever image is centered on the right.
 *
 * Desktop only. On mobile (<lg) the layout collapses to a normal stack.
 */
export function DayAtSJMSOM() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftOuterRef = useRef<HTMLDivElement>(null);
  const [pin, setPin] = useState<Pin>("before");
  const [active, setActive] = useState(0);
  const [leftWidth, setLeftWidth] = useState<number | null>(null);
  const [leftLeft, setLeftLeft] = useState<number>(0);

  // Track the left column's viewport-relative X + width so we can recreate
  // its geometry when switching to position:fixed.
  useLayoutEffect(() => {
    const el = leftOuterRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      setLeftWidth(rect.width);
      setLeftLeft(rect.left);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Pin state: just watch the section's top/bottom edges.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top > 0) setPin("before");
      else if (rect.bottom <= vh) setPin("after");
      else setPin("pinned");
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Active moment: whichever image's center is closest to viewport center.
  // Decouples text-sync from section-progress math so gaps/sizes don't
  // throw timing off.
  useEffect(() => {
    const slots = Array.from(
      document.querySelectorAll<HTMLElement>("[data-moment-idx]"),
    );
    if (slots.length === 0) return;
    let rafId = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const vhCenter = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (const el of slots) {
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const d = Math.abs(c - vhCenter);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = Number(el.dataset.momentIdx);
        }
      }
      setActive(bestIdx);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const pinnedStyle =
    pin === "pinned"
      ? {
          position: "fixed" as const,
          top: 0,
          left: leftLeft,
          width: leftWidth ?? undefined,
        }
      : pin === "after"
        ? {
            position: "absolute" as const,
            bottom: 0,
            left: 0,
            width: "100%",
          }
        : {
            position: "absolute" as const,
            top: 0,
            left: 0,
            width: "100%",
          };

  return (
    <Box
      as="section"
      id="life"
      ref={sectionRef}
      position="relative"
      bg="brand.ink"
    >
      <Container maxW="7xl" h="full" position="relative">
        {/* Desktop two-column layout */}
        <Box
          display={{ base: "none", lg: "flex" }}
          h="full"
          alignItems="stretch"
        >
          {/* LEFT outer — reserves 50% of container width for the pinned panel */}
          <Box
            ref={leftOuterRef}
            flex="1 1 0"
            w="50%"
            pr={14}
            position="relative"
          >
            {/* Pinned/absolute panel with crossfading text */}
            <Box
              {...pinnedStyle}
              h="100vh"
              display="flex"
              alignItems="center"
              pr={14}
              pointerEvents="none"
            >
              <VStack align="flex-start" spacing={8} w="full" pointerEvents="auto">
                <HStack spacing={3}>
                  <Box w="24px" h="1px" bg="brand.chalk" />
                  <Text
                    fontSize="xs"
                    letterSpacing="0.3em"
                    textTransform="uppercase"
                    color="brand.mist"
                  >
                    A Day at SJMSOM
                  </Text>
                </HStack>

                <Heading
                  fontSize={{ lg: "3xl", xl: "4xl" }}
                  letterSpacing="-0.03em"
                  lineHeight={1.05}
                  color="brand.mist"
                >
                  Seventeen hours,
                  <br />
                  <Box as="span" color="white">zero wasted.</Box>
                </Heading>

                {/* Crossfading moment */}
                <Box position="relative" w="full" minH="320px">
                  {moments.map((m, i) => {
                    const isActive = i === active;
                    return (
                      <VStack
                        key={m.time}
                        position="absolute"
                        inset={0}
                        align="flex-start"
                        spacing={5}
                        opacity={isActive ? 1 : 0}
                        transform={isActive ? "translateY(0)" : "translateY(8px)"}
                        transition="opacity 500ms ease, transform 500ms ease"
                        pointerEvents={isActive ? "auto" : "none"}
                      >
                        <HStack spacing={3}>
                          <Text
                            fontFamily="mono"
                            fontSize="sm"
                            letterSpacing="0.3em"
                            color="brand.mist"
                          >
                            {m.time}
                          </Text>
                          <Text fontFamily="mono" fontSize="sm" color="whiteAlpha.400">
                            · 0{i + 1} / 0{moments.length}
                          </Text>
                        </HStack>
                        <Heading
                          fontSize={{ lg: "5xl", xl: "6xl" }}
                          letterSpacing="-0.03em"
                          lineHeight={1}
                          fontWeight={600}
                        >
                          {m.title}
                        </Heading>
                        <Text color="brand.chalk" fontSize="lg" maxW="lg" lineHeight={1.6}>
                          {m.desc}
                        </Text>
                      </VStack>
                    );
                  })}
                </Box>

                {/* Progress dots */}
                <HStack spacing={3} pt={4}>
                  {moments.map((m, i) => (
                    <Box
                      key={m.time}
                      h="2px"
                      w={i === active ? "36px" : "12px"}
                      bg={i === active ? "white" : "whiteAlpha.300"}
                      borderRadius="full"
                      transition="width 400ms ease, background 400ms ease"
                    />
                  ))}
                </HStack>
              </VStack>
            </Box>
          </Box>

          {/* RIGHT — vertical stack of square image slots.
              Slots sized to the square plus a tight gap. */}
          <Box flex="1 1 0" w="50%" position="relative">
            {moments.map((m, i) => (
              <Box
                key={m.time}
                data-moment-idx={i}
                display="flex"
                alignItems="center"
                justifyContent="center"
                pb={i === moments.length - 1 ? 0 : 20}
                pt={i === 0 ? 10 : 0}
              >
                <Box
                  position="relative"
                  w="full"
                  maxW="min(100%, 80vh)"
                  style={{ aspectRatio: "1 / 1" }}
                  borderRadius="3xl"
                  overflow="hidden"
                  border="1px solid rgba(255,255,255,0.08)"
                  bg="brand.graphite"
                  boxShadow="0 30px 80px rgba(0,0,0,0.5)"
                >
                  <Box
                    as="img"
                    src={m.image}
                    alt={`${m.time} — ${m.title}`}
                    position="absolute"
                    inset={0}
                    w="full"
                    h="full"
                    objectFit="cover"
                    draggable={false}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mobile — simple stack */}
        <Box display={{ base: "block", lg: "none" }} py={16}>
          <VStack align="flex-start" spacing={4} mb={10}>
            <HStack spacing={3}>
              <Box w="24px" h="1px" bg="brand.chalk" />
              <Text
                fontSize="xs"
                letterSpacing="0.3em"
                textTransform="uppercase"
                color="brand.mist"
              >
                A Day at SJMSOM
              </Text>
            </HStack>
            <Heading fontSize="4xl" letterSpacing="-0.03em" lineHeight={1.05}>
              Seventeen hours,
              <br />
              <Box as="span" color="brand.mist">zero wasted.</Box>
            </Heading>
          </VStack>

          <VStack spacing={6} align="stretch">
            {moments.map((m, i) => (
              <Box
                key={m.time}
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                border="1px solid rgba(255,255,255,0.08)"
                h="70vh"
              >
                <Box
                  as="img"
                  src={m.image}
                  alt={`${m.time} — ${m.title}`}
                  w="full"
                  h="full"
                  objectFit="cover"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-t, rgba(5,7,10,0.92) 0%, transparent 55%)"
                />
                <VStack
                  position="absolute"
                  left={5}
                  right={5}
                  bottom={6}
                  align="flex-start"
                  spacing={2}
                >
                  <Text fontFamily="mono" fontSize="xs" letterSpacing="0.3em" color="brand.chalk">
                    {m.time}
                  </Text>
                  <Heading fontSize="3xl" letterSpacing="-0.03em" lineHeight={1}>
                    {m.title}
                  </Heading>
                  <Text fontSize="sm" color="brand.chalk" opacity={0.9}>
                    {m.desc}
                  </Text>
                </VStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
