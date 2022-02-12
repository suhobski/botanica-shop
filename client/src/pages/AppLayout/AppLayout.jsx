import React from "react";
import Header from "../Header/Header";
import { AppLayoutContainer, Subtitle, Title } from "./AppLayout.style";

const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <Header />
      <Title>Botanica</Title>
      <Subtitle>Комнатные растения в Минске</Subtitle>
      <p>Paragraph</p>
    </AppLayoutContainer>
  );
};

export default AppLayout;
