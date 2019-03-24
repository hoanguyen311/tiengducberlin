export const XS = 0;
export const SM = 576;
export const MD = 768;
export const LG = 992;
export const XL = 1200;

/* for CSS */
export const mobileLandscape = `(min-width: ${SM}px)`;
export const tablet = `(min-width: ${MD}px)`;
export const desktop = `(min-width: ${LG}px)`;
export const largeDesktop = `(min-width: ${XL}px)`;

/* for JS */
export const breakpointsMap = {
  xs: { name: 'xs', value: XS },
  sm: { name: 'sm', value: SM },
  md: { name: 'md', value: MD },
  lg: { name: 'lg', value: LG },
  xl: { name: 'xl', value: XL },
};

export const breakpoints = Object.values(breakpointsMap);

// { name: sm, value: 576 }
// { name: xs, value: 0 }

export const down = breakpoint => current => {
  return current.value <= breakpoint.value;
};
export const up = breakpoint => current => {
  return current.value >= breakpoint.value;
};
export const isSMDown = down(breakpointsMap.sm);
export const isMDUp = up(breakpointsMap.md);
