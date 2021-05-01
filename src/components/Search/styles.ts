import styled from 'styled-components';
import { white, dark_snow, dark_smoke } from '../../utils/colors';

export const SearchBox = styled.div`
  display: flex;
  border: 1px solid ${dark_snow};
  border-radius: 4px;
  padding: 0 16px;
  align-items: center;
  background: ${white};
  width: 295px;

  input {
    border: 0;
    color: ${dark_smoke};
    flex: 1;
    font-size: 0.875rem;
    height: 32px;
    font-style: italic;
    margin-right: 14px;
  }

  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin: 16px 0 8px 0;
  }

  @media screen and (max-width: 450px) {
    text-align: center;
    ${SearchBox} {
      width: 100%;
    }
    h1 {
      font-size: 1.5rem;
    }
    strong {
      font-size: 0.875rem;
      margin: 24px 0 8.6px 0;
    }
  }
`;
