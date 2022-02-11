import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      mainPurple: string;
      lightPurple: string;
      darkGrey: string;
      backgroundGray: string;
      mediumGrey: string;
      dimmGray: string;
      black: string;
      white: string;
    };
    shadow: string;
    border: {
      radius: string;
    };
    fontSize: {
      xsmall: string;
      small: string;
      original: string;
      medium: string;
    };
    fontWeight: {
      normal: number;
      bolder: number;
      bold: number;
    };
  }
}
