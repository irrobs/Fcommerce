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
      primary: {
        light: "#FF7D71",
        DEFAULT: "#FF6F61",
        dark: "#CC594E",
      },
      black: "#000000",
      blackTint: "#1c1917",
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
