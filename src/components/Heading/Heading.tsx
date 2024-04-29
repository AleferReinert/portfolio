import * as S from './Heading.styles'

export interface HeadingProps {
  children: string
}

const Heading = ({ children }: HeadingProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Heading
