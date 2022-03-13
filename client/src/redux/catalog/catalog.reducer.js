const INITIAL_STATE = [
  {
    id: 1,
    img: "./img/plants/dracenae.jpg",
    title: "Драцена",
    group: "dracaena",
    price: 15,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 2,
    img: "./img/plants/calla.jpg",
    title: "Калла белая",
    group: "calla",
    price: 27,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 3,
    img: "./img/plants/maranta.jpg",
    title: "Маранта",
    group: "maranta",
    price: 25,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 4,
    img: "./img/plants/pachira.jpg",
    title: "Пахира",
    group: "pachira",
    price: 33,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 5,
    img: "./img/plants/polypodiophyta1.jpg",
    title: "Папоротник 1",
    group: "polypodiophyta",
    price: 9.99,
    date: new Date(),
    inStock: true,
  },
  {
    id: 6,
    img: "./img/plants/polypodiophyta2.jpg",
    title: "Папоротник 2",
    group: "polypodiophyta",
    price: 9.99,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 7,
    img: "./img/plants/polypodiophyta3.jpg",
    title: "Папоротник 3",
    group: "polypodiophyta",
    price: 9.99,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 8,
    img: "./img/plants/polypodiophyta4.jpg",
    title: "Папоротник 4",
    group: "polypodiophyta",
    price: 9.99,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 9,
    img: "./img/plants/polypodiophyta5.jpg",
    title: "Папоротник 5",
    group: "polypodiophyta",
    price: 9.99,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 10,
    img: "./img/plants/polypodiophyta6.jpg",
    title: "Папоротник 6",
    group: "polypodiophyta",
    price: 9.99,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 11,
    img: "./img/plants/syngonium-pink.jpg",
    title: "Сингониум Пинк",
    group: "syngonium",
    price: 19.99,
    date: new Date(),
    quantity: 5,
  },
  {
    id: 12,
    img: "./img/plants/zamioculcas-zenzi.jpg",
    title: "Замиокулькас Зензи",
    group: "polypodiophyta",
    price: 49.99,
    date: new Date(),
    quantity: 5,
  },
];

const catalogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default catalogReducer;
