import { createGlobalStyle, css } from 'styled-components';
import media from '$utils/media-query';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

td, th {
  border: 1px solid hsla(0,0%,0%,0.12);
}

th:first-child, td:first-child {
  padding-left: 1rem;
}

th:last-child, td:last-child {
  padding-right: 1rem;
}

h1, h2, h3, h4, h5, h6 {
  border-bottom: none;
}

a:hover, a:active {
  text-decoration: none;
}

${media.large(css`
  .hide-large {
    display: none !important;
  }
`)}
${media.medium(css`
  .hide-medium {
    display: none !important;
  }
`)}
`;
