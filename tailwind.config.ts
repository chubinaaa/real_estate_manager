import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryWhite: "#F3F3F3",
        primaryRed: "#F93B1D",
        secondaryRed: "#DF3014",
        primaryGray: "#808A93",
        secondaryGray: "#02152680",
        thirdGray: "#DBDBDB",
        primaryBlack: "#021526",
        secondaryBlack: "#354451",
      },
      maxWidth: {
        customMax: "1596px"
      }
    },
  },
  plugins: [],
};
export default config;
