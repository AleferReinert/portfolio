import { useEffect, useState } from 'react'
import * as S from './Switch.styles'

const Switch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    document.body.classList.add(theme)
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    document.body.classList.replace(theme, newTheme)
  }

  return (
    <S.Wrapper title={`Tema ${theme === 'dark' ? 'claro' : 'escuro'}`}>
      <input
        type='checkbox'
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <S.Handle />
    </S.Wrapper>
  )
}

export default Switch
