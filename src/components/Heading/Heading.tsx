'use client'
import { motion, useInView } from 'framer-motion'
import { ComponentProps, ReactElement, ReactNode, isValidElement, useEffect, useRef, useState } from 'react'
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
      const element = children as ReactElement<{ children: ReactNode[] }>
      if (Array.isArray(element.props.children) && typeof element.props.children[0] === 'string') {
        setIsFirst(element.props.children[0] === 'Projetos')
      }
    }
  }, [children])

  return (
    <>
      <h2 className='text-2xl leading-none font-bold overflow-hidden uppercase pb-2 text-primary-theme'>
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
        initial={{ ...globalMotion.initial.maxWidth }}
        animate={isInView ? { ...globalMotion.animate.maxWidth } : {}}
        transition={{ ...globalMotion.transition, delay: isFirst ? globalMotion.delay.firstHeading : 0 }}
        className='h-[1px] bg-paragraph-theme mb-6'
      />
    </>
  )
}
