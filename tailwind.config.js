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
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '50%': { transform: 'rotateX(180deg) rotateY(180deg) rotateZ(180deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        }
      },
      animation: {
        rotateImg: "rotateImg 4s linear infinite" 
      },
    },
  },
  plugins: [],
}

