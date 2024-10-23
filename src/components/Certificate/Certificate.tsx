import Link from 'next/link'

export interface CertificateProps {
  title: string
  organization: string
  conclusionDate: string
  link: string
}

export function Certificate({ title, organization, conclusionDate, link }: CertificateProps) {
  return (
    <li data-testid='CertificateComponent'>
      <Link title='Visualizar certificado' href={link!} target='_blank' className='relative group'>
        <span className='w-[1px] h-full duration-300 group-hover:bg-primary-theme-light dark:group-hover:bg-primary-theme-dark max-h-[0%] group-hover:max-h-full transition-all absolute left-0 top-0'></span>
        <h3 className='text-heading-theme-light dark:text-heading-theme-dark font-medium leading-5 group-hover:translate-x-3 group-hover:text-primary-theme-light dark:group-hover:text-primary-theme-dark transition'>
          {title}
        </h3>
        <p className='text-sm group-hover:translate-x-3 transition duration-300'>
          {organization} | {conclusionDate}
        </p>
      </Link>
    </li>
  )
}
