import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PlacementsHub } from "@/components/placements/PlacementsHub";

export const metadata: Metadata = {
  title: "Placements 2024–26 — SJMSOM, IIT Bombay",
  description:
    "MBA final placement report 2024–26 at Shailesh J. Mehta School of Management, IIT Bombay. 100% placements, ₹28.16 LPA average CTC, 51 recruiting companies, 35.7% PPO rate.",
};

export default function PlacementsPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <PlacementsHub />
      <FooterCTA />
    </Box>
  );
}
