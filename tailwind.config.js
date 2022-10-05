/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "richblack": "#070707",
        "royalpurple": "#7B4B94",
        "white": "#FFFFFF",
        "emerald": "#44CF6C",
        "middlepurple": "#7D82B8",
      },
      backgroundImage: {
        'footer-texture': "url(/src/image/layered-waves-bg.svg)"
      },
      dropShadow: {
        'footer-shadow': "0px -12px 23px rgba(0, 0, 0, 0.4)"
      }
    },
  },
  plugins: [],
}
