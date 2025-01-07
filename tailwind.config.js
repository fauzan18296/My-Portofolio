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
        "Cardo": ["Cardo", "sans-serif"],
      },
    },
  },
  plugins: [],
}

