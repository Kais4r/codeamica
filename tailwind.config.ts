import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: "50px",
      h2: "35px",
      h3: "30px",
      base: "24px",
      base2: "22px",

      h1_mb: "40px",
      h2_mb: "28px",
      h3_mb: "23px",
      base_mb: "18px",
      base2_mb: "16px",
    },
    colors: {
      Black: "#000000",
      White: "#FFFFFF",
      OuterSpace: {
        0: "#30353b",
        10: "#45494f",
        20: "#595d62",
        30: "#6e7276",
        40: "#838689",
        50: "#989a9d",
        60: "#acaeb1",
        70: "#c1c2c4",
        80: "#d6d7d8",
        90: "#eaebeb",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
