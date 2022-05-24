import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem, toggleCartHidden } from '../../redux/cart/cart.actions';

import Button from '../button/button.styles';

import {
  CatalogItemComtainer,
  PlantFooter,
  PlantImage,
  PlantPrice,
} from './plant-card.styles';

const CatalogItem = ({ plant }) => {
  const dispatch = useDispatch();
  const { img, title, price } = plant;
  const cardPrice = price.toFixed(2);

  const addPlantHandler = () => {
    dispatch(addItem(plant));
    dispatch(toggleCartHidden());
  };

  return (
    <CatalogItemComtainer>
      <PlantImage src={img} alt={title} />
      <p>{title}</p>
      <PlantFooter>
        <PlantPrice>{cardPrice}</PlantPrice>
        <Button onClick={addPlantHandler}>В корзину</Button>
      </PlantFooter>
    </CatalogItemComtainer>
  );
};

export default CatalogItem;
