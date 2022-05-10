import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingInPageWrap = styled.div`
  padding: 8px 0;
`;

export const FormWrap = styled.form`
  margin: 24px 0 12px;
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
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  border-bottom: 1px solid #414141;
  text-transform: uppercase;
  font-style: italic;

  &:hover {
    color: grey;
    border-color: grey;
  }
`;
