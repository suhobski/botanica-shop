import React from "react";
import CatalogItem from "../../components/CatalogItem/PlantCard.component";
import { CatalogContainer, CatalogPlants } from "./Catalog.styles";

function Catalog() {
  const plants = [
    {
      id: 1,
      img: "./img/plants/dracaena1.jpg",
      title: "Драцена",
      group: "dracaena",
      price: 15,
      date: new Date(),
      inStock: true,
    },
    {
      id: 2,
      img: "./img/plants/dracaena1.jpg",
      title: "Драцена",
      group: "dracaena",
      price: 15,
      date: new Date(),
      inStock: true,
    },
    {
      id: 3,
      img: "./img/plants/dracaena1.jpg",
      title: "Драцена",
      group: "dracaena",
      price: 15,
      date: new Date(),
      inStock: true,
    },
    {
      id: 4,
      img: "./img/plants/dracaena1.jpg",
      title: "Драцена",
      group: "dracaena",
      price: 15,
      date: new Date(),
      inStock: true,
    },
    {
      id: 5,
      img: "./img/plants/dracaena1.jpg",
      title: "Драцена",
      group: "dracaena",
      price: 15,
      date: new Date(),
      inStock: true,
    },
    {
      id: 6,
      img: "./img/plants/dracaena1.jpg",
      title: "Драцена",
      group: "dracaena",
      price: 15,
      date: new Date(),
      inStock: true,
    },
    {
      id: 7,
      img: "./img/plants/dracaena1.jpg",
      title: "Драцена",
      group: "dracaena",
      price: 15,
      date: new Date(),
      inStock: true,
    },
  ];

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
