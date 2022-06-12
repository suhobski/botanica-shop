import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../store/features/catalog/catalog.slice';

import {
  CatalogContainer,
  CatalogCategories,
  CategoryPreview,
  CategoryPreviewTitle,
  PreviewShadow,
} from './catalog.styles';

const Catalog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.catalog.plants);

  const previewClickHandle = (e, category) => {
    navigate(category);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
