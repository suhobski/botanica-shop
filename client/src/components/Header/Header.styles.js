import { Link } from "react-router-dom";
import styled from "styled-components";
import { secondBackgroundColor } from "../../style/theme";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 50px;
  background-color: ${secondBackgroundColor};

  @media (min-width: 1000px) {
    padding-right: 22px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  margin: 8px;
  text-transform: uppercase;
  cursor: pointer;
`;
