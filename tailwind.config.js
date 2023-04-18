const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./emails'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        metro: {
          black: '#1b1a1a',
          grey: '#5d5d5d',
          grey2: '#808080',
          m: '#fe7e0b',
          mb: '#e67009',
          m1: '#ffa557',
          g: '#f5f5f5',
          g2: '#e6e6e6',
          h: '#354052',
          hh: '#293240',
          input: '#495057',
          border: '#ced4da',
        },
      },
    },
  },
  plugins: [],
}
