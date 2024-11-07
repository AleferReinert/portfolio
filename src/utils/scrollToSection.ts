// Realiza o scroll para a seção correta ao atualizar a página

export function scrollToSection() {
  const hash = window.location.hash
  const offsetTop = document.getElementById(hash.replace('#', ''))?.offsetTop
  window.scrollTo({ top: hash ? offsetTop : 0, behavior: 'instant' })
}
