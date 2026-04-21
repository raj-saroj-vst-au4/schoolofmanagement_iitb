"use client";

import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Container,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Pedigree", href: "#pedigree" },
  { label: "Alumni", href: "#alumni" },
  { label: "Life", href: "#life" },
  { label: "Faculty", href: "#faculty" },
  { label: "Research", href: "#research" },
  { label: "Placements", href: "#placements" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <Box as="svg" w="22px" h="22px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </Box>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        transition="all 250ms ease"
        bg={scrolled ? "rgba(5,7,10,0.72)" : "transparent"}
        backdropFilter={scrolled ? "saturate(140%) blur(16px)" : "none"}
        borderBottom={scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent"}
      >
        <Container maxW="7xl" py={4}>
          <Flex align="center" justify="space-between">
            <Box
              as="a"
              href="/"
              display="inline-flex"
              alignItems="center"
              aria-label="SJMSOM, IIT Bombay"
            >
              <Box
                as="img"
                src="/sjmsom-logo.png"
                alt="Shailesh J. Mehta School of Management, IIT Bombay"
                h={{ base: "32px", md: "40px" }}
                w="auto"
                style={{
                  filter: "brightness(0) invert(1)",
                  transition: "opacity 200ms ease",
                }}
                _hover={{ opacity: 0.85 } as never}
              />
            </Box>

            <HStack spacing={7} display={{ base: "none", lg: "flex" }}>
              {links.map((l) => (
                <Box
                  key={l.href}
                  as="a"
                  href={l.href}
                  fontSize="sm"
                  color="brand.chalk"
                  _hover={{ color: "white" }}
                  transition="color 150ms"
                >
                  {l.label}
                </Box>
              ))}
            </HStack>

            <HStack spacing={2}>
              <Button
                size="sm"
                bg="white"
                color="black"
                _hover={{ bg: "brand.chalk", transform: "translateY(-1px)" }}
                transition="all 150ms"
                display={{ base: "none", md: "inline-flex" }}
              >
                Apply 2026
              </Button>
              <IconButton
                aria-label="Open menu"
                icon={<MenuIcon open={false} />}
                variant="ghost"
                color="white"
                _hover={{ bg: "rgba(255,255,255,0.06)" }}
                display={{ base: "inline-flex", lg: "none" }}
                onClick={onOpen}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xs">
        <DrawerOverlay bg="rgba(5,7,10,0.7)" backdropFilter="blur(6px)" />
        <DrawerContent bg="brand.obsidian" borderLeft="1px solid rgba(255,255,255,0.06)">
          <DrawerHeader borderBottom="1px solid rgba(255,255,255,0.06)">
            <Flex justify="space-between" align="center">
              <Box
                as="img"
                src="/sjmsom-logo.png"
                alt="SJMSOM"
                h="28px"
                w="auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <IconButton
                aria-label="Close menu"
                icon={<MenuIcon open />}
                variant="ghost"
                color="white"
                size="sm"
                onClick={onClose}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={1} py={4}>
              {links.map((l) => (
                <Box
                  key={l.href}
                  as="a"
                  href={l.href}
                  onClick={onClose}
                  py={3}
                  px={2}
                  fontSize="lg"
                  color="brand.chalk"
                  borderBottom="1px solid rgba(255,255,255,0.04)"
                  _hover={{ color: "white", bg: "rgba(255,255,255,0.03)" }}
                >
                  {l.label}
                </Box>
              ))}
              <Button
                mt={6}
                size="lg"
                bg="white"
                color="black"
                _hover={{ bg: "brand.chalk" }}
                onClick={onClose}
              >
                Apply 2026 →
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
