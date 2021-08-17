import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <header className="App-header">
      <GlobalStyle />
    </header>
  </ThemeProvider>
);

export default App;
