import { ReactNode } from 'react'
import * as S from './Social.styles'

export type SocialItemProps = {
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
        <S.SocialItem
          key={index}
          href={social.link}
          title={social.name}
          target='_blank'
        >
          {social.icon}
        </S.SocialItem>
      ))}
    </S.Wrapper>
  )
}

export default Social
