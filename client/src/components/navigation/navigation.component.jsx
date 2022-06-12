import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMobileMenu } from '../../store/features/mobile-menu/mobileMenuSlice';

import { signAuthOut } from '../../utils/firebase/firebase.utils';

import NavigationLink from '../navigation-link/navigation-link';

import NavigationContainer from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isMenuOpen = useSelector(
    (state) => state.mobileMenu.isMobileMenuVisible
  );

  const closeMenuHandle = () => {
    if (isMenuOpen) {
      dispatch(closeMobileMenu());
    }
  };

  return (
    <NavigationContainer isMenuOpen={isMenuOpen}>
      <NavigationLink onClick={closeMenuHandle} to="/">
        Главная
      </NavigationLink>
      <NavigationLink onClick={closeMenuHandle} to="catalog">
        Каталог
      </NavigationLink>
      {currentUser ? (
        <NavigationLink
          as="div"
          onClick={() => {
            signAuthOut();
            closeMenuHandle();
          }}
        >
          Выход
        </NavigationLink>
      ) : (
        <NavigationLink onClick={closeMenuHandle} to="sign-in">
          Вход
        </NavigationLink>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
