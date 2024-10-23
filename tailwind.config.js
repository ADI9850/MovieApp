/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/component/*.js",],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

