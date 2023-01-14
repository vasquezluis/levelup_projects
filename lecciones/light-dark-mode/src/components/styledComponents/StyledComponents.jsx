import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import Switch from "./Switch";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

// styledComponent para cada tag
// con props se puede acceder al css de theme
// porque existe el ThemeProvider
const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`;

const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.title};
`;

const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

// theme
// con cambiar aqui, se cambia toda la aplicacion
const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  icon: "#b6b6b6",
};

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
  icon: "#333",
};

function StyledComponents() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  // usar themeProvider
  // user el theme como parametro

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        <Name>Luis Vasquez</Name>
        <Info>Username: luisvasquez</Info>
        <Info>Email: luivasquez95@gmail.com</Info>
      </StyledApp>
    </ThemeProvider>
  );
}

export default StyledComponents;
