export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        myYellow: '#FFEE08', 
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',  
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
