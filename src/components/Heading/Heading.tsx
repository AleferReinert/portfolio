import { ComponentProps, ReactNode } from 'react'

export interface HeadingProps extends ComponentProps<'h2'> {
  children: ReactNode
}

export function Heading({ children, ...rest }: HeadingProps) {
  return (
    <h2
      {...rest}
      data-testid='HeadingComponent'
      className={`text-primary-theme-light dark:text-primary-theme-dark text-2xl leading-none font-bold uppercase pt-12 pb-2 mb-6 border-b border-paragraph-theme-light dark:border-paragraph-theme-dark md:pt-16
					${rest.className}
				`}
    >
      {children}
    </h2>
  )
}
