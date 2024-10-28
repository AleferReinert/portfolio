import { NavMenu, NavMenuItemProps } from 'components/NavMenu/NavMenu'
import type { Dispatch, SetStateAction } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

export interface MenuMobileProps {
  showMobileMenu: boolean
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
  menu: NavMenuItemProps[]
}

export function MenuMobile({ showMobileMenu, setShowMobileMenu, menu }: MenuMobileProps) {
  return (
    <div
      data-testid='MenuMobileComponent'
      className={`fixed inset-0 flex justify-center items-center bg-secondary-theme z-10 pb-12 transition-opacity ease-linear delay-300 ${
        showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } md:hidden`}
    >
      <IoCloseOutline
        title='Fechar menu'
        aria-label='Fechar menu'
        role='img'
        onClick={() => setShowMobileMenu(false)}
        className='size-9 text-primary-theme cursor-pointer absolute top-2 right-4'
      />
      <NavMenu menu={menu} setShowMobileMenu={setShowMobileMenu} />
    </div>
  )
}
