// @flow

import valueGetterFromObject from '../utils/valueGetterFromObject';

export const map = {
  solid: '1em',
  title: '1.25em',
  copy: '1.5em',
};

export default valueGetterFromObject(map, map.copy);
