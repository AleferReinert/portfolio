import { ReactNode } from 'react'
import * as S from './Social.styles'

type SocialItemProps = {
  name: string
  link: string
  icon: ReactNode
}

type SocialProps = {
  socials: SocialItemProps[]
}

const Social = ({ socials }: SocialProps) => {
  return (
    <S.Wrapper>
      {socials.map((social, index) => (
        <S.SocialItem key={index} href={social.link} title={social.name}>
          {social.icon}
        </S.SocialItem>
      ))}
    </S.Wrapper>
  )
}

export default Social
