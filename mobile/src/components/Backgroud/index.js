import React from 'react';

import { Container, Top } from './styles';

const Backgroud = ({ children }) => {
  return (
    <Container>
      <Top />
      {children}
    </Container>
  );
};

export default Backgroud;
