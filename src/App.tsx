import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";

import Avatar from "./components/Avatar";
import GlobalStyle from "./styles/global";

// import avatar from "./assets/img/avatar.png";

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <header className="App-header">
      <GlobalStyle />
      <Avatar name="Margot" />
    </header>
  </ThemeProvider>
);

export default App;
