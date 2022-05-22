import mobileMenuActionTypes from './mobile-menu.types';

export const toggleMobileMenuVisibility = () => ({
  type: mobileMenuActionTypes.TOOGLE_MOBILE_MENU_VISIBILITY,
});

export const closeMobileMenu = () => ({
  type: mobileMenuActionTypes.CLOSE_MOBILE_MENU,
});
