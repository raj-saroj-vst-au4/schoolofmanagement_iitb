import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ContactHero } from "@/components/contact/Hero";
import { Directories } from "@/components/contact/Directories";
import { Staff } from "@/components/contact/Staff";
import { Reach } from "@/components/contact/Reach";
import { Social } from "@/components/contact/Social";

export const metadata: Metadata = {
  title: "Contact — SJMSOM, IIT Bombay",
  description:
    "Contact the Shailesh J. Mehta School of Management at IIT Bombay. Office emails and phone numbers, administrative staff directory, directions to the Powai campus, and official social handles.",
};

export default function ContactPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <ContactHero />
      <Directories />
      <Staff />
      <Reach />
      <Social />
      <FooterCTA />
    </Box>
  );
}
