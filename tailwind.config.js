/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E9F2EE",
          100: "#CFE3DA",
          200: "#A9CEBF",
          300: "#7FB59F",
          400: "#4E9477",
          500: "#2F7D60",
          600: "#1F6B4D",
          700: "#166534",  // forest green you’ve been using
          800: "#0F4C2B",
          900: "#0B3B22"
        }
      }
    }
  },
  plugins: []
};
