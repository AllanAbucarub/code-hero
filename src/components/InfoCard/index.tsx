import React from 'react';

import { Container } from './styles';

interface IProps {
  image: string;
  title: string;
  link: string;
}

const InfoCard: React.FC<IProps> = ({ image, title, link }) => (
  <Container href={link}>
    <img src={image} alt="logo" />
    <div>{title}</div>
  </Container>
);

export default InfoCard;
