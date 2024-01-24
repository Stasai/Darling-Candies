/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*.html',
    './build/js/.js'
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily : {
        'cabin': ['Cabin', 'sans-serif']
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

