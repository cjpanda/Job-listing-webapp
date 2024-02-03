/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000AFF",
        },
        secondary: "#8A8A8A",
        light: "#999999",
      },
    },
  },
  plugins: [],
};
