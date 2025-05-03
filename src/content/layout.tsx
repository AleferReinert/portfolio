import { SocialProps } from 'components/Footer/Footer'
import { NavMenuItemProps } from 'components/NavMenu/NavMenu'
import { about } from 'content/about'
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si'

export const menu: NavMenuItemProps[] = [
  { link: '#about', children: 'Sobre mim' },
  { link: '#projects', children: 'Projetos' },
  { link: '#skills', children: 'Habilidades' },
  { link: '#certificates', children: 'Certificados' },
  { link: '#contact', children: 'Contato' }
]

export const socials: SocialProps[] = [
  { name: 'GitHub', url: 'https://github.com/AleferReinert', icon: SiGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/AleferReinert', icon: SiLinkedin },
  { name: 'Whatsapp', url: `https://wa.me/55${about.phone}`, icon: SiWhatsapp }
]
