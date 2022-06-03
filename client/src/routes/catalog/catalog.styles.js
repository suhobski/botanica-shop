import styled from 'styled-components';
import { secondBackgroundColor } from '../../style/theme';

export const CatalogContainer = styled.main`
  text-align: left;
`;

export const CatalogCategories = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding: 12px 0;
`;

export const CategoryPreview = styled.div`
  position: relative;
  display: grid;
  place-content: center;
  height: 250px;
  border-radius: 4px;
  background: ${secondBackgroundColor}
    url(${({ bgImage }) => `./img/${bgImage}`}) 40% center no-repeat;
  background-size: cover;
  overflow-wrap: break-word;
  cursor: pointer;
`;

export const PreviewShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  ${CategoryPreview}:hover & {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const CategoryPreviewTitle = styled.h4`
  padding: 4px 8px;
  color: #ffffff;
  letter-spacing: 2px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  overflow-wrap: break-word;
  transition: 0.3s;

  ${CategoryPreview}:hover & {
    transform: scale(1.1);
  }

  ${CategoryPreview}:active & {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
