import React from 'react';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#353535',
        height: '100vh',
        width: '100vw',
        color: 'white',
        fontFamily: 'sans-serif',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 600
      }}
    >
      <img width="256" src="./favicon.svg" alt="Logo Leonardo Corbi"/>
      <p>
        Você está usando o template de criação web de <br/> Leonardo Corbi 🤘🏼
      </p>
    </div>
    </Container>
  );
};

export default Home;
