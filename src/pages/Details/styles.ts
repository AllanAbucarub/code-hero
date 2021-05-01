import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { snow, dark_snow, dark_blue } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 24px;
  font-size: 0.875rem;
  max-width: 1140px;
  width: 100%;
  min-height: calc(100vh - 104px);
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px rgba(180, 180, 180, 0.2);
  background: ${snow};
  align-items: center;
  padding: 24px;
  margin-bottom: 24px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    padding: 16px;
  }
`;

export const Character = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  img {
    border-radius: 10%;
    margin-right: 24px;
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    text-align: center;
    img {
      margin: 0 0 24px 0;
    }
  }
`;

export const Infos = styled.div`
  display: grid;
  width: 100%;
  column-gap: 20px;
  row-gap: 10px;
  grid-template-columns: auto auto auto auto;
  margin-left: auto;
  justify-content: space-evenly;
  padding: 10px;
  background: ${dark_snow};
  border-radius: 30px;

  > div {
    display: flex;

    strong + strong {
      color: ${dark_blue};
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: 24px;
    margin-left: 0;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: auto auto;
    border-radius: 10px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  > div {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    img {
      width: 100%;
    }

    @media screen and (max-width: 780px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const BackButton = styled(Link)`
  margin-right: auto;
  background: transparent;
  margin-bottom: 20px;
  font-weight: 700;
  transition: color 0.2s ease-in-out;

  :hover {
    color: ${dark_blue};
  }
`;

export const Message = styled.div`
  display: flex !important;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  font-weight: bold;
  padding: 16px;
  font-weight: bold;
  background: ${snow};
`;
