'use client'
import { motion, useInView } from 'framer-motion'
import { ComponentProps, ReactNode, isValidElement, useEffect, useRef, useState } from 'react'
import { globalMotion } from 'utils/motion'

export interface HeadingProps extends ComponentProps<'h2'> {
  children: ReactNode
}

export function Heading({ children }: HeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isFirst, setIsFirst] = useState(false)

  // Verifica se é o primeiro componente da página (Projetos) para tratar animação
  useEffect(() => {
    if (isValidElement(children)) {
      setIsFirst(children.props.children[0] === 'Projetos')
    }
  }, [children])

  return (
    <>
      <h2 className='text-2xl leading-none font-bold overflow-hidden uppercase pt-12 pb-2 text-primary-theme md:pt-16'>
        <motion.div
          data-testid='HeadingComponent'
          ref={ref}
          initial={{ ...globalMotion.initial.fromBottom }}
          animate={isInView ? { ...globalMotion.animate.vertical } : {}}
          transition={{ ...globalMotion.transition, delay: isFirst ? globalMotion.delay.firstHeading : 0 }}
        >
          {children}
        </motion.div>
      </h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, maxWidth: 0 }}
        animate={isInView ? { opacity: 1, maxWidth: '100%' } : {}}
        transition={{ ...globalMotion.transition, delay: isFirst ? globalMotion.delay.firstHeading : 0 }}
        className='h-[1px] bg-paragraph-theme mb-6'
      />
    </>
  )
}
