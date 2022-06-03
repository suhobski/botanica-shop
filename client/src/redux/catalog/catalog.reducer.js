// const SHOP_DATA = [
//   {
//     groupTitle: 'dracaena',
//     items: [
//       {
//         id: 1,
//         img: './img/plants/dracenae.jpg',
//         title: 'Драцена',
//         price: 15,
//         quantity: 5,
//       },
//     ],
//   },
//   {
//     groupTitle: 'calla',
//     items: [
//       {
//         id: 2,
//         img: './img/plants/calla.jpg',
//         title: 'Калла белая',
//         price: 27,
//         quantity: 5,
//       },
//     ],
//   },
//   {
//     groupTitle: 'maranta',
//     items: [
//       {
//         id: 3,
//         img: './img/plants/maranta.jpg',
//         title: 'Маранта',
//         price: 25,
//         quantity: 5,
//       },
//     ],
//   },
//   {
//     groupTitle: 'pachira',
//     items: [
//       {
//         id: 4,
//         img: './img/plants/pachira.jpg',
//         title: 'Пахира',
//         price: 33,
//         quantity: 5,
//       },
//     ],
//   },
//   {
//     groupTitle: 'polypodiophyta',
//     items: [
//       {
//         id: 5,
//         img: './img/plants/polypodiophyta1.jpg',
//         title: 'Папоротник 1',
//         price: 9.99,
//         quantity: 5,
//       },
//       {
//         id: 6,
//         img: './img/plants/polypodiophyta2.jpg',
//         title: 'Папоротник 2',
//         price: 9.99,
//         quantity: 5,
//       },
//       {
//         id: 7,
//         img: './img/plants/polypodiophyta3.jpg',
//         title: 'Папоротник 3',
//         price: 9.99,
//         quantity: 5,
//       },
//       {
//         id: 8,
//         img: './img/plants/polypodiophyta4.jpg',
//         title: 'Папоротник 4',
//         price: 9.99,
//         quantity: 5,
//       },
//       {
//         id: 9,
//         img: './img/plants/polypodiophyta5.jpg',
//         title: 'Папоротник 5',
//         price: 9.99,
//         quantity: 5,
//       },
//       {
//         id: 10,
//         img: './img/plants/polypodiophyta6.jpg',
//         title: 'Папоротник 6',
//         price: 9.99,
//         quantity: 5,
//       },
//     ],
//   },
//   {
//     groupTitle: 'syngonium',
//     items: [
//       {
//         id: 11,
//         img: './img/plants/syngonium-pink.jpg',
//         title: 'Сингониум Пинк',
//         price: 19.99,
//         quantity: 5,
//       },
//     ],
//   },
//   {
//     groupTitle: 'zamioculcas',
//     items: [
//       {
//         id: 12,
//         img: './img/plants/zamioculcas-zenzi.jpg',
//         title: 'Замиокулькас Зензи',
//         price: 49.99,
//         quantity: 5,
//       },
//     ],
//   },
// ];

import CatalogActionTypes from './catalog.types';

// eslint-disable-next-line default-param-last
const catalogReducer = (state = {}, action) => {
  switch (action.type) {
    case CatalogActionTypes.FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default catalogReducer;
