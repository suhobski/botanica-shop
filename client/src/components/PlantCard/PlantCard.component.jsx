import React from "react";
import Button from "../UI/Button.component";

import {
  CatalogItemComtainer,
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
        <Button>В корзину</Button>
      </PlantFooter>
    </CatalogItemComtainer>
  );
}

export default CatalogItem;
