/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF5F", // Light green
        secondary: "#000000", // Black
        accent: "#FBF8F3", // Light gray
        dark: "#171717", // Dark
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Replace with Google Font
      },
    },
  },
  plugins: [formsPlugin],
};
