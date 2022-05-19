import styled from "styled-components";

export const Main = styled.main`
  padding: 8px;

  @media (min-width: 800px) {
    padding-right: 30px;
  }
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;
