import {  Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"PT Serif"', 'serif'],
      },
    },
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
};

export default config;
