import styled from 'styled-components';

import { secondBackgroundColor } from '../../style/theme';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-align: center;
  background-color: ${secondBackgroundColor};
`;

export default FooterContainer;
