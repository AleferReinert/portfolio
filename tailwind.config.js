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
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        wheelInIcon: {
          '0%': { opacity: '0', transform: 'translateY(100%) scale(0.25)' },
          '45%': { opacity: '1', transform: 'translateY(0) scale(1.35)' },
          '55%': { opacity: '1', transform: 'translateY(0) scale(1.35)' },
          '100%': { opacity: '0', transform: 'translateY(-100%) scale(0.25)' }
        },
        wheelInText: {
          '0%': { opacity: '0', top: '100%', fontSize: '0.5rem' },
          '45%': { opacity: '1', top: '50%', fontSize: '1rem' },
          '55%': { opacity: '1', top: '50%', fontSize: '1rem' },
          '100%': { opacity: '0', top: '0', fontSize: '0.5rem' }
        }
      },
      animation: {
        rotateFrom180: 'rotateFrom180 .4s',
        scroll: 'scroll 2s linear infinite',
        wheelInIcon: 'wheelInIcon 2.4s infinite',
        wheelInText: 'wheelInText 2.4s infinite 1.2s'
      }
    }
  },
  plugins: []
}
