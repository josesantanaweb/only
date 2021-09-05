import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import Icon from "./components/Icon";
import "./assets/css/fonts.css";

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <header className="App-header">
      <GlobalStyle />
      <Icon name="home" size="small" colorIcon="red" />
      <Icon name="search" size="medium" />
      <Icon name="profile" size="large" />
      <h1>Hola</h1>
    </header>
  </ThemeProvider>
);

export default App;
