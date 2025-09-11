/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
-    extend: {}
+    extend: {
+      colors: {
+        brand: {
+          50:"#E9F2EE",100:"#CFE3DA",200:"#A9CEBF",300:"#7CB59E",
+          400:"#4F9B7D",500:"#2F8265",600:"#226C53",700:"#185542",
+          800:"#123F31",900:"#0F3D2E"
+        },
+        wood: {
+          50:"#F3EFE7",100:"#EAE1D1",200:"#E1D5C1",300:"#D3C2A4",
+          400:"#BEA177",500:"#A3763A",600:"#8A5F2F",700:"#6E4E2E",
+          800:"#4E3821",900:"#3E2C1A"
+        }
+      }
+    }
  },
  plugins: [],
};
