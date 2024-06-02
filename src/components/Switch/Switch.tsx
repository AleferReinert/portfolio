import { useEffect, useState } from 'react'
import * as S from './Switch.styles'

const Switch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    document.body.classList.add(theme)
    updateMetaTagThemeColor()
  }, [theme])

  const updateMetaTagThemeColor = () => {
    const themeMetaTag = document.querySelector("meta[name='theme-color']")
    const rootStyle = getComputedStyle(document.body)
    const themeColor = rootStyle.getPropertyValue('--color-background').trim()

    if (themeMetaTag) {
      themeMetaTag.setAttribute('content', themeColor)
    }
  }

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    document.body.classList.replace(theme, newTheme)
  }

  return (
    <>
      <S.Wrapper title={`Tema ${theme === 'dark' ? 'claro' : 'escuro'}`}>
        <input
          type='checkbox'
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <S.Handle />
      </S.Wrapper>
    </>
  )
}

export default Switch
