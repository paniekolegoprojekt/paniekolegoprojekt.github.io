import type { Config } from "tailwindcss";

import typographyPlugin from "./generate-typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.75s",
        fadeInSlow: "fadeIn 1.0s ease-out",
        slideIn: "slideIn 0.75s",
        slideOut: "slideOut 0.75s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        slideIn: {
          "0%": { left: "100%" },
          "100%": { left: "0%" },
        },
        slideOut: {
          "0%": { left: "0" },
          "100%": { left: "100%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ui-primary-blue": "#3B4D81",
        "ui-aquamarine": "#59C9A5",
        "ui-blue": "#22AED1",
        "ui-red": "#D71920",
        "ui-green": "#0C7C59",
        "ui-dark-blue": "#254B5C",
        "ui-yellow": "#FFD105",
        "ui-salmon": "#D78282",
        "ui-pink": "#FFA5AB",
        "ui-primary-grey": "#D9D9D9",
        "ui-light-grey": "#FAFAFA",
        "ui-polar": "#FEFEFE",
        "ui-dark": "#333333",
      },
    },
  },
  plugins: [typographyPlugin],
};
export default config;
