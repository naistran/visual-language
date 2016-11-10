// @flow

import createValueGetter from '../utils/createValueGetter';

export const map = {
  xs: 0,
  s: 600,
  m: 960,
  l: 1280,
  xl: 1920,
};

export const scale = [
  map.xs,
  360,
  400,
  480,
  map.s,
  720,
  840,
  map.m,
  1024,
  map.l,
  1440,
  1600,
  map.xl,
];

const getBreakpoint = createValueGetter(scale, map, map.xs);

export default (x: number | 'xs' | 's' | 'm' | 'l' | 'xl') =>
  `@media(min-width: ${getBreakpoint(x) / 16}em)`;
