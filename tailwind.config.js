module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '30rem',
        '110': '35rem',
        '120': '40rem',
        '130': '50rem'
      },
      fontFamily: {
        tangerine: "'Tangerine', cursive",
        lora: "'lora', serif",
      },
      backgroundImage: {
        'banner': "url('images/banner.jpeg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
