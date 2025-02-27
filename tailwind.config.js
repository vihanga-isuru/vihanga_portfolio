/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';



export default {
    content: [
      "./index.html",
      "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        }
      },
    },
    plugins: [],
  }