import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src="logo.png" alt="logo" />
    <div>
      <strong>Allan Coutinho Abucarub</strong>
      <span>Teste de Front-end</span>
    </div>
    <button type="button">CB</button>
  </Container>
);

export default Header;
