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
        primary: "#0095f6",
      },
      screens: {
        xs: "360px",
      },
      boxShadow: {
        search_shadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        main_shadow: "0px 1px 2px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
