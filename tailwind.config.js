/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile": "640px",
        "tablet": "768px",
      },
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"],
        "Titillium": ["Titillium", "sans-serif"],
      }
    },
  },
  plugins: [],
}

