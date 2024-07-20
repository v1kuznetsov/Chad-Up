import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768",
      lg: "960",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrainsMono)"],
      },
    },
  },
  plugins: [],
};
export default config;
