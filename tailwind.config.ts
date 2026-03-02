import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#faf7f2",
          50: "#fefdfb",
          100: "#faf7f2",
          200: "#f5efe5",
          300: "#ebe0d0",
        },
        blush: {
          50: "#fdf2f0",
          100: "#fce4df",
          200: "#f8c8be",
          300: "#f0a99a",
          400: "#e48070",
          500: "#c17f6e",
          600: "#a3654f",
          700: "#7d4a3a",
        },
        forest: {
          50: "#f0f7ee",
          100: "#dcedd8",
          200: "#b5d9ac",
          300: "#80bc74",
          400: "#52994a",
          500: "#3d7a35",
          600: "#2d5a27",
          700: "#1e3e1a",
          800: "#142b12",
          900: "#0d1d0b",
        },
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d1d7c7",
          300: "#b3bea3",
          400: "#94a37f",
          500: "#768862",
        },
        petal: {
          50: "#fef7f7",
          100: "#fdeef0",
          200: "#fbd5db",
          300: "#f7b0bb",
          400: "#f08898",
          500: "#e45e73",
        },
        warm: {
          50: "#fdf8f0",
          100: "#faefd9",
          200: "#f5dcb0",
          300: "#edc47e",
          400: "#e4a94d",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "float-reverse": "float-reverse 10s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-up-delay": "fade-in-up 0.8s ease-out 0.2s forwards",
        "fade-in-up-delay-2": "fade-in-up 0.8s ease-out 0.4s forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "sway": "sway 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(-3deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "sway": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-forest": "0 0 40px -10px rgba(61, 122, 53, 0.3)",
        "glow-blush": "0 0 40px -10px rgba(224, 128, 112, 0.3)",
        "soft": "0 2px 20px -4px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 4px 30px -6px rgba(0, 0, 0, 0.08)",
        "inner-glow": "inset 0 1px 4px 0 rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
