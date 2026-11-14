import { loadFont } from "@remotion/google-fonts/Geist";

// Geist is the website's font (src/app/layout.tsx).
const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// Mirrors the brand tokens in src/app/globals.css of the website.
export const theme = {
  font: fontFamily,
  ink: "#111827",
  body: "#4B5563",
  muted: "#6B7280",
  faint: "#9CA3AF",
  red: "#DC2626",
  redDeep: "#B91C1C",
  redPale: "#FEE2E2",
  redTint: "#FEF2F2",
  green: "#10B981",
  greenPale: "#D1FAE5",
  amber: "#F59E0B",
  field: "#F9FAFB",
  border: "#E5E7EB",
  bg: "#F8F9FB",
  white: "#FFFFFF",
};

export const FPS = 30;
