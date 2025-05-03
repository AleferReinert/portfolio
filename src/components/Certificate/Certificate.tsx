'use client'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { globalMotion } from 'utils/motion'

export interface CertificateProps {
  id: string
  title: string
  organization: string
  conclusionDate: string
  url: string
  index: number
}

export function Certificate({ title, organization, conclusionDate, url, index }: CertificateProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.li
      ref={ref}
      initial={{ ...globalMotion.initial.fromBottom, y: 20 }}
      animate={isInView && { ...globalMotion.animate.vertical }}
      transition={{ ...globalMotion.transition, delay: index * 0.05 }}
      data-testid='CertificateComponent'
      className='relative'
    >
      <Link title='Visualizar certificado' href={url} target='_blank' className='relative group'>
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
    </motion.li>
  )
}
