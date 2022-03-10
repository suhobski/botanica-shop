import React from "react";
import { withTheme } from "styled-components";
import { Button } from "../../components/Button";
import { useTheme } from "../../context/ThemeContext";
import { ReactComponent as Sun } from "../../assets/images/sun.svg";
import { ReactComponent as Moon } from "../../assets/images/moon.svg";
import { Link } from "react-router-dom";
import { HeaderContainer, Navigation } from "./Header.styles";

const Header = ({ theme }) => {
  const themeToggle = useTheme();

  return (
    <HeaderContainer>
      <Link to="/">
        <h2>Botanica</h2>
      </Link>
      <Navigation>
        <ul>
          <li>
            <Link to="catalog">Каталог</Link>
          </li>
          <li>
            <Link to="about-us">О нас</Link>
          </li>
        </ul>
      </Navigation>
      <Button onClick={() => themeToggle.toggle()}>
        {theme.mode === "dark" ? <Moon /> : <Sun />}
      </Button>
    </HeaderContainer>
  );
};

export default withTheme(Header);
