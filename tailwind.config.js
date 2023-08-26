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
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}