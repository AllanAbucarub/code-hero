import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import CharacterCardHeader from '../../components/CharacterCardHeader';
import CharacterCard from '../../components/CharacterCard';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';
import Search from '../../components/Search';

import { Container, Content, Message } from './styles';
import useCharacter from '../../hooks/useCharacter';
import useWindowSize from '../../hooks/useWindowSize';

const limit = 10;

const Listing: React.FC = () => {
  const [fetchAll, fetchByName, { data, error, loading }] = useCharacter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedText, setSearchedText] = useState('');
  const inputSearch = useRef<HTMLInputElement>(null);
  const { width } = useWindowSize();

  const buttonsPagination = useMemo(() => {
    return width && width > 450 ? 5 : 3;
  }, [width]);

  useEffect(() => {
    searchedText ? fetchByName(searchedText) : fetchAll(currentPage);
    window.scrollTo(0, 0);
  }, [currentPage, searchedText]);

  const handleSelectedPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleSearch = useCallback((text: string) => {
    setSearchedText(text);
    inputSearch.current?.focus();
  }, []);

  return (
    <Container>
      <Content>
        <Search handleClick={handleSearch} ref={inputSearch} />
        {loading && <Loading />}
        {!!data?.results?.length && (
          <>
            <CharacterCardHeader />
            {data?.results.map(item => (
              <CharacterCard key={item.id} character={item} />
            ))}
          </>
        )}
        {error && <Message>{error}</Message>}
        {searchedText && !loading && !data?.results?.length && <Message>Nenhum resultado encontrado</Message>}
      </Content>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={handleSelectedPage}
        totalRacords={data?.total || 1}
        pageLimit={limit}
        buttonsShown={buttonsPagination}
        loading={loading}
      />
    </Container>
  );
};

export default Listing;
