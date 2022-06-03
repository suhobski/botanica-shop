import CatalogActionTypes from './catalog.types';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const fetchAllProductsAction = (products) => ({
  type: CatalogActionTypes.FETCH_ALL_PRODUCTS,
  products,
});

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const shopData = await getCategoriesAndDocuments();
    dispatch(fetchAllProductsAction(shopData));
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllProducts;
