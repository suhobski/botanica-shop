import styled from "styled-components";
import { secondBackgroundColor } from "../../style/theme";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  height: 50px;
  background-color: ${secondBackgroundColor};
`;

export const Navigation = styled.nav`
  & ul {
    display: flex;
  }
  & li {
    margin: 0 8px;
    text-transform: uppercase;
  }
`;
