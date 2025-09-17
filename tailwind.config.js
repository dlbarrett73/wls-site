/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // safe if you also use /pages
    "./src/**/*.{js,ts,jsx,tsx,mdx}",     // safe if you ever move code into /src
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#EEF5F1",100:"#D6E8DF",200:"#B4D5C6",300:"#8FC0AB",
          400:"#66A88D",500:"#3F8F72",600:"#2E775F",700:"#215D4C",
          800:"#1A493D",900:"#13362E",
        },
      },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};
