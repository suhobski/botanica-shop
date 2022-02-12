import styled from "styled-components";
import { backgroundColor } from "../../style/theme";

export const AppLayoutContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  background: ${backgroundColor};
`;

export const Title = styled.h1`
  padding-top: 70px;
  font-size: 5rem;
`;

export const Subtitle = styled.h3`
  font-size: 2rem;
`;
