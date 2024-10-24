import { IconType } from 'react-icons'

export interface SkillProps {
  title: string
  icon: IconType
  shortTitle?: string
  color?: string
}

export function Skill({ title, icon, shortTitle }: SkillProps) {
  const Icon = icon

  return (
    <li
      data-testid='SkillComponent'
      title={title}
      className='group overflow-hidden aspect-[94/87] sm:aspect-[128/87] relative bg-black bg-opacity-5 dark:bg-opacity-25'
    >
      <Icon
        aria-label={title}
        role='img'
        className='size-8 fill-heading-theme-light dark:fill-heading-theme-dark absolute left-1/2 -ml-4 top-1/2 -mt-4 
          -translate-y-2 group-hover:animate-wheelInIcon'
      />
      <div
        className='whitespace-nowrap text-[0.625rem] font-normal h-6 w-full text-center absolute top-1/2 
          mt-5 leading-none group-hover:animate-wheelInText group-hover:opacity-0 group-hover:-mt-2'
      >
        {shortTitle ?? title}
      </div>
    </li>
  )
}
