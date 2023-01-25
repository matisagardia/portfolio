/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violeta': '#100f16',
        'negro': '#212121',
        'bgnav': '#26242d',
        'navborder': '#3a3745'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'markpro': ['Mark Pro', 'sans-serif']
      },
    },
  },
  plugins: [],
}