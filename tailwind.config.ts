/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
          500: "#24AE7C",
          600: "#0D2A1F",
        },
        blue: {
          70: "#021639",
          500: "#79B5EC",
          600: "#152432",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        red: {
          500: "#F37877",
          600: "#3E1716",
          700: "#F24E43",
        },
        yellow: {
          50: "#FEC601",
        },
        light: {
          200: "#E8E9E9",
          300: "#f1f1f1",
        },
        dark: {
          200: "#0D0F10",
          300: "#131619",
          400: "#1A1D21",
          500: "#363A3D",
          600: "#76828D",
          700: "#ABB8C4",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
        "bg-img-1": "url('/assets/landing/journey-1.jpg')",
        "bg-img-2": "url('/assets/landing/journey-2.jpeg')",
        "bg-img-3": "url('/assets/landing/journey-3.jpeg')",
        "feature-bg": "url('/assets/landing/feature-bg.png')",
        pattern: "url('/assets/landing/pattern.png')",
        "pattern-2": "url('/assets/landing/pattern-bg.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },

      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
} satisfies Config;

export default config;
