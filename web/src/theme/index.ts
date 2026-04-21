import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Inter", "SF Pro Display", -apple-system, system-ui, sans-serif`,
    body: `"Inter", "SF Pro Text", -apple-system, system-ui, sans-serif`,
    mono: `"JetBrains Mono", ui-monospace, monospace`,
  },
  colors: {
    brand: {
      ink: "#05070A",
      obsidian: "#0A0D12",
      graphite: "#12161D",
      steel: "#2A313B",
      mist: "#8A94A6",
      chalk: "#E8ECF2",
      iitRed: "#D63638",
      iitBlue: "#1E5FFF",
      gold: "#C9A96E",
    },
  },
  styles: {
    global: {
      "html, body": {
        background: "#05070A",
        color: "#E8ECF2",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        fontFeatureSettings: '"ss01","cv11"',
      },
      "::selection": { background: "#1E5FFF", color: "white" },
    },
  },
  components: {
    Button: {
      baseStyle: { fontWeight: 600, borderRadius: "full", letterSpacing: "0.01em" },
    },
    Heading: {
      baseStyle: { letterSpacing: "-0.03em", fontWeight: 600 },
    },
  },
});

export default theme;
