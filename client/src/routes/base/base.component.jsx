import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/header.component";
import { AppContainer, Main } from "./base.styles";
import Footer from "../../components/footer/footer.component";

function Base() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default Base;
