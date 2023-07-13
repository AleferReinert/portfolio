import * as S from './Heading.styles'

type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return <S.Wrapper>{title}</S.Wrapper>
}

export default Heading
