import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationLink = styled(Link)`
  margin-right: 12px;
  text-transform: uppercase;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;
