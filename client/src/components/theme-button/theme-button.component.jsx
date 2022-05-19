import React from "react";
import { withTheme } from "styled-components";

import { ReactComponent as Moon } from "../../assets/images/moon.svg";
import { ReactComponent as Sun } from "../../assets/images/sun.svg";
import { useTheme } from "../../context/ThemeContext";

import ThemeButtonStyles from "./theme-button.styles";

const ThemeButton = ({ theme }) => {
  const themeToggle = useTheme();

  return (
    <ThemeButtonStyles onClick={() => themeToggle.toggle()}>
      {theme.mode === "dark" ? <Moon /> : <Sun />}
    </ThemeButtonStyles>
  );
};

export default withTheme(ThemeButton);
