import { dark } from 'styles/themes'

type Theme = typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
