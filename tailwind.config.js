/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#E9F2EE",
          100: "#CFE3DA",
          200: "#A9CEBF",
          300: "#89B8A6",
          400: "#5E9B83",
          500: "#2F7E60",
          600: "#1B5E41", // Primary CTA green
          700: "#154B34",
          800: "#0F3727",
          900: "#0A261B",
        },
      },
      fontFamily: {
        // Uses the Inter variable from app/layout.tsx ( --font-sans )
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
        },
        screens: {
          "2xl": "72rem", // ~max-w-6xl equivalent
        },
      },
    },
  },
  plugins: [],
};
