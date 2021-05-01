import React, { useState } from 'react';

import { Container, SearchBox } from './styles';
import { smoke } from '../../utils/colors';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

interface IProps {
  handleClick(text: string): void;
}

const Search = React.forwardRef<HTMLInputElement, IProps>(({ handleClick }, ref) => {
  const [typedText, setTypedText] = useState('');

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.key === 'Enter' && handleClick(typedText);
  };

  const handleTyped = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTypedText(e.target.value);
    !e.target.value && handleClick(e.target.value);
  };

  return (
    <Container>
      <h1>Busca de personagens</h1>
      <strong>Nome do personagem</strong>
      <SearchBox>
        <input
          ref={ref}
          type="text"
          placeholder="Search"
          onChange={e => handleTyped(e)}
          value={typedText}
          onKeyDown={e => handlePressEnter(e)}
        />
        <SearchIcon fill={smoke} onClick={() => handleClick(typedText)} />
      </SearchBox>
    </Container>
  );
});

export default Search;
