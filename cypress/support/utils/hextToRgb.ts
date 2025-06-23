export function hexToRgb(hex: string): string {
  const cleanedHex = hex.replace(/^#/, '')
  const normalizedHex =
    cleanedHex.length === 3
      ? cleanedHex
          .split('')
          .map((c) => c + c)
          .join('')
      : cleanedHex

  const r = parseInt(normalizedHex.slice(0, 2), 16)
  const g = parseInt(normalizedHex.slice(2, 4), 16)
  const b = parseInt(normalizedHex.slice(4, 6), 16)

  return `rgb(${r}, ${g}, ${b})`
}
