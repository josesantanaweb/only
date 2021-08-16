import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line no-shadow
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      radius: string;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      semibold: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        huge: string;
      };
    };
    colors: {
      white: string;
      offWhite: string;
      grey: string;
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      grey500: string;
      grey600: string;
      grey700: string;
      grey800: string;
      grey900: string;
      black: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    transition: {
      default: string;
      fast: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "0.4rem",
  },
  font: {
    family: "Poppins,'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
    sizes: {
      xsmall: "1rem",
      small: "1.2rem",
      medium: "1.4rem",
      large: "1.6rem",
      xlarge: "1.8rem",
      xxlarge: "2.2rem",
      xxxlarge: "2.5rem",
      huge: "5.2rem",
    },
  },
  colors: {
    white: "#ffffff",
    offWhite: "#F0F0F0",
    grey: "#a6a6a6",
    grey100: "#d9d9d9",
    grey200: "#bfbfbf",
    grey300: "#a6a6a6",
    grey400: "#8c8c8c",
    grey500: "#737373",
    grey600: "#595959",
    grey700: "#404040",
    grey800: "#262626",
    grey900: "#0d0d0d",
    black: "#141213",
    primary: "#07ACEE",
    secondary: "#0E024E",
    tertiary: "#9AB4C1",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
};

// export const darkTheme: DefaultTheme = {};
