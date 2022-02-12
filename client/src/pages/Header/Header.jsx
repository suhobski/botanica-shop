import React from "react";
import { withTheme } from "styled-components";
import { Button } from "../../components/Button";
import { useTheme } from "../../context/ThemeContext";
import { HeaderContainer } from "./Header.styles";
import { ReactComponent as Sun } from "../../assets/images/sun.svg";
import { ReactComponent as Moon } from "../../assets/images/moon.svg";

const Header = ({ theme }) => {
  const themeToggle = useTheme();

  return (
    <HeaderContainer>
      <Button onClick={() => themeToggle.toggle()}>
        {theme.mode === "dark" ? <Moon /> : <Sun />}
      </Button>
    </HeaderContainer>
  );
};

export default withTheme(Header);
