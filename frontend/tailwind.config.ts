import type { Config } from "tailwindcss";
import { blackA, green, mauve, violet } from "@radix-ui/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        600: '600px',
      },
      colors: {
				...blackA,
				...green,
				...mauve,
				...violet,
			},
    },
  },
  plugins: [],
};
export default config;
