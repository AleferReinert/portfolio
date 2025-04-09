'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { IconType } from 'react-icons'
import { globalMotion } from 'utils/motion'

export interface SkillProps {
  title: string
  iconAction: IconType
  shortTitle?: string
  index: number
}

export function Skill({ title, iconAction, shortTitle, index }: SkillProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const Icon = iconAction

  return (
    <motion.li
      ref={ref}
      initial={{ ...globalMotion.initial.fromScale, y: 20 }}
      animate={isInView && { ...globalMotion.animate.scale, y: 0 }}
      transition={{ ...globalMotion.transition, delay: index * 0.05 }}
      data-testid='SkillComponent'
      title={shortTitle && title}
      className='group overflow-hidden aspect-94/87 sm:aspect-128/87 relative bg-black/5 dark:bg-black/25'
    >
      <Icon
        aria-hidden
        role='img'
        className='size-8 fill-heading-theme absolute left-1/2 -ml-4 top-1/2 -mt-4 -translate-y-2 group-hover:animate-wheelInIcon'
      />
      <div
        className='whitespace-nowrap text-[0.625rem] font-normal h-6 w-full text-center absolute top-1/2 
          mt-5 leading-none group-hover:animate-wheelInText group-hover:opacity-0 group-hover:-mt-2 group-hover:font-medium'
      >
        {shortTitle ?? title}
      </div>
    </motion.li>
  )
}
