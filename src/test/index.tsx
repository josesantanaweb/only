import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/theme";

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
