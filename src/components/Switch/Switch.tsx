import { ThemeProps } from 'pages'
import * as S from './Switch.styles'

const Switch = ({ toggleTheme, theme }: ThemeProps) => {
  return (
    <S.Wrapper>
      <input
        type='checkbox'
        onChange={toggleTheme}
        checked={theme === 'dark'}
        title={`Alterar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      />
      <S.Handle />
    </S.Wrapper>
  )
}

export default Switch
