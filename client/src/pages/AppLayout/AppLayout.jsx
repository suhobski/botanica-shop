import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home.component";
import Catalog from "../Catalog/Catalog.component";
import Header from "../../components/Header/Header.component";

import { AppLayoutContainer, Main } from "./AppLayout.style";
import About from "../About/About.component";

const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="about-us" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Main>
    </AppLayoutContainer>
  );
};

export default AppLayout;
