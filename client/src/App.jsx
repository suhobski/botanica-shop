import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchAllProducts } from './redux/catalog/catalog.actions';
import useUser from './utils/hooks/useUser';

import Catalog from './routes/catalog/catalog.component';
import Home from './routes/home/home.component';
import SingIn from './routes/sign-in/sign-in.component';
import Base from './routes/base/base.component';
import SignUp from './routes/sing-up/sign-up.component';
import Checkout from './routes/checkout/checkout.component';
import Category from './components/category/category.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  useUser();

  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:category" element={<Category />} />
        <Route path="sign-in" element={<SingIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<Base />} />
    </Routes>
  );
};

export default App;
