import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

// Definir cores dos temas aqui
export const themes = {
  light: {
    primary: colors.cyan[950],
    secondary: colors.slate[50],
    heading: colors.slate[800],
    paragraph: colors.slate[700]
  },
  dark: {
    primary: colors.green[400],
    secondary: colors.cyan[950],
    heading: colors.slate[50],
    paragraph: colors.slate[300]
  }
}

export default {
  content: ['./src/**/*.tsx'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary-theme': 'var(--primary-theme)',
        'secondary-theme': 'var(--secondary-theme)',
        'heading-theme': 'var(--heading-theme)',
        'paragraph-theme': 'var(--paragraph-theme)'
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
          '0%': { opacity: '0', top: '90%', transform: 'scale(0.25)' },
          '35%': { opacity: '1', top: '50%', transform: 'scale(1.35)' },
          '50%': { opacity: '1', top: '50%', transform: 'scale(1.35)' },
          '100%': { opacity: '0', top: '10%', transform: 'scale(0.25)' }
        },
        wheelInText: {
          '0%': { opacity: '0', top: '90%', fontSize: '0.5rem' },
          '35%': { opacity: '1', top: '50%', fontSize: '1rem' },
          '50%': { opacity: '1', top: '50%', fontSize: '1rem' },
          '100%': { opacity: '0', top: '10%', fontSize: '0.5rem' }
        }
      },
      animation: {
        rotateFrom180: 'rotateFrom180 .4s',
        scroll: 'scroll 2s linear infinite',
        wheelInIcon: 'wheelInIcon 2s infinite',
        wheelInText: 'wheelInText 2s infinite 1s'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--primary-theme': themes.light.primary,
          '--secondary-theme': themes.light.secondary,
          '--heading-theme': themes.light.heading,
          '--paragraph-theme': themes.light.paragraph
        },
        '.dark': {
          '--primary-theme': themes.dark.primary,
          '--secondary-theme': themes.dark.secondary,
          '--heading-theme': themes.dark.heading,
          '--paragraph-theme': themes.dark.paragraph
        }
      })
    })
  ]
} satisfies Config
