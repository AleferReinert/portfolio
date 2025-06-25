const delayInterval = 0.2 // Diferença de tempo de transição entre os primeiros elementos da página
const isStorybook = process.env.STORYBOOK

export const globalMotion = {
  transition: {
    duration: 0.4,
    ease: 'easeOut'
  },
  delay: {
    about: {
      firstLine: delayInterval * 2,
      name: 0,
      role: delayInterval * 1,
      curriculumUrl: delayInterval * 3,
      description: 0
    },
    firstHeading: delayInterval * 2,
    firstProject: delayInterval * 2,
    header: delayInterval * 2
  },
  initial: {
    fromLeft: isStorybook
      ? {}
      : {
          opacity: 0,
          x: -100
        },
    fromRight: isStorybook
      ? {}
      : {
          opacity: 0,
          x: 100
        },
    fromBottom: isStorybook
      ? {}
      : {
          opacity: 0,
          y: 100
        },
    fromTop: isStorybook
      ? {}
      : {
          opacity: 0,
          y: -100
        },
    fromScale: isStorybook
      ? {}
      : {
          opacity: 0,
          scale: 0.8
        },
    maxWidth: isStorybook
      ? {}
      : {
          opacity: 0,
          maxWidth: 0
        },
    opacity: isStorybook
      ? {}
      : {
          opacity: 0
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
    },
    maxWidth: {
      opacity: 1,
      maxWidth: '100%'
    },
    opacity: {
      opacity: 1
    }
  }
}
