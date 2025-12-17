import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        foreground: "#ffffff",
        "champagne-gold": {
          DEFAULT: "#D4AF37",
          light: "#F5E6D3",
          dark: "#B8941F",
        },
        "matte-black": "#1a1a1a",
      },
      fontFamily: {
        serif: ["Space Grotesk", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#ffffff",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

