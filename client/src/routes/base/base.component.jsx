import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header.component";

import { Main } from "./base.styles";

function Base() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Base;
