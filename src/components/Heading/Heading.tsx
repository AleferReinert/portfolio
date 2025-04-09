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
    <>
      <h2 className='text-2xl leading-none font-bold overflow-hidden uppercase pb-2 text-primary-theme'>
        <motion.div
          data-testid='HeadingComponent'
          ref={ref}
          initial={{ ...initial.fromBottom }}
          animate={isInView ? { ...animate.vertical } : {}}
          transition={{ ...transition, delay: isFirst ? delay.firstHeading : 0 }}
        >
          {children}
        </motion.div>
      </h2>
      <motion.div
        ref={ref}
        initial={{ ...initial.maxWidth }}
        animate={isInView ? { ...animate.maxWidth } : {}}
        transition={{ ...transition, delay: isFirst ? delay.firstHeading : 0 }}
        className='h-[1px] bg-paragraph-theme mb-6'
      />
    </>
  )
}
