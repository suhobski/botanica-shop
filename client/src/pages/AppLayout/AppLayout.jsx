import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Home/Home.component";
import Catalog from "../Catalog/Catalog.component";
import Header from "../../components/Header/Header.component";

import { AppLayoutContainer } from "./AppLayout.style";
import About from "../About/About.component";

const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="about-us" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayoutContainer>
  );
};

export default AppLayout;
