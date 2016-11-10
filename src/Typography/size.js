// @flow

import valueGetterFromArray from '../utils/valueGetterFromArray';

export const scale = [
  12,
  14,
  16,
  18,
  21,
  24,
  28,
  32,
  36,
  42,
  48,
  55,
  63,
  73,
  84,
  96,
  110,
  127,
];

const getSize = valueGetterFromArray(scale);

export default (x: number) => getSize((x / 0.5) + 2);
