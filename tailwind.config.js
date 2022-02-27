const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/index.html',
    './app/templates/**/*.hbs',
    './app/components/**/*.hbs',
  ],
  theme: {
    extend: {
      fontFamily: {
        console: ['lores-12', 'sans-serif'],
        ...defaultTheme.fontFamily,
      },
    },
  },
  plugins: [],
}
