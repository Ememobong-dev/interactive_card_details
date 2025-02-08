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
      "startingGradient": "hsl(249, 99%, 64%)",
      "endingGradient": "hsl(278, 94%, 30%)",
      },
      fontFamily: {
        "sp-reg" : ["space-grotesk-regular", "sans-serif"],
        "sp-bold" : ["space-grotesk-bold", "sans-serif"],
        "sp-light" : ["space-grotesk-light", "sans-serif"],
        "sp-semibold" : ["space-grotesk-semibold", "sans-serif"],
        "sp-medium" : ["space-grotesk-medium", "sans-serif"],

      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, hsl(278, 68%, 11%) 20%, #78350f 40%, hsl(220, 20%, 45%) 56%, hsl(278, 68%, 11%) 60%)",

        'card-gradient': 'linear-gradient(135deg, hsl(249, 99%, 64%) 30%, #78350f 50%, #EC4899 70%, hsl(278, 94%, 30%) 90%)',

        'card-gradient2': 'linear-gradient(135deg, hsl(249, 99%, 64%) 30%, #78350f 60%, #EC4899 76%, hsl(278, 94%, 30%) 100%)',
      },
    
    },
  },
  plugins: [],
} satisfies Config;
