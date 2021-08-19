import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../src/styles/global";
import { lightTheme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
];
