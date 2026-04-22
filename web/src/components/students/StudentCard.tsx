"use client";

import { Box, VStack, HStack, Text, Heading, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

type Common = {
  name: string;
  img: string;
};

export type MBAStudent = Common & {
  degree?: string;
  college?: string;
  university?: string;
  workExperience?: string;
  organization?: string;
};

export type PhDStudent = Common & {
  degree?: string;
  workExperience?: string;
  area?: string;
  supervisor?: string;
  thesisTitle?: string;
  email?: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

/** Subtle deterministic color per name — keeps the initials disc visually diverse. */
function gradientForName(name: string): [string, string] {
  const palette: [string, string][] = [
    ["#1E5FFF", "#7C5CFF"],
    ["#C9A96E", "#D63638"],
    ["#2ECC71", "#1E5FFF"],
    ["#7C5CFF", "#E066C9"],
    ["#FF9466", "#D63638"],
    ["#0A66C2", "#1E5FFF"],
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return palette[Math.abs(h) % palette.length];
}

function Avatar({ name, img, size = 92 }: { name: string; img?: string; size?: number }) {
  const [c1, c2] = gradientForName(name);
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(img) && !failed;

  return (
    <Box
      w={`${size}px`}
      h={`${size}px`}
      minW={`${size}px`}
      borderRadius="full"
      overflow="hidden"
      position="relative"
      bgGradient={`linear(135deg, ${c1}, ${c2})`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow={`0 0 24px ${c1}22`}
      flexShrink={0}
    >
      {hasImage ? (
        <Box
          as="img"
          src={img}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          position="absolute"
          inset={0}
          w="full"
          h="full"
          objectFit="cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <Text
          fontSize={size >= 90 ? "2xl" : "lg"}
          fontWeight={600}
          color="white"
          letterSpacing="-0.02em"
        >
          {initials(name)}
        </Text>
      )}
    </Box>
  );
}

export function MBACard({ s }: { s: MBAStudent }) {
  const subtitle = s.degree || s.college || "";
  return (
    <Box
      p={5}
      borderRadius="2xl"
      bg="brand.graphite"
      border="1px solid rgba(255,255,255,0.06)"
      display="flex"
      gap={4}
      alignItems="flex-start"
      style={{ transition: "all 200ms ease" }}
      _hover={{ borderColor: "rgba(255,255,255,0.16)", transform: "translateY(-2px)" }}
    >
      <Avatar name={s.name} img={s.img} size={80} />
      <VStack align="flex-start" spacing={1.5} flex={1} minW={0}>
        <Heading fontSize="md" letterSpacing="-0.02em" lineHeight={1.2} noOfLines={1}>
          {s.name}
        </Heading>
        {subtitle && (
          <Text fontSize="xs" color="brand.chalk" noOfLines={1}>
            {subtitle}
          </Text>
        )}
        {s.college && (
          <Text fontSize="2xs" color="brand.mist" letterSpacing="0.08em" noOfLines={1}>
            {s.college}
          </Text>
        )}
        {s.workExperience && (
          <HStack spacing={1.5} pt={1}>
            <Box w="4px" h="4px" borderRadius="full" bg="brand.gold" />
            <Tooltip
              label={s.organization ? `at ${s.organization}` : undefined}
              hasArrow
              placement="top"
              bg="brand.obsidian"
              color="white"
              fontSize="xs"
              isDisabled={!s.organization}
            >
              <Text fontSize="2xs" color="brand.gold" fontFamily="mono" letterSpacing="0.08em" noOfLines={1}>
                {s.workExperience}
                {s.organization ? ` · ${s.organization}` : ""}
              </Text>
            </Tooltip>
          </HStack>
        )}
      </VStack>
    </Box>
  );
}

export function PhDCard({ s }: { s: PhDStudent; }) {
  return (
    <Box
      p={5}
      borderRadius="2xl"
      bg="brand.graphite"
      border="1px solid rgba(255,255,255,0.06)"
      display="flex"
      gap={5}
      alignItems="flex-start"
      style={{ transition: "all 200ms ease" }}
      _hover={{ borderColor: "rgba(255,255,255,0.16)", transform: "translateY(-2px)" }}
    >
      <Avatar name={s.name} img={s.img} size={92} />
      <VStack align="flex-start" spacing={2} flex={1} minW={0}>
        <Heading fontSize="md" letterSpacing="-0.02em" lineHeight={1.2} noOfLines={2}>
          {s.name}
        </Heading>
        {s.area && (
          <Text
            fontSize="2xs"
            color="#a294ff"
            letterSpacing="0.14em"
            textTransform="uppercase"
            fontWeight={600}
            noOfLines={1}
          >
            {s.area}
          </Text>
        )}
        {s.thesisTitle && (
          <Text fontSize="xs" color="brand.chalk" fontStyle="italic" lineHeight={1.5} noOfLines={3}>
            &ldquo;{s.thesisTitle}&rdquo;
          </Text>
        )}
        {s.supervisor && (
          <Text fontSize="2xs" color="brand.mist" noOfLines={1}>
            Supervisor · <Box as="span" color="brand.chalk">{s.supervisor}</Box>
          </Text>
        )}
        {s.email && (
          <Text
            as="a"
            href={`mailto:${s.email}`}
            fontSize="2xs"
            color="brand.mist"
            fontFamily="mono"
            noOfLines={1}
            _hover={{ color: "white" }}
          >
            {s.email}
          </Text>
        )}
      </VStack>
    </Box>
  );
}
