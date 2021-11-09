module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand":'#FF5A5F'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
