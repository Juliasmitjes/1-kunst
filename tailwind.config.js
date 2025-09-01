/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        banana: '#f8f8f6',
        sky: '#9aaa91',
        blue: '#e1e8d0',
        peach: '#86977f',
        white: '#FFFDF6',
      },
      fontFamily: {
        pangaia: ['PF Agora Sans Pro Medium', 'sans-serif'],  
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
