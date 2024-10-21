import { ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
}

export function Heading({ children }: HeadingProps) {
  return (
    <h2
      data-testid='HeadingComponent'
      className='text-zinc-800 dark:text-slate-50 text-2xl leading-none font-bold uppercase pt-12 pb-2 mb-6 border-b border-zinc-800/50 dark:border-slate-200/50 md:pt-16'
    >
      {children}
    </h2>
  )
}
