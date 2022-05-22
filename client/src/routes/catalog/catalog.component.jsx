import React from 'react';
import { useSelector } from 'react-redux';
import CatalogItem from '../../components/plant-card/plant-card.component';
import { CatalogContainer, CatalogPlants } from './catalog.styles';

const Catalog = () => {
  const plants = useSelector((state) => state.catalog);

  return (
    <CatalogContainer>
      <CatalogPlants>
        {plants.map((plant) => (
          <CatalogItem plant={plant} key={plant.id} />
        ))}
      </CatalogPlants>
    </CatalogContainer>
  );
};

export default Catalog;
