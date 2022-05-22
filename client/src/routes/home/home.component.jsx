import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Subtitle, Title, HomeButton } from './home.styles';

const Home = () => {
  const navigate = useNavigate();

  const goToCatalogHandler = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Title>Botanica</Title>
      <Subtitle>
        Комнатные растения
        <br />в Минске
      </Subtitle>
      <HomeButton onClick={goToCatalogHandler}>Перейти в каталог</HomeButton>
    </>
  );
};

export default Home;
