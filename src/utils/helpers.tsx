export const pxToNumber = (numberWithPx: string) => {
  return Number(numberWithPx.replace('px', ''))
}

export const hexToRGB = (hexCode: string) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgb(${r}, ${g}, ${b})`
}

// Scripts only media queries passed
export const jsMediaQuery = {
  lessThan: (breakpoint: string, myFunction: () => void) => {
    if (innerWidth < pxToNumber(breakpoint)) {
      myFunction()
    }
  },
  greaterThan: (breakpoint: string, myFunction: () => void) => {
    if (innerWidth >= pxToNumber(breakpoint)) {
      myFunction()
    }
  }
}
