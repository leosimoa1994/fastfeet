import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from './routes';

// import { Container } from './styles';

const App = () => {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <>
      {signed ? (
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      ) : (
          <StatusBar barStyle="light-content" backgroundColor="#7d40ea" />
        )}
      <Routes signedIn={signed} />
    </>
  );
};

export default App;
