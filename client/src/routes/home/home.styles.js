import styled from "styled-components";
import Button from "../../components/button/Button.component";

export const Title = styled.h1`
  padding: 70px 0 30px;
  font-size: 5rem;
  font-weight: 200;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  text-align: center;
`;

export const HomeButton = styled(Button)`
  display: block;
  margin: 50px auto 0;
  padding: 10px 24px;
  text-transform: uppercase;
`;
