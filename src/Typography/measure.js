// @flow

import valueGetterFromObject from '../utils/valueGetterFromObject';

export const map = {
  narrow: '20em',
  normal: '30em',
  wide: '34em',
};

export default valueGetterFromObject(map, map.normal);
