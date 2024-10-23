import { ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
}

export function Heading({ children }: HeadingProps) {
  return (
    <h2
      data-testid='HeadingComponent'
      className='text-primary-theme-light dark:text-primary-theme-dark text-2xl leading-none font-bold uppercase pt-12 pb-2 mb-6 border-b border-paragraph-theme-light dark:border-paragraph-theme-dark md:pt-16'
    >
      {children}
    </h2>
  )
}
