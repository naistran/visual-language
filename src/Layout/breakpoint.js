// @flow

import createValueGetter from '../utils/createValueGetter';

export const scale = [
  0,
  360,
  400,
  480,
  600,
  720,
  840,
  960,
  1024,
  1280,
  1440,
  1600,
  1920,
].map((x: number) => `@media(min-width: ${x / 16}em)`);

export const map = {
  xs: scale[0],
  s: scale[4],
  m: scale[7],
  l: scale[9],
  xl: scale[12],
};

export default createValueGetter(scale, map, map.xs);
