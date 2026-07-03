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
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        scaleIn: "scaleIn 60000ms forwards",
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        scaleIn: {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.15)" },
        },
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
