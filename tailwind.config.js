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
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom,to right #4c1d95,to right #f9a8d4,to right #dc2626 ,to right #FFC107)",
      }
    },
  },
  plugins: [],
}

