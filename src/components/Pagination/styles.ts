import styled from 'styled-components';
import { white, snow, dark_snow, smoke, light_blue, dark_blue } from '../../utils/colors';

type ButtonProps = {
  visible: boolean;
};

type NumberButtonProps = {
  selected: boolean;
};

export const Container = styled.div`
  display: flex;
  width: 105vw;
  height: 90px;
  align-items: center;
  justify-content: center;
  background: ${white};
  margin-top: 24px;
  font-size: 0.875rem;

  button + button {
    margin-left: 16px;
  }

  @media screen and (max-width: 1000px) {
    height: 79px;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: transparent;
  font-weight: 700;
  color: ${smoke};
  ${props => !props.visible && 'visibility: hidden;'};
`;

export const NumberButton = styled.button<NumberButtonProps>`
  width: 40px;
  height: 32px;
  background: ${snow} !important;
  border: 1px solid ${dark_snow};

  :hover {
    ${props => !props.selected && `background: ${light_blue} !important`};
    color: ${white};
  }

  ${props => props.selected && 'cursor: default'};
  ${props => props.selected && `background: ${dark_blue} !important`};
  ${props => props.selected && `border: 1px solid ${dark_blue};`};
  ${props => props.selected && `color: ${white};`};
`;
