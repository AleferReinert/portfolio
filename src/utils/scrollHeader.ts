import { useEffect, useState } from 'react'

export const useFixedHeader = () => {
  const [fixedHeader, setFixedHeader] = useState('fixed')

  useEffect(() => {
    if (window.scrollY === 0) {
      setFixedHeader('fixed')
    }
    let prev = window.scrollY
    const fixedHeaderOnScrollUp = () => {
      const current = window.scrollY
      setFixedHeader(prev > current ? 'fixed' : '')
      prev = current
    }

    window.addEventListener('scroll', fixedHeaderOnScrollUp)
    return () => window.removeEventListener('scroll', fixedHeaderOnScrollUp)
  }, [fixedHeader])
  return fixedHeader
}
