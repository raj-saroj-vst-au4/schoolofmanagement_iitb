import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { FooterCTA } from "@/components/FooterCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AboutHero } from "@/components/about/Hero";
import { OurStory } from "@/components/about/OurStory";
import { Milestones } from "@/components/about/Milestones";
import { LeadershipMessage } from "@/components/about/LeadershipMessage";
import { Rankings } from "@/components/about/Rankings";
import { Advisory } from "@/components/about/Advisory";
import { Partnerships } from "@/components/about/Partnerships";

export const metadata: Metadata = {
  title: "About — SJMSOM",
  description:
    "Since 1995, SJMSOM has trained managers with strong technological foundations to lead in a technology-driven world. Part of IIT Bombay.",
};

export default function AboutPage() {
  return (
    <Box as="main" bg="brand.ink">
      <SmoothScroll />
      <Nav />
      <AboutHero />
      <OurStory />
      <Milestones />
      <LeadershipMessage
        eyebrow="Director's Message"
        name="Prof. Shireesh B. Kedare"
        role="Director, IIT Bombay"
        email="director@iitb.ac.in"
        image="/media/about/Prof-Shireesh-Kedare.jpg"
        quote="We are proud to say that the School is ideally placed to exploit the synergies with the engineering and science departments at IIT Bombay."
        body="IIT Bombay was established in 1958 with a focus on excellence in science and technology education. Over the past six decades, we have graduated around 70,000 students who have gone on to make significant contributions across various fields globally. We are deeply committed to fostering innovation, creativity, and interdisciplinary research. The Shailesh J. Mehta School of Management, established in 1995, exemplifies this commitment by providing leadership in management education."
      />
      <LeadershipMessage
        reverse
        eyebrow="Head's Message"
        name="Prof. S.V.D. Nageswara Rao"
        role="Head, SJMSOM · Fellow, IIM Ahmedabad"
        email="head.som@iitb.ac.in"
        image="/media/about/Prof-SVDN-Rao.jpg"
        quote="Since 1995, we have been committed to delivering programs — MBA, Doctoral, Executive — that are highly relevant to industry needs, taught by faculty known for excellence in research, training and consultancy."
        body="Welcome to the School of Management at IIT Bombay. Students have access to world-class databases, resources, and opportunities for interdisciplinary research. Through SINE — our entrepreneurship ecosystem — and various student-led events and clubs, we provide a comprehensive educational experience. Our alumni have achieved remarkable success in both industry and academia."
      />
      <Rankings />
      <Advisory />
      <Partnerships />
      <FooterCTA />
    </Box>
  );
}
