'use client'
import { motion, useInView } from 'framer-motion'
import { ComponentProps, ReactNode, useRef } from 'react'
import { globalMotion } from 'utils/motion'

export interface HeadingProps extends ComponentProps<'h2'> {
  children: ReactNode
  isFirst?: boolean
}

export function Heading({ children, isFirst = false }: HeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { initial, animate, transition, delay } = globalMotion

  return (
    <h2 ref={ref} className='text-3xl leading-none font-extrabold uppercase pt-6 pb-2 mb-2 text-primary-theme'>
      <motion.div
        data-testid='HeadingComponent'
        initial={{ ...initial.fromBottom }}
        animate={isInView ? { ...animate.vertical } : {}}
        transition={{ ...transition, delay: isFirst ? delay.firstHeading : 0 }}
      >
        {children}
      </motion.div>
    </h2>
  )
}
