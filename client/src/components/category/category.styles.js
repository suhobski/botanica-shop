import styled from 'styled-components';

export const CategoryContainer = styled.section`
  padding: 12px 0;
`;

export const CategoryItems = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding-top: 12px;
`;
