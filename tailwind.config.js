/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#E9F2EE",
          100: "#CFE3DA",
          200: "#A9CEBF",
          300: "#8AB7A7",
          400: "#5E9B87",
          500: "#377C69",   // primary forest green
          600: "#2E6C5B",
          700: "#245447",
          800: "#1B3E34",
          900: "#132B24",
        },
      },
      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
