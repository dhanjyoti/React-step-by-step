/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../weather/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../weather/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../weather/src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../simple-interest/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../simple-interest/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../simple-interest/src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../show-input/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../show-input/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../show-input/src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
