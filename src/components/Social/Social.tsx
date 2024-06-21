import { ReactNode } from 'react'
import * as S from './Social.styles'

export interface SocialItemProps {
  name: string
  link: string
  icon: ReactNode
}

interface SocialProps {
  socials: SocialItemProps[]
}

const Social = ({ socials }: SocialProps) => {
  return (
    <S.Wrapper data-testid='social-component'>
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
