import styled from 'styled-components';
import { white, snow, dark_smoke } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  background: ${white};
  height: 64px;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  font-size: 0.875rem;

  img {
    margin-left: 24px;
    margin-right: auto;
    width: 96px;
    height: 24px;
  }

  div {
    display: flex;
    justify-content: inherit;
    width: auto;
    margin-right: 17px;
    flex-wrap: wrap;
    padding-left: 10px;
    span {
      margin-left: 5px;
      white-space: nowrap;
    }
    strong {
      white-space: nowrap;
    }
  }

  button {
    min-width: 32px;
    height: 32px;
    background: ${snow};
    margin-right: 17px;
    font-size: 15px;
    font-weight: 700;
    transition: background 0.2s ease-in-out;

    :hover {
      color: ${snow};
      background: ${dark_smoke};
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }
`;
