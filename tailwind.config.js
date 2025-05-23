/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['"Afacad Flux"', "sans-serif"],
        tagesschrift: ['"Tagesschrift"', "cursive"],
      },
    },
  },
  plugins: [],
};
