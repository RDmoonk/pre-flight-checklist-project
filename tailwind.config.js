/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors:{  
        'blue':'#26547C',
        'pinkishred':'#EF476F',
        'yellow':'#FFD166'
      }
      
    },
  },
  plugins: [],
}

