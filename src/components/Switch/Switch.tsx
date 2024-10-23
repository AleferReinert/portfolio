import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

export function Switch() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const themeMetaTag = document.querySelector("meta[name='theme-color']")
    const currentColor =
      theme === 'light'
        ? fullConfig.theme.colors['secondary-theme-light']
        : fullConfig.theme.colors['secondary-theme-dark']

    themeMetaTag?.setAttribute('content', currentColor)
    document.documentElement.classList.add(theme)
  }, [theme])

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.replace(theme, newTheme)
  }

  return (
    <label
      data-testid='SwitchComponent'
      className='inline-flex w-10 h-5 rounded-full relative cursor-pointer bg-zinc-600 dark:bg-slate-400'
      title={`Tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      onClick={toggleTheme}
    >
      <div
        className={`w-5 h-5 bg-secondary-theme-light dark:bg-secondary-theme-dark border-2 border-zinc-600 dark:border-slate-400 rounded-full transform transition-transform duration-300 ${
          theme === 'light' ? 'translate-x-0' : 'translate-x-full'
        }`}
      />
    </label>
  )
}
