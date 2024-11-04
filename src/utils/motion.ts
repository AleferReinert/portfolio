const delayInterval = 0.2 // Diferença de tempo de transição entre os primeiros elementos da página

export const globalMotion = {
  transition: {
    duration: 0.4,
    ease: 'easeOut'
  },
  delay: {
    about: {
      name: delayInterval,
      role: delayInterval * 2,
      description: delayInterval * 4
    },
    firstHeading: delayInterval * 5,
    firstProject: delayInterval * 6,
    header: delayInterval * 7
  },
  initial: {
    fromLeft: {
      opacity: 0,
      x: -100
    },
    fromRight: {
      opacity: 0,
      x: 100
    },
    fromBottom: {
      opacity: 0,
      y: 100
    },
    fromTop: {
      opacity: 0,
      y: -100
    },
    fromScale: {
      opacity: 0,
      scale: 0.8
    }
  },
  animate: {
    horizontal: {
      opacity: 1,
      x: 0
    },
    vertical: {
      opacity: 1,
      y: 0
    },
    scale: {
      opacity: 1,
      scale: 1
    }
  }
}
