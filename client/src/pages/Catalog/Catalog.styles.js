import styled from "styled-components";

export const CatalogContainer = styled.main`
  padding: 8px;
  text-align: left;
`;

export const CatalogPlants = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding: 12px 0;
`;
