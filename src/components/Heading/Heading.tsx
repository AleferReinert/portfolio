import * as S from './Heading.styles'

export type HeadingProps = {
  children: string
}

const Heading = ({ children }: HeadingProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Heading
