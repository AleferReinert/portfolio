import Link from 'next/link'

export interface CertificateProps {
  title: string
  organization: string
  conclusionDate: string
  link: string
}

export function Certificate({
  title,
  organization,
  conclusionDate,
  link
}: CertificateProps) {
  return (
    <li>
      <Link
        title='Visualizar certificado'
        href={link!}
        target='_blank'
        className='relative group'
      >
        <span className='w-[1px] h-full duration-300 group-hover:bg-cyan-950 dark:group-hover:bg-green-400 max-h-[0%] group-hover:max-h-full transition-all absolute left-0 top-0'></span>
        <h3 className='text-cyan-950 dark:text-green-400 font-medium leading-5 group-hover:translate-x-3 transition'>
          {title}
        </h3>
        <p className='text-sm group-hover:translate-x-3 transition duration-300'>
          {organization} | {conclusionDate}
        </p>
      </Link>
    </li>
  )
}
