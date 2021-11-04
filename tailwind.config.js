module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        tangerine: "'Tangerine', cursive",
        lora: "'lora', serif",
      },
      backgroundImage: {
        'blacks': "url('images/blacks.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
