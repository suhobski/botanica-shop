import React from "react";
import { Routes, Route } from "react-router-dom";

import Catalog from "./routes/catalog/catalog.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import SingIn from "./routes/sign-in/sign-in.component";
import Base from "./routes/base/base.component";
import SignUp from "./routes/sing-up/sign-up.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="sign-in" element={<SingIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<Base />} />
    </Routes>
  );
};

export default App;
