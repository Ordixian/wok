import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E30613",
        dark: "#111317",
        ice: "#F4F7F9",
        slate: "#374151",
        border: "#E2E8F0",
        gold: "#FFB703",
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
    },
  },
  plugins: [],
};
export default config;
