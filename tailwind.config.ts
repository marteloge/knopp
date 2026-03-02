import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf7f2",
        blush: {
          50: "#fdf2f0",
          100: "#fce4df",
          200: "#f8c8be",
          300: "#f0a99a",
          400: "#e48070",
          500: "#c17f6e",
          600: "#a3654f",
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
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
