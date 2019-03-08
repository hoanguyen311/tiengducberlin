import React from 'react';
import { ResponsiveContext } from 'grommet';

const utils = {};
const breakpoints = {
  small: 0,
  medium: 768,
  large: 768 // TODO: change to 1536
};

for(const breakpoint of Object.keys(breakpoints)) {
  utils[breakpoint] = (css) => {
    
    const minWidth = breakpoints[breakpoint];

    if (minWidth && minWidth === 0) {
      return css;
    }
    let styles = '';
    if (Array.isArray(css)) {
      styles = css.join('');
    } else {
      styles = css;
    }

    return  `
      @media screen and (min-width: ${minWidth}px) {
        ${styles}
      }
    `
  }
}

export default utils;


export const VisibleSmall = ({ children }) => (
  <ResponsiveContext.Consumer>
    {(size) => size === 'small' ? children : null}
  </ResponsiveContext.Consumer>
);

export const VisibleMediumUp = ({ children }) => (
  <ResponsiveContext.Consumer>
    {(size) => size === 'medium' || size === 'large' ? children : null}
  </ResponsiveContext.Consumer>
);