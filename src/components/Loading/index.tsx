import React from 'react';

import { Container } from './styles';

const LoadingGif = 'loading.gif';

const Loading: React.FC = () => (
  <Container>
    <img src={LoadingGif} alt="Loading" />
  </Container>
);

export default Loading;
