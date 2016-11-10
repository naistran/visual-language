// @flow

import valueGetterFromArray from '../utils/valueGetterFromArray';

export const scale = [
  0,
  2,
  4,
  8,
  16,
  9999,
  '100%',
];

export default valueGetterFromArray(scale);
