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
      },
      fontFamily: {
        pangaia: ['PP Pangaia', 'sans-serif'],
        disco: ['DISCO', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
