import Image from 'next/image'
import * as S from './Skill.styles'

type SkillProps = {
  title: string
  img: string
}

const Skill = ({ title, img }: SkillProps) => {
  return (
    <S.Wrapper title={title}>
      <S.IconWrapper>
        <Image src={img} alt={title} fill />
      </S.IconWrapper>
    </S.Wrapper>
  )
}

export default Skill
