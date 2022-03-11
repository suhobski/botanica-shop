import React from "react";

import {
  CatalogItemComtainer,
  PlantButton,
  PlantFooter,
  PlantImage,
  PlantPrice,
} from "./PlantCard.styles";

function CatalogItem({ plant }) {
  const { img, title, price } = plant;
  const cardPrice = price.toFixed(2);

  return (
    <CatalogItemComtainer>
      <PlantImage src={img} alt={title} />
      <p>{title}</p>
      <PlantFooter>
        <PlantPrice>{cardPrice}</PlantPrice>
        <PlantButton>В корзину</PlantButton>
      </PlantFooter>
    </CatalogItemComtainer>
  );
}

export default CatalogItem;
