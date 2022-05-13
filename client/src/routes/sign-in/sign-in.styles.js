import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingInPageWrap = styled.div`
  display: grid;
  justify-items: center;
  max-width: 350px;
  margin: 40px auto;
`;

export const SignInTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormWrap = styled.form`
  margin: 24px 0;
  max-width: 350px;
`;

export const FormFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 14px;
  margin-top: 12px;
`;

export const Text = styled.p`
  margin-top: 16px;
  font-size: 16px;
`;

export const StyledLink = styled(Link)`
  border-bottom: 1px solid #414141;
  text-transform: uppercase;

  &:hover {
    color: grey;
    border-color: grey;
  }
`;
