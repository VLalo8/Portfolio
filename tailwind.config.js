/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",],
    theme: {
      extend: {
        lineHeight: {
          '13' : '3.25rem',
          '18' : '4.25rem'
        }
      }
    }
}