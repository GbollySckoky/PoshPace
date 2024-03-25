/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue:"#001F3F",
        tomato:"#C02E48",
        fadeblue:"#001F3F",
        fade:"#C6C6C6",
      }
    },
  },
  plugins: [],
}
