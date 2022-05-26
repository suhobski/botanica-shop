import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationLink = styled(Link)`
  margin-right: 12px;
  text-transform: uppercase;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

export default NavigationLink;
