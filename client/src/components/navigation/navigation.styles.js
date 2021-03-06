import styled from 'styled-components';

import { secondBackgroundColor } from '../../style/theme';

const NavigationContainer = styled.nav`
  position: relative;
  display: flex;
  z-index: 40;

  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
    width: 100%;
    height: 112vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    background-color: ${secondBackgroundColor};
    opacity: 0.99;
  }
`;

export default NavigationContainer;
