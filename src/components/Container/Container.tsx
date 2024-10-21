import { ComponentProps, ReactNode } from 'react'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
  fluid?: boolean
}

export function Container({
  children,
  fluid = false,
  ...rest
}: ContainerProps) {
  const fluidStyles = fluid ? '' : 'max-w-screen-lg'
  const classes = rest.className ? rest.className : ''

  return (
    <div {...rest} className={`px-4 md:px-6 mx-auto ${fluidStyles} ${classes}`}>
      {children}
    </div>
  )
}
