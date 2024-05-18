import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// estou sobrescrevendo a tipagem por ter importado o style-componentes
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
