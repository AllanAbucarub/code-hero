import styled from 'styled-components';
import { snow, smoke } from '../../utils/colors';

export const Container = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 1px 1px 1px 1px rgba(180, 180, 180, 0.2);
  background: ${smoke};

  div {
    display: flex;
    position: absolute;
    font-weight: bold;
    bottom: 0;
    padding: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    background: ${snow};
    height: 70px;
  }

  img {
    object-fit: fill;
    &:hover {
      animation: pulse 350ms ease infinite alternate;
    }
  }

  @media screen and (max-width: 500px) {
    div {
      position: unset;
      height: 100%;
      padding: 20px;
    }
    display: grid;
    grid-template-columns: minmax(100px, 20%) 1fr;

    img {
      &:hover {
        animation: none;
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: scaleY(1) scaleX(1);
    }
    100% {
      transform: scaleY(1.02) scaleX(1.02);
    }
  }
`;
