import { useEffect, useState } from 'react'
import twColors from 'tailwindcss/colors'

export function Switch() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const themeMetaTag = document.querySelector("meta[name='theme-color']")
    const currentColor =
      theme === 'light' ? twColors.neutral[100] : twColors.cyan[950]

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
        className={`w-5 h-5 bg-slate-100 dark:bg-cyan-950 border-2 border-zinc-600 dark:border-slate-400 rounded-full transform transition-transform duration-300 ${
          theme === 'light' ? 'translate-x-0' : 'translate-x-full'
        }`}
      />
    </label>
  )
}
