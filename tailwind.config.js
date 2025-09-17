/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#EEF5F1",
          100: "#D6E8DF",
          200: "#B4D5C6",
          300: "#8FC0AB",
          400: "#66A88D",
          500: "#3F8F72",
          600: "#2E775F",
          700: "#215D4C",   // forest-green (primary)
          800: "#1A493D",
          900: "#13362E",
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
