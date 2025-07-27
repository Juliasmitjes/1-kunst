/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        banana: '#FFF5CD',
        peach: '#E78F81',
        blue: '#B7E0FF',
        sky: '#748DAE',
        white: '#FFFBF5',
      },
      fontFamily: {
        pangaia: ['PP Pangaia', 'sans-serif'],  
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
