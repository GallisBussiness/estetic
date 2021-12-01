module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '30rem',
        '110': '35rem',
        '120': '40rem',
      },
      fontFamily: {
        tangerine: "'Tangerine', cursive",
        lora: "'lora', serif",
      },
      backgroundImage: {
        'blacks': "url('images/blacks.jpg')",
        'banner': "url('images/image2.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
