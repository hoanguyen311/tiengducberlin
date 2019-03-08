import { createGlobalStyle, css } from 'styled-components';
import media from '@utils/media-query';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
`