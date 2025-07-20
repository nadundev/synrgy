import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Your custom PP Neue Montreal font as primary sans
export const ppNeueMontreal = localFont({
  src: [
    {
      path: "../fonts/ppneuemontreal-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/ppneuemontreal-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ppneuemontreal-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ppneuemontreal-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ppneuemontreal-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/ppneuemontreal-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});

// Inter as monospace font
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});
