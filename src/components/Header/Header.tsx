'use client'
import { Container } from 'components/Container/Container'
import { MenuMobile } from 'components/MenuMobile/MenuMobile'
import { NavMenu, NavMenuProps } from 'components/NavMenu/NavMenu'
import { Switch } from 'components/Switch/Switch'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { useFixedHeader } from 'utils/scrollHeader'
import { globalMotion } from '../../utils/motion'

interface HeaderProps extends Pick<NavMenuProps, 'menu' | 'github'> {}

export function Header({ menu, github }: HeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const fixedHeader = useFixedHeader()

  return (
    <motion.header
      initial={{ ...globalMotion.initial.fromTop }}
      animate={{ ...globalMotion.animate.vertical }}
      transition={{ ...globalMotion.transition, delay: globalMotion.delay.header + 0.2 }}
      data-testid='header-component'
    >
      <div
        className={`
						${fixedHeader ? 'translate-y-0' : '-translate-y-full'} 
						py-2 fixed top-0 left-0 right-0 z-10 transform transition-transform duration-300
						bg-secondary-theme md:py-4
				`}
      >
        <Container fluid className='flex justify-between items-center'>
          <div className='flex h-min'>
            <Switch />
          </div>
          <div className='hidden md:flex'>
            <NavMenu menu={menu} setShowMobileMenu={setShowMobileMenu} github={github} />
          </div>
          <IoMenuOutline
            title='Abrir menu'
            role='img'
            onClick={() => setShowMobileMenu(true)}
            className='size-9 text-primary-theme cursor-pointer md:hidden'
          />
        </Container>
      </div>

      <MenuMobile menu={menu} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} github={github} />
    </motion.header>
  )
}
