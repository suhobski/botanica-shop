import { mobileMenuActionTypes } from "./mobile-menu.types";

const INITIAL_STATE = {
  isMobileMenuVisible: false,
};

const mobileMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mobileMenuActionTypes.TOOGLE_MOBILE_MENU_VISIBILITY:
      return {
        ...state,
        isMobileMenuVisible: !state.isMobileMenuVisible,
      };
    case mobileMenuActionTypes.CLOSE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuVisible: false,
      };
    default:
      return state;
  }
};

export default mobileMenuReducer;
