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
        fadeIn: "fadeIn 0.5s ease-out",
        slideIn: "slideIn 300ms ease-in-out",
        hideOut: "hideOut 1.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { backgroundOpacity: "0" },
          "100%": { backgroundOpacity: "100" },
        },
        slideIn: {
          "0%": { top: "150%" },
          "100%": { top: "50%" },
        },
        hideOut: {
          "0%": { display: "inherit" },
          "99%": { display: "inherit" },
          "100%": { display: "none" },
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
