/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Quicksand"],
    },
    colors: {
      primary: "#FF6F61",
      black: "#000000",
      white: "#ffffff",
      gray: "#E8E8E8",
    },
  },
  plugins: [],
};
