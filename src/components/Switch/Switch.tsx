import { useState } from 'react'
import * as S from './Switch.styles'

const Switch = () => {
  const [theme, setTheme] = useState('darkTheme')

  function toggleTheme() {
    if (theme === 'darkTheme') {
      document.body.classList.add('lightTheme')
      setTheme('lightTheme')
    } else {
      document.body.classList.remove('lightTheme')
      setTheme('darkTheme')
    }
  }
  return (
    <S.Wrapper title={`Tema ${theme === 'darkTheme' ? 'claro' : 'escuro'}`}>
      <input
        type='checkbox'
        onChange={toggleTheme}
        checked={theme === 'darkTheme'}
      />
      <S.Handle />
    </S.Wrapper>
  )
}

export default Switch
