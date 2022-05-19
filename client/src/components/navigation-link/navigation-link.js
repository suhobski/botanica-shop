import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationLink = styled(Link)`
  margin-right: 12px;
  text-transform: uppercase;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
