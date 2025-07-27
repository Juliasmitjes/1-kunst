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
        sky: '#748DAE',
      },
      fontFamily: {
        pangaia: ['PP Pangaia', 'sans-serif'],  
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
