import { ComponentProps, ReactNode } from 'react'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <div {...rest} className={`mx-4 md:mx-6 ${rest.className}`}>
      {children}
    </div>
  )
}
