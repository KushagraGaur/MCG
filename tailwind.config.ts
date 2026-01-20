import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mirika: {
          forest: "#0C3B2E",
          emerald: "#1DAA6F",
          earth: "#B8C2B1",
          white: "#FFFFFF",
          softGrey: "#F5F5F7",
          charcoal: "#1D1D1F",
          graphite: "#3A3A3C",
          success: "#27C281",
          alert: "#F39C12",
          danger: "#E74C3C",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
