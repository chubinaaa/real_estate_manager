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
        fourthGray: "rgba(2, 21, 38, 0.5)",
        primaryBlack: "#021526",
        secondaryBlack: "#354451",
        primaryGreen: "#45A849"
      },
      maxWidth: {
        customMax: "1596px"
      },
      boxShadow: {
        'custom': '5px 5px 12px 0px rgba(2, 21, 38, 0.078)',
      },
    },
  },
  plugins: [],
};
export default config;
