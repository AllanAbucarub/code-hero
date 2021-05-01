import styled from 'styled-components';
import { white } from '../../utils/colors';

export const Container = styled.a`
  display: flex;
  justify-content: center;
  background: ${white};
  padding: 10px 0;
  font-size: 0.875rem;
  height: 40px;

  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }
`;
