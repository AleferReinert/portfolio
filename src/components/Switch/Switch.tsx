import { useEffect, useState } from 'react'

export function Switch() {
  const [theme, setTheme] = useState<'dark' | undefined>('dark')
  const isDarkTheme = theme === 'dark'

  useEffect(() => {
    const htmlTag = document.documentElement
    const themeMetaTag = document.querySelector("meta[name='theme-color']")
    const newTheme = isDarkTheme ? '#000' : '#e7e3e4'

    themeMetaTag?.setAttribute('content', newTheme)
    htmlTag.classList[isDarkTheme ? 'add' : 'remove']('dark')
  }, [isDarkTheme, theme])

  return (
    <label
      data-testid='SwitchComponent'
      className='inline-flex w-10 h-5 rounded-full relative cursor-pointer bg-zinc-600 dark:bg-slate-400'
      title={`Tema ${isDarkTheme ? 'claro' : 'escuro'}`}
      onClick={() => setTheme(isDarkTheme ? undefined : 'dark')}
    >
      <div
        className={`w-5 h-5 bg-secondary-theme border-2 border-zinc-600 dark:border-slate-400 rounded-full transform transition-transform duration-300 
					${isDarkTheme ? 'translate-x-full' : 'translate-x-0'}
				`}
      />
    </label>
  )
}
