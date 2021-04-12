module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#F2EEE4',
      'secondary': '#F8F6F1',
      'tertiary': '#BCB4A3',
      'white': '#EEEEEE',
      'black': '#000000',
      'pink': '#f472b6',
      'grey': "#333333",
      'light-grey': "#9A9A9A",
      'true-white': "#FFFFFF"
    },
    fontFamily: {
      heading: ['Playfair Display SC', 'serif'],
      body: ['Montserrat', 'sans-serif']
    },
    extend: {
      spacing: {
        '170': '170px',
        'half': '50%'
      },
      width: {
        '300': '300px',
        '960': '960px',
        '90-p': '90%',
        '10-p': '10%'
      },
      height: {
        '90-p': '90%',
        '700': '700px'
      },
      fontSize: {
        '17': '17px'
      },
      maxWidth: {
        '300': '300px',
        '360': '360px',
        '920': '920px',
      },
      padding: {
        '2px': '2px',
        '5-p': '5%'
      },
      margin: {
        '5-p': '5%',
        '4/5': '80%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.6666666667%'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
