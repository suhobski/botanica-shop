import styled from "styled-components";
import { secondBackgroundColor } from "../../style/theme";

export const HeaderContainer = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  grid-column-gap: 16px;
  width: 100vw;
  padding: 8px;
  background-color: ${secondBackgroundColor};

  @media (min-width: 800px) {
    padding-right: 30px;
  }
`;
