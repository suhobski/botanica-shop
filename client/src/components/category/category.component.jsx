import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CatalogItem from '../plant-card/plant-card.component';

import { CategoryContainer, CategoryItems } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoryItems = useSelector(
    (state) => state.catalog.products?.[category]
  );
  const categoryTitle = category[0].toUpperCase() + category.substring(1);

  return (
    <CategoryContainer>
      <h3>{categoryTitle}</h3>
      <CategoryItems>
        {categoryItems &&
          categoryItems.map((plant) => (
            <CatalogItem key={plant.id} plant={plant} />
          ))}
      </CategoryItems>
    </CategoryContainer>
  );
};

export default Category;
