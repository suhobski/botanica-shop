import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import Button from "../button/Button.component";

import {
  CatalogItemComtainer,
  PlantFooter,
  PlantImage,
  PlantPrice,
} from "./plant-card.styles";

function CatalogItem({ plant }) {
  const dispatch = useDispatch();
  const { img, title, price } = plant;
  const cardPrice = price.toFixed(2);

  return (
    <CatalogItemComtainer>
      <PlantImage src={img} alt={title} />
      <p>{title}</p>
      <PlantFooter>
        <PlantPrice>{cardPrice}</PlantPrice>
        <Button onClick={() => dispatch(addItem(plant))}>В корзину</Button>
      </PlantFooter>
    </CatalogItemComtainer>
  );
}

export default CatalogItem;
