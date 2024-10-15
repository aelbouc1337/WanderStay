/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16325B",
        secondary: "#227B94",
        third: "#78B7D0",
        beige: "#FFDC7F",
      },
    },
  },
  plugins: [],
};
