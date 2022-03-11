import styled from "styled-components";
import { secondBackgroundColor } from "../../style/theme";

export const CatalogItemComtainer = styled.div`
  display: inline-block;
`;

export const PlantImage = styled.img`
  width: 100%;
  border-radius: 25px;
`;

export const PlantFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const PlantPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  user-select: none;
`;

export const PlantButton = styled.button`
  padding: 8px 16px;
  border: 1px solid ${secondBackgroundColor};
  border-radius: 12px;
  background: ${secondBackgroundColor};

  &:hover {
    cursor: pointer;
  }
`;
