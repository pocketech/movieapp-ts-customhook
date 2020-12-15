module.exports = {
  purge: ['./build/index.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-card': 'repeat(auto-fit, minmax(12rem, 1fr))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}