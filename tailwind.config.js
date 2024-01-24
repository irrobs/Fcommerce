/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Quicksand"],
    },
    colors: {
      transparent: "transparent",
      primary: "#FF6F61",
      black: "#000000",
      white: "#ffffff",
      gray: "#E8E8E8",
      grayDark: "#716F6F",
      red: "#dc2626",
      yellow: "#FFE500",
      yellowDark: "#B1A000",
    },
  },
  plugins: [],
};
