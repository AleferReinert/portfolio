export interface AboutProps {
  name: string
  role: string
  description: string
  email: string
  phone: string
}

export function About({
  name,
  role,
  description
}: Omit<AboutProps, 'email' | 'phone'>) {
  return (
    <>
      <div className='pt-20 mb-8 md:mb-12 md:pt-28'>
        <div className='text-xl leading-6 font-light text-zinc-800 dark:text-slate-200'>
          Olá, meu nome é
        </div>
        <h1 className='flex flex-col'>
          <span className='text-[2.75rem] text-cyan-950 dark:text-slate-200 font-black leading-snug md:text-6xl'>
            {name}
          </span>
          <span className=' dark:text-green-400 text-lg font-bold md:text-xl'>
            {role}
          </span>
        </h1>
      </div>
      <h2 className='hidden text-xl font-bold text-zinc-800 dark:text-slate-200 text-center md:block'>
        Sobre mim
      </h2>
      <p
        className='
					[&>span>strong]:inline [&>span>strong]:text-cyan-950 dark:[&>span>strong]:text-green-400 [&>span>strong]:font-medium
					md:text-center md:max-w-[800px] md:mt-2 md:mx-auto
					md:[&>span]:block md:[&>span+br]:hidden
				'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  )
}
