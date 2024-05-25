import Clock from "./components/Clock";
import Quotes from "./components/Quotes";
import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "CabinetGrotesk-regular";
    transition: background-color 0.5s, color 0.5s;
  }
`;

const lightTheme = {
  body: "#FFE4E1",
  text: "#800000",
};

const darkTheme = {
  body: "#808090",
  text: "#DCDCDC",
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Background onClick={toggleTheme}>
        <Clock />
        <Quotes />
      </Background>
    </ThemeProvider>
  );
}

export default App;
