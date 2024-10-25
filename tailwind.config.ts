import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.tsx'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // Dark Theme
        'primary-theme-dark': colors.green[400], // Default: green-400 | Cor de destaque
        'secondary-theme-dark': colors.cyan[950], // Default: cyan-950 | Cor de background (body, header e theme-color)
        'heading-theme-dark': colors.slate[50], // Default: slate-50 | Headings
        'paragraph-theme-dark': colors.slate[300], // Default: slate-300 | Textos normais

        // Light theme
        'primary-theme-light': colors.cyan[950], // Default: cyan-950
        'secondary-theme-light': colors.slate[50], // Default: slate-50
        'heading-theme-light': colors.slate[800], // Default: neutral-900
        'paragraph-theme-light': colors.slate[700] // Default: neutral-800
      },
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
} satisfies Config
