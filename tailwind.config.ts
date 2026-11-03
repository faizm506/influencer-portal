import type { Config } from "tailwindcss";
import { tokens } from "./src/styles/tokens";

const config: Config = {
  darkMode: "class",
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],

  theme: {
    extend: {
      colors: {
        base: tokens.colors.base,
        surface: tokens.colors.surface,
        brand: {
          violet: tokens.colors.violet,
          magenta: tokens.colors.magenta,
          amber: tokens.colors.amber,
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: { "4xl": "2rem" },
      backgroundImage: { "brand-gradient": tokens.gradient },
      boxShadow: {
        glow: "0 0 40px -8px rgba(225,48,108,0.55)",
        glass: "0 8px 32px rgba(0,0,0,0.35)",
      },
      keyframes: {
        shimmer: { "100%": { transform: "translateX(100%)" } },
        float: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-24px,0)" },
        },
        marquee: { to: { transform: "translateX(-50%)" } },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        float: "float 9s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        gradientShift: "gradientShift 6s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;