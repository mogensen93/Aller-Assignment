module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#F2EEE4',
      'secondary': '#F8F6F1',
      'tertiary': '#BCB4A3',
      'white': '#EEEEEE',
      'black': '#000000'
    },
    fontFamily: {
      heading: ['Playfair Display SC', 'serif'],
      body: ['Montserrat', 'sans-serif']
    },
    extend: {
      spacing: {
        '170': '170px',
      },
      width: {
        '960': '960px',
      },
      fontSize: {
        '17': '17px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
