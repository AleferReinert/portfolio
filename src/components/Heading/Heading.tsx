export interface HeadingProps {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return (
    <h2 className='text-zinc-800 dark:text-slate-200 text-2xl leading-none font-bold uppercase pb-2 mb-6 border-b border-zinc-800/50 dark:border-slate-200/50'>
      {children}
    </h2>
  )
}
