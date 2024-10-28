import { ComponentProps, ReactNode } from 'react'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
  fluid?: boolean
}

export function Container({ children, fluid = false, ...rest }: ContainerProps) {
  const containerStyles = `px-4 md:px-6 mx-auto ${fluid ? '' : 'max-w-screen-lg'}`

  return (
    <div {...rest} className={`${containerStyles} ${rest.className || ''}`}>
      {children}
    </div>
  )
}
