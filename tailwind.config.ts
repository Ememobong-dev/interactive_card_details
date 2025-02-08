import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      "lightGrayishViolet": "hsl(270, 3%, 87%)",
      "darkGrayishViolet": "hsl(279, 6%, 55%)",
      "veryDarkViolet": "hsl(278, 68%, 11%)",
      "RedError": "hsl(0, 100%, 66%)",

      },
    },
  },
  plugins: [],
} satisfies Config;
