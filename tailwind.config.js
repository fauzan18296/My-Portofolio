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
        "Titillium": ["Titillium Web"],
        "Gloria": ["Gloria Hallelujah", "sans-serif"]
      },
      keyframes: {
        rotateImg: {
       '0%':   { transform: 'rotateY(0deg) translateZ(120px) rotateY(0deg)' },
    '100%': { transform: 'rotateY(360deg) translateZ(120px) rotateY(-180deg)' },
        }
      },
      animation: {
        rotateImg: "rotateImg 4s linear infinite" 
      },
    },
  },
  plugins: [],
}

