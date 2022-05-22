import CartActionTypes from './cart.types';
import addItemToCart from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

// eslint-disable-next-line default-param-last
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.CLOSE_CART_DRAWER:
      return {
        ...state,
        hidden: true,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;