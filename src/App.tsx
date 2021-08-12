import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";

import Button from "./components/Button";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <header className="App-header">
      <GlobalStyle />
      <Button width={100} />
    </header>
  </ThemeProvider>
);

export default App;
