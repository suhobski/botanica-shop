import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "../../components/PlantCard/PlantCard.component";
import { CatalogContainer, CatalogPlants } from "./Catalog.styles";

function Catalog() {
  const plants = useSelector((state) => state.catalog);

  return (
    <CatalogContainer>
      <h3>Catalog</h3>
      <CatalogPlants>
        {plants.map((plant) => (
          <CatalogItem plant={plant} key={plant.id} />
        ))}
      </CatalogPlants>
    </CatalogContainer>
  );
}

export default Catalog;
