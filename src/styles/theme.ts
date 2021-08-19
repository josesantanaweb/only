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
      regular: number;
      medium: number;
      bold: number;
      sizes: {
        bodySmall: string;
        bodyMedium: string;
        bodyLarge: string;
        button: string;
        h6: string;
        h5: string;
        h4: string;
        h3: string;
        h2: string;
        h1: string;
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
    regular: 400,
    medium: 500,
    bold: 600,
    sizes: {
      bodySmall: "12px",
      bodyMedium: "14px",
      bodyLarge: "16px",
      button: "14px",
      h6: "20px",
      h5: "22px",
      h4: "26px",
      h3: "28px",
      h2: "40px",
      h1: "54px",
    },
  },
  colors: {
    black: "#141213",
    white: "#ffffff",
    offWhite: "#F0F0F0",
    grey: "#9AB4C1",
    grey100: "#d9d9d9",
    grey200: "#bfbfbf",
    grey300: "#a6a6a6",
    grey400: "#8c8c8c",
    grey500: "#737373",
    grey600: "#595959",
    grey700: "#404040",
    grey800: "#262626",
    grey900: "#0d0d0d",
    primary: "#4D18E2",
    secondary: "#07ACEE",
    tertiary: "#1D0458",
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
};

// export const darkTheme: DefaultTheme = {};
