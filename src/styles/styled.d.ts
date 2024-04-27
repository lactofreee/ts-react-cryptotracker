// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeTypes } from "./theme";

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    btnColor: string;
    btnTextColor: string;
    btnHoverColor: string;
  }
}