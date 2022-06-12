import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addItem,
  toggleCartHidden,
} from '../../store/features/cart/cart.slice';

import Button from '../UI/buttons/button.styles';

import {
  CatalogItemComtainer,
  PlantFooter,
  PlantImage,
  PlantPrice,
} from './plant-card.styles';

const CatalogItem = ({ plant }) => {
  const dispatch = useDispatch();
  const { img, title, price } = plant;
  const imgPath = `../img/${img}`;
  const cardPrice = price.toFixed(2);

  const addPlantHandler = () => {
    dispatch(addItem(plant));
    dispatch(toggleCartHidden());
  };

  return (
    <CatalogItemComtainer>
      <PlantImage src={imgPath} alt={title} />
      <p>{title}</p>
      <PlantFooter>
        <PlantPrice>{cardPrice}</PlantPrice>
        <Button onClick={addPlantHandler}>В корзину</Button>
      </PlantFooter>
    </CatalogItemComtainer>
  );
};

export default CatalogItem;
