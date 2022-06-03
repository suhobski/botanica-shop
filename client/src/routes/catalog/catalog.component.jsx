import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CatalogContainer,
  CatalogCategories,
  CategoryPreview,
  CategoryPreviewTitle,
  PreviewShadow,
} from './catalog.styles';

const Catalog = () => {
  const products = useSelector((state) => state.catalog.products);
  const navigate = useNavigate();

  const previewClickHandle = (e, category) => {
    navigate(category);
  };

  return (
    <CatalogContainer>
      <CatalogCategories>
        {products &&
          Object.keys(products).map((category) => {
            if (category.length !== 0) {
              return (
                <CategoryPreview
                  key={category}
                  onClick={(e) => previewClickHandle(e, category)}
                  bgImage={products[category][0].img}
                >
                  <PreviewShadow />
                  <CategoryPreviewTitle>{category}</CategoryPreviewTitle>
                </CategoryPreview>
              );
            }
            return null;
          })}
      </CatalogCategories>
    </CatalogContainer>
  );
};

export default Catalog;
