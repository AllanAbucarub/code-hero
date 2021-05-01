import styled from 'styled-components';
import { smoke } from '../../utils/colors';

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${smoke};
  margin: 40px 0 9px 0;
  font-size: 0.75rem;

  span {
    margin-left: 24px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    span:nth-last-child(-n + 1) {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    span:nth-last-child(-n + 2) {
      display: none;
    }
    margin-left: 72px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 64px;
  }
  @media screen and (max-width: 450px) {
    margin-top: 32.84px;
  }
`;
