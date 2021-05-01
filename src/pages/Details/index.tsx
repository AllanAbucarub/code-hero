import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '../../hooks/useApi';

import InfoCard from '../../components/InfoCard';
import Loading from '../../components/Loading';
import { Container, Top, Character, Infos, InfoContainer, BackButton, Message } from './styles';

import { ICharacter } from '../../types/character/types';
import { IComicsList } from '../../types/comics/types';

const marvel_url = 'http://marvel.com';
const Details: React.FC = () => {
  const location = useLocation<ICharacter>();
  const character: ICharacter = location.state;
  const [fetchData, { data, error, loading }] = useApi<IComicsList>();

  const {
    thumbnail: { path, extension },
    name,
    id,
    comics,
    series,
    stories,
    events,
    urls,
  } = character;

  const photo = `${path}.${extension}`;
  const characterUrl = urls[0] ? urls[0].url : marvel_url;

  useEffect(() => {
    const endpoint = `characters/${id}/comics`;
    fetchData({ endpoint });
  }, [id]);

  return (
    <Container>
      <BackButton to="/">{'<  Voltar'}</BackButton>
      <Top>
        <Character>
          <a href={characterUrl}>
            <img src={photo} alt="personagem" />
          </a>
          <strong>{name}</strong>
        </Character>
        <Infos>
          <div>
            <strong>Quadrinhos:</strong>
            <strong>{comics.available}</strong>
          </div>
          <div>
            <strong>Eventos:</strong>
            <strong>{events.available}</strong>
          </div>
          <div>
            <strong>Histórias:</strong>
            <strong>{stories.available}</strong>
          </div>
          <div>
            <strong>Séries:</strong>
            <strong>{series.available}</strong>
          </div>
        </Infos>
      </Top>

      {loading && <Loading />}
      <InfoContainer>
        {!loading && !!data?.results?.length && (
          <>
            <h2>Quadrinhos que participou</h2>
            <div>
              {data?.results?.map(({ title, thumbnail, urls: comicsUrl }) => {
                const image = `${thumbnail.path}.${thumbnail.extension}`;
                const url = comicsUrl[0] ? comicsUrl[0].url : marvel_url;
                return <InfoCard link={url} image={image} title={title} />;
              })}
            </div>
          </>
        )}

        {!loading && error && (
          <Message>Ocorreu um erro ao tentar buscar dados, por favor tente mais tarde.</Message>
        )}
        {!loading && !error && !data?.results?.length && <Message>Nenhum quadrinho encontrado.</Message>}
      </InfoContainer>
    </Container>
  );
};

export default Details;
