import { Link } from "react-router-dom";
import styled from "styled-components";
import { secondBackgroundColor } from "../../style/theme";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  grid-column-gap: 16px;
  padding: 8px;
  height: 50px;
  background-color: ${secondBackgroundColor};

  @media (min-width: 800px) {
    padding-right: 30px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  margin-right: 12px;
  text-transform: uppercase;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
