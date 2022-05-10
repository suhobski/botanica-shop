import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "../../redux/user/user.actions";

import { AppLayoutContainer } from "./AppLayout.style";

import Catalog from "../../routes/catalog/catalog.component";
import Home from "../../routes/home/home.component";
import About from "../../routes/about/about.component";
import SingIn from "../../routes/sign-in/sign-in.component";
import Base from "../../routes/base/base.component";

const AppLayout = ({ setCurrentUser, currentUser }) => {
  return (
    <AppLayoutContainer>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="sign-in"
            element={currentUser ? <Navigate to="/" /> : <SingIn />}
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayoutContainer>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
