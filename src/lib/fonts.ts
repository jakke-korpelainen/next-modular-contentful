import { Oxygen, Oxygen_Mono, Raleway } from "next/font/google";

/** Adjust to your liking.
 *  Remember to add the font variables to
 *  src\app\[lang]\[page]\layout.tsx and tailwind.config.js  */

export const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-raleway",
  display: "swap",
});

export const oxygen_mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oxygen-mono",
  display: "swap",
});

export const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
  display: "swap",
});
