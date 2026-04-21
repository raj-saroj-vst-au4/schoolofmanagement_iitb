import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "SJMSOM — Management, Engineered at IIT Bombay",
  description:
    "The Shailesh J. Mehta School of Management at IIT Bombay. Where engineering precision meets business storytelling.",
  metadataBase: new URL("https://som.iitb.ac.in"),
  openGraph: {
    title: "SJMSOM — Management, Engineered at IIT Bombay",
    description: "MBA, EMBA, PhD and Executive Education at India's premier institute of technology.",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 624 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
