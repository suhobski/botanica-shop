import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "../../redux/user/user.actions";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { AppLayoutContainer, Main } from "./AppLayout.style";

import Catalog from "../../pages/Catalog/Catalog.component";
import Header from "../Header/Header.component";
import Home from "../../pages/Home/Home.component";
import About from "../../pages/About/About.component";
import SingIn from "../../pages/SignIn/SignIn.component";

const AppLayout = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        await userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <AppLayoutContainer>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="about-us" element={<About />} />
          <Route
            path="sign-in"
            element={currentUser ? <Navigate to="/" /> : <SingIn />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Main>
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
