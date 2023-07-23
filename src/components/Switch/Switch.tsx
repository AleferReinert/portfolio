import * as S from './Switch.styles'

type SwitchProps = {
  toggleTheme: () => void
  theme: string
}

const Switch = ({ toggleTheme, theme = 'dark' }: SwitchProps) => {
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
