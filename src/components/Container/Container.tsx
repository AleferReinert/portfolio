import { ReactNode } from 'react'
import * as S from './Container.styles'

type ContainerProps = {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Container
