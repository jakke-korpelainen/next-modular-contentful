/** @type {import('tailwindcss').Config} */

import tailwindTypographyPlugin from "@tailwindcss/typography";
import { fontFamily } from "tailwindcss/defaultTheme";

// Adjust to your liking, but keep in mind that changes may break the layout

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  screens: {
    sm: "576px",
    md: "960px",
    lg: "1440px",
    xl: "1920px",
    max: "2400px",
  },
  fontSize: {
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  extend: {
    colors: {
      orange: "#d54b01",
      paper: "#f5f5f5",
      heading: "#16161d",
      granite: "#141414",
      eigengrau: "#16161d",
    },
    fontFamily: {
      // Be sure to update these if you change your fonts.
      // TODO: Could these be imported from src/lib/fonts.ts? The exported font objects include a variable property.
      sans: [`var(--font-oxygen)`, ...fontFamily.sans],
      mono: [`var(--font-oxygen-mono)`, ...fontFamily.sans],
      heading: [`var(--font-raleway)`, ...fontFamily.sans],
    },
  },
};

export const plugins = [tailwindTypographyPlugin];
