import { IconType } from 'react-icons'

export interface SkillProps {
  title: string
  icon: IconType
  shortTitle?: string
}

export function Skill({ title, icon, shortTitle }: SkillProps) {
  const Icon = icon

  return (
    <li
      data-testid='SkillComponent'
      title={title}
      className='flex flex-col items-center gap-3'
    >
      <Icon aria-hidden role='img' className='size-8' />
      <h3 className='hidden text-sm leading-none text-center lg:block'>
        {shortTitle ?? title}
      </h3>
    </li>
  )
}
