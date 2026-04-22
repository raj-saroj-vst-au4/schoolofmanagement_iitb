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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type SubLink = { label: string; href: string; sub?: string };
type NavLink = { label: string; href?: string; children?: SubLink[] };

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "Programs",
    children: [
      { label: "MBA",  href: "/programs/mba", sub: "2-year full-time · flagship" },
      { label: "PhD",  href: "/programs/phd", sub: "Doctoral programme · 4–5 years" },
      { label: "EMBA", href: "#",             sub: "Executive MBA · weekend" },
      { label: "MDP",  href: "#",             sub: "Management Development · short-format" },
    ],
  },
  {
    label: "Impact",
    children: [
      { label: "Research",     href: "/research",     sub: "Interests, topics, projects" },
      { label: "Publications", href: "/publications", sub: "Papers across all faculty" },
      { label: "Awards",       href: "/awards",       sub: "Honours, grants, recognitions" },
      { label: "Placements",   href: "/placements",   sub: "MBA final placement report 2024–26" },
    ],
  },
  {
    label: "People",
    children: [
      { label: "Faculty",         href: "/faculty/core",              sub: "27 core professors" },
      { label: "Staff",           href: "/people/staff",              sub: "Administration & office attendants" },
      { label: "MBA students",    href: "/people/students/mba",       sub: "Current batches + alumni" },
      { label: "PhD students",    href: "/people/students/phd",       sub: "Current & graduated scholars" },
    ],
  },
  { label: "Contact us",  href: "/contact" },
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
function Caret() {
  return (
    <Box as="svg" w="10px" h="10px" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polyline points="2.5,4.5 6,8 9.5,4.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Record<string, boolean>>({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleMobile = (key: string) =>
    setMobileOpenMenus((v) => ({ ...v, [key]: !v[key] }));
  const resetMobile = () => setMobileOpenMenus({});

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
            <Box as="a" href="/" display="inline-flex" alignItems="center" aria-label="SJMSOM, IIT Bombay">
              <Box
                as="img"
                src="/sjmsom-logo.png"
                alt="Shailesh J. Mehta School of Management, IIT Bombay"
                h={{ base: "32px", md: "40px" }}
                w="auto"
                style={{ filter: "brightness(0) invert(1)", transition: "opacity 200ms ease" }}
                _hover={{ opacity: 0.85 } as never}
              />
            </Box>

            {/* Desktop nav */}
            <HStack spacing={7} display={{ base: "none", lg: "flex" }}>
              {links.map((l) =>
                l.children ? (
                  <Menu key={l.label} placement="bottom-start" offset={[0, 14]} gutter={0} isLazy>
                    <MenuButton
                      as="button"
                      fontSize="sm"
                      color="brand.chalk"
                      _hover={{ color: "white" }}
                      transition="color 150ms"
                    >
                      <HStack spacing={1.5}>
                        <Text>{l.label}</Text>
                        <Caret />
                      </HStack>
                    </MenuButton>
                    <MenuList
                      bg="rgba(10,13,18,0.96)"
                      backdropFilter="saturate(140%) blur(20px)"
                      border="1px solid rgba(255,255,255,0.08)"
                      borderRadius="xl"
                      py={2}
                      minW="280px"
                      boxShadow="0 20px 60px rgba(0,0,0,0.5)"
                    >
                      {l.children.map((c) => (
                        <MenuItem
                          key={c.href}
                          as="a"
                          href={c.href}
                          bg="transparent"
                          color="brand.chalk"
                          _hover={{ bg: "rgba(255,255,255,0.05)", color: "white" }}
                          _focus={{ bg: "rgba(255,255,255,0.05)", color: "white" }}
                          py={3}
                          px={4}
                          borderRadius="md"
                        >
                          <VStack align="flex-start" spacing={0.5} w="full">
                            <Text fontSize="sm" fontWeight={600}>
                              {c.label}
                            </Text>
                            {c.sub && (
                              <Text fontSize="xs" color="brand.mist">
                                {c.sub}
                              </Text>
                            )}
                          </VStack>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
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
                ),
              )}
            </HStack>

            <HStack spacing={2}>
              <Button
                as="a"
                href="/programs/mba#admissions"
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

      {/* Mobile drawer */}
      <Drawer
        isOpen={isOpen}
        onClose={() => {
          resetMobile();
          onClose();
        }}
        placement="right"
        size="xs"
      >
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
                onClick={() => {
                  resetMobile();
                  onClose();
                }}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={1} py={4}>
              {links.map((l) =>
                l.children ? (
                  <Box key={l.label}>
                    <Box
                      as="button"
                      onClick={() => toggleMobile(l.label)}
                      w="full"
                      py={3}
                      px={2}
                      fontSize="lg"
                      color="brand.chalk"
                      borderBottom="1px solid rgba(255,255,255,0.04)"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      _hover={{ color: "white", bg: "rgba(255,255,255,0.03)" }}
                    >
                      <Text>{l.label}</Text>
                      <Box
                        transform={mobileOpenMenus[l.label] ? "rotate(180deg)" : "rotate(0deg)"}
                        style={{ transition: "transform 200ms ease" }}
                      >
                        <Caret />
                      </Box>
                    </Box>
                    {mobileOpenMenus[l.label] && (
                      <VStack align="stretch" spacing={0} pl={4} py={1}>
                        {l.children.map((c) => (
                          <Box
                            key={c.href}
                            as="a"
                            href={c.href}
                            onClick={onClose}
                            py={2.5}
                            px={2}
                            fontSize="md"
                            color="brand.chalk"
                            borderLeft="2px solid rgba(255,255,255,0.1)"
                            _hover={{ color: "white", borderColor: "white" }}
                          >
                            {c.label}
                            {c.sub && (
                              <Text fontSize="xs" color="brand.mist" mt={0.5}>
                                {c.sub}
                              </Text>
                            )}
                          </Box>
                        ))}
                      </VStack>
                    )}
                  </Box>
                ) : (
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
                ),
              )}

              <Button
                as="a"
                href="/programs/mba#admissions"
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
