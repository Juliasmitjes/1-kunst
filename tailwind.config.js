/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        banana: '#FAF6E9',
        sky: '#A0C878',
        blue: '#DDEB9D',
        peach: '#5A8F4B',
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
