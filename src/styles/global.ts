import { createGlobalStyle } from 'styled-components';
import { dark_snow, dark_smoke } from '../utils/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${dark_snow};
    color: ${dark_smoke};
    -webkit-font-smoothing: antialiased;
    min-width: 350px;
  }

  body, input, button {
    font-family: 'PT Sans Caption', sans-serif;
    font-size: 100%
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border-radius: 4px;
    color: ${dark_smoke};
    border: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
