// @flow

import valueGetterFromObject from '../utils/valueGetterFromObject';

export const map = {
  tight: '-.05em',
  normal: '.1em',
  mega: '.25em',
};

export default valueGetterFromObject(map, map.normal);
