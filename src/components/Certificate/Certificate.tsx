import Link from 'next/link'

export interface CertificateProps {
  title: string
  organization: string
  conclusionDate: string
  link: string
}

export function Certificate({ title, organization, conclusionDate, link }: CertificateProps) {
  return (
    <li data-testid='CertificateComponent' className='relative'>
      <Link title='Visualizar certificado' href={link!} target='_blank' className='relative group'>
        <span
          className='
						w-[1px] h-full duration-300 max-h-[0%] transition-all absolute left-0 top-0
						group-hover:bg-primary-theme group-hover:max-h-full
					'
        ></span>
        <h3 className='text-heading-theme font-medium leading-5 group-hover:translate-x-3 group-hover:text-primary-theme transition'>
          {title}
        </h3>
        <p className='text-sm group-hover:translate-x-3 transition duration-300'>
          {organization} | {conclusionDate}
        </p>
      </Link>
    </li>
  )
}
