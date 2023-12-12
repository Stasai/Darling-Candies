/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/build/img/candy-hero.jpg')",
      },
    },
  },
  plugins: [],
}

