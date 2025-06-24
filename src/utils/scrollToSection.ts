// Scroll to section with id in url hash
export function scrollToSection() {
  const hash = window.location.hash
  const offsetTop = document.getElementById(hash.replace('#', ''))?.offsetTop
  window.scrollTo({ top: hash ? offsetTop : 0, behavior: 'instant' })
}
