// @flow

import createValueGetter from '../utils/createValueGetter';

export const map = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const scale = [
  0,
  map.thin,
  map.extralight,
  map.light,
  map.normal,
  map.medium,
  map.semibold,
  map.bold,
  map.extrabold,
  map.black,
];

export default createValueGetter(scale, map, map.normal);
