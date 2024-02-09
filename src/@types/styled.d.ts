import 'styled-components';
import theme from '../Theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}