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
      className='flex flex-col items-center gap-2 bg-black bg-opacity-5 dark:bg-opacity-25 p-4'
    >
      <Icon aria-label={title} role='img' className='size-8 fill-black/90 dark:fill-slate-50' />
      <span className='text-[10px] font-normal'>{shortTitle ?? title}</span>
    </li>
  )
}
