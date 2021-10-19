const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './components/Markdown/Markdown-style.module.css',
    './container/**/*.js',
    './hoc/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      indigo: colors.indigo,
      kuning: '#f74f11',
      blue: '#123c80',
      white: '#ffffff',
      greyWhite: '#f5f5f7',
      green: '#39cc1f',
      red: '#b52b2b',
      black: '#000000',
      blackGray40: '#404040',
      blackGray30: '#303030',
      blackGray20: '#202020',
      greenLantern: '#08ff04',
      greenOld: '#0aa700'
    },
    height: {
      imgBlog: '30rem',
      homeBlog: '31.9rem',
      jumbotron: '37.5rem'
    },
    boxShadow: {
      medium: '0 18px 6px 0 rgba(0, 0, 0, 0.3), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
      photo: '25px 25px 8px 3px rgba(0, 0, 0, 0.3)'
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '3xl': '30px',
      '4xl': ['36px', '40px'],
      '404': ['100px', '100px'],
      'sm404': ['150px', '150px'],
      'lg404': ['230px', '230px'],
      texttron: ['42px', '64px'],
      smtexttron: ['28px', '36px'],
      mdtexttron: ['30px', '45px'],
      lgtexttron: ['36px', '50px'],

    },
    letterSpacing: {
      header: '.125em',
      widest: '.1em',
    },
    fontFamily: {
      'rubik': 'Rubik, sans-serif',
      'poppins': 'Poppins, sans-serif'
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
