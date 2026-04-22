"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import type { Award } from "@/lib/aggregate";

export function AwardCard({ award }: { award: Award }) {
  const hasImages = award.images.length > 0;
  return (
    <Box
      borderRadius="xl"
      bg="brand.graphite"
      border="1px solid rgba(255,255,255,0.06)"
      overflow="hidden"
      position="relative"
      style={{ transition: "all 180ms ease" }}
      _hover={{ borderColor: "rgba(201,169,110,0.4)", transform: "translateY(-2px)" }}
    >
      {hasImages && <ImageCarousel images={award.images} alt={award.title} />}

      <VStack align="stretch" spacing={3} p={{ base: 5, md: 6 }} position="relative">
        <Box
          position="absolute"
          top={hasImages ? undefined : 0}
          left={0}
          bottom={0}
          w="3px"
          bg="brand.gold"
          opacity={0.7}
        />

        <HStack spacing={3} color="brand.gold" flexWrap="wrap">
          {award.year != null && (
            <Text fontFamily="mono" fontSize="xs" fontWeight={600} letterSpacing="0.15em">
              {award.year}
            </Text>
          )}
          {award.kind === "student" && award.batch && (
            <>
              <Dot />
              <Text fontFamily="mono" fontSize="xs" fontWeight={600} letterSpacing="0.15em" color="brand.chalk" opacity={0.85}>
                {award.batch}
              </Text>
            </>
          )}
        </HStack>

        {award.kind === "student" && (
          <Text fontSize={{ base: "lg", md: "xl" }} color="white" letterSpacing="-0.01em" lineHeight={1.25} fontWeight={600}>
            {award.title}
          </Text>
        )}

        {award.kind === "student" && award.event && (
          <Text fontSize="sm" color="brand.mist" lineHeight={1.55}>
            {award.event}
          </Text>
        )}

        <Text fontSize="sm" color="brand.chalk" lineHeight={1.65}>
          {award.writeup}
        </Text>

        {award.links.length > 0 && (
          <HStack flexWrap="wrap" spacing={2} rowGap={2} pt={1}>
            {award.links.map((l) => (
              <Box
                key={l.url}
                as="a"
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                px={3}
                py={1.5}
                borderRadius="full"
                border="1px solid rgba(255,255,255,0.12)"
                fontSize="xs"
                color="brand.chalk"
                _hover={{ borderColor: "rgba(201,169,110,0.5)", color: "white" }}
                style={{ transition: "all 150ms ease" }}
              >
                {l.label} ↗
              </Box>
            ))}
          </HStack>
        )}

        <HStack spacing={2} pt={2} fontSize="xs" color="brand.mist" flexWrap="wrap">
          {award.kind === "faculty" ? (
            <Box
              as="a"
              href={`/faculty/${award.facultySlug}`}
              display="inline-flex"
              alignItems="center"
              gap={2}
              _hover={{ color: "white" }}
              style={{ transition: "color 150ms" }}
            >
              {award.facultyImg && (
                <Box
                  as="img"
                  src={award.facultyImg}
                  alt=""
                  w="20px"
                  h="20px"
                  borderRadius="full"
                  objectFit="cover"
                />
              )}
              <Text>{award.facultyName}</Text>
            </Box>
          ) : (
            <>
              <Text fontWeight={600} color="white">
                {award.recipient}
              </Text>
              {award.team && (
                <>
                  <Text color="brand.mist">·</Text>
                  <Text>{award.team}</Text>
                </>
              )}
            </>
          )}
        </HStack>
      </VStack>
    </Box>
  );
}

function Dot() {
  return <Box w="3px" h="3px" borderRadius="full" bg="brand.gold" opacity={0.5} />;
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const multi = images.length > 1;

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== activeIdx) setActiveIdx(idx);
  };

  const scrollTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  };

  return (
    <Box position="relative" w="full" h={{ base: "220px", md: "260px" }} bg="rgba(0,0,0,0.3)">
      <Box
        ref={scrollerRef}
        onScroll={onScroll}
        display="flex"
        w="full"
        h="full"
        overflowX="auto"
        overflowY="hidden"
        sx={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {images.map((src, i) => (
          <Box
            key={`${src}-${i}`}
            flex="0 0 100%"
            w="full"
            h="full"
            position="relative"
            sx={{ scrollSnapAlign: "start" }}
          >
            <Box
              as="img"
              src={src}
              alt={alt}
              loading="lazy"
              w="full"
              h="full"
              objectFit="cover"
              draggable={false}
            />
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-t, rgba(10,14,20,0.85) 0%, transparent 40%)"
              pointerEvents="none"
            />
          </Box>
        ))}
      </Box>

      {multi && (
        <>
          <HStack
            position="absolute"
            bottom={3}
            left="50%"
            transform="translateX(-50%)"
            spacing={1.5}
            bg="rgba(10,14,20,0.6)"
            backdropFilter="blur(8px)"
            px={2.5}
            py={1.5}
            borderRadius="full"
          >
            {images.map((_, i) => (
              <Box
                key={i}
                as="button"
                onClick={() => scrollTo(i)}
                aria-label={`Show image ${i + 1}`}
                w={i === activeIdx ? "18px" : "6px"}
                h="6px"
                borderRadius="full"
                bg={i === activeIdx ? "white" : "rgba(255,255,255,0.4)"}
                style={{ transition: "all 200ms ease" }}
              />
            ))}
          </HStack>
          <Box
            position="absolute"
            top={3}
            right={3}
            px={2.5}
            py={1}
            borderRadius="full"
            bg="rgba(10,14,20,0.6)"
            backdropFilter="blur(8px)"
            fontSize="xs"
            fontFamily="mono"
            color="white"
            letterSpacing="0.08em"
          >
            {activeIdx + 1}/{images.length}
          </Box>
        </>
      )}
    </Box>
  );
}
