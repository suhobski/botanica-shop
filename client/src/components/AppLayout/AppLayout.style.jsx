import styled from "styled-components";
import { backgroundColor } from "../../style/theme";

export const AppLayoutContainer = styled.div`
  min-height: 100vh;
  background: ${backgroundColor};
`;

export const Main = styled.main`
  padding: 8px;

  @media (min-width: 1000px) {
    padding-right: 22px;
  }
`;
