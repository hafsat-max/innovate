import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "stat-shadow": " -10px 10px 0px 0px rgba(225,241,107,1);,",
      },

      colors: {
        primary: "#E1F16B",
        neutrals: "#1A1D1F",
        secondary: "#EFEFEF",
      },
      fontSize: {
        "16px": "clamp(14px,1vw,16px)",
        "54p": "clamp(32px,10vw,54px)",
      },
      gap: {
        "80px": "clamp(20px,5vw,80px)",
      },
      letterSpacing: {
        "5%": "5%",
      },
      lineHeight: {
        "20px": "20px",
        "76": "76px",
      },
      padding: {
        "60p": "clamp(20px,3.75vw,60px)",
        "82p": "82px",
      },
    },
  },
  plugins: [],
};
export default config;
