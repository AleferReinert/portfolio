'use client'
import { Container } from 'components/Container/Container'
import { MenuMobile } from 'components/MenuMobile/MenuMobile'
import { NavMenu, NavMenuItemProps } from 'components/NavMenu/NavMenu'
import { Switch } from 'components/Switch/Switch'
import { useEffect, useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'

interface HeaderProps {
  menu: NavMenuItemProps[]
}

export function Header({ menu }: HeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [fixedHeader, setFixedHeader] = useState('fixed')

  useEffect(() => {
    let prev = window.scrollY
    const fixedHeaderOnScrollUp = () => {
      let current = window.scrollY
      prev > current ? setFixedHeader('fixed') : setFixedHeader('')
      prev = current
    }
    window.addEventListener('scroll', fixedHeaderOnScrollUp)
    return () => window.removeEventListener('scroll', fixedHeaderOnScrollUp)
  })

  return (
    <header data-testid='header-component'>
      <div
        className={`
						${fixedHeader ? 'translate-y-0' : '-translate-y-full'} 
						 py-2 fixed top-0 left-0 right-0 z-10 transform transition-transform duration-300
						bg-slate-50 dark:bg-cyan-950 md:py-4`}
      >
        <Container fluid className='flex justify-between items-center'>
          <div className='flex h-min'>
            <Switch />
          </div>
          <div className='md:hidden'>
            <IoMenuOutline
              title='Abrir menu'
              aria-label='Abrir menu'
              role='img'
              onClick={() => setShowMobileMenu(true)}
              className='size-9 text-cyan-950 dark:text-green-400 cursor-pointer'
            />
          </div>
          <div className='hidden md:flex'>
            <NavMenu menu={menu} setShowMobileMenu={setShowMobileMenu} />
          </div>
        </Container>
      </div>

      <MenuMobile menu={menu} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
    </header>
  )
}
