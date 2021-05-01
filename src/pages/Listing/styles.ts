import styled from 'styled-components';
import { snow } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: calc(100vh - 104px);
  width: 100%;
  height: 100%;
  padding: 40px 24px 0 24px;
  align-items: center;

  @media screen and (max-width: 450px) {
    padding-top: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background: transparent;
  max-width: 1140px;
`;

export const Message = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  font-weight: bold;
  padding: 16px;
  font-weight: bold;
  background: ${snow};
`;
