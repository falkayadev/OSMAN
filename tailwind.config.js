module.exports = {
  content: [
    './*.html',
    './*.php',
  ],
  theme: {
    extend: {
      colors: {
        "red": "red"
      }
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}