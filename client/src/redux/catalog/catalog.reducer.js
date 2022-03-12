const INITIAL_STATE = {
  catalog: [
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
  ],
};

const catalogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
