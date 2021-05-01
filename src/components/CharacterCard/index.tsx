import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Personagem, SeriesItem, EventsItem } from './styles';
import { ICharacter } from '../../types/character/types';

interface IProps {
  character: ICharacter;
}

const CharacterCard: React.FC<IProps> = ({ character }) => {
  const history = useHistory();

  const handleClick = (): void =>
    history.push({
      pathname: '/details',
      state: character,
    });

  const { thumbnail, name, series, events } = character;
  const photo = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Container onClick={handleClick}>
      <Personagem>
        <img src={photo} alt="personagem" />
        <strong>{name}</strong>
      </Personagem>
      <SeriesItem>
        {series?.items && series.items.slice(0, 3).map(item => <span key={item.name}>{item.name}</span>)}
      </SeriesItem>
      <EventsItem>
        {events?.items && events.items.slice(0, 3).map(item => <span key={item.name}>{item.name}</span>)}
      </EventsItem>
    </Container>
  );
};

export default CharacterCard;
