import styled from 'styled-components';
import { white, smoke, dark_smoke, shadow } from '../../utils/colors';

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${smoke};
  background: ${white};
  box-shadow: 0px 0px 5px ${shadow};
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 20px 0;
  font-size: 0.875rem;
  cursor: pointer;

  img {
    height: 48px;
    width: 48px;
    min-width: 48px;
  }

  div {
    max-width: 100%;
    overflow: hidden;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 16px;
    }
  }

  :hover {
    box-shadow: 0px 0px 3px 3px ${shadow};
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: minmax(50%, 1fr) 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 450px) {
    padding: 12px 0;
  }
`;

export const Personagem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 24px;
  line-height: 16px;
  font-size: 1rem;

  img {
    border-radius: 4px;
  }

  strong {
    margin-left: 24px;
    line-height: 22px;
    color: ${dark_smoke};
  }

  @media screen and (max-width: 450px) {
    margin-left: 16px;
    font-size: 0.875rem;
  }
`;

export const SeriesItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  justify-content: center;
  line-height: 16px;
  white-space: nowrap;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const EventsItem = styled(SeriesItem)`
  padding-right: 15px;
  white-space: nowrap;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
