/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'selector',
  theme: {
    extend: {
      keyframes: {
        rotateFrom180: {
          from: { transform: 'rotateY(-180deg)' },
          to: { transform: 'rotateY(0)' }
        }
      },
      animation: {
        rotateFrom180: 'rotateFrom180 .4s'
      }
    }
  },
  plugins: []
}
