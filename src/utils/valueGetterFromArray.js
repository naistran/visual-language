// @flow

import type { CSSValue } from '../ValueTypes';

export default function valueGetterFromArray<T: CSSValue>(
  array: Array<T>,
  defaultValue?: T,
): (_?: number) => T {
  return (x?: number) => {
    if (x == null && defaultValue != null) {
      return defaultValue;
    }

    if (x == null) {
      x = 0;
    }

    const sign = x < 0 ? -1 : 1;
    const i = Math.abs(x);
    const val = array[Math.min(i, array.length - 1)];

    // $FlowFixMe: https://github.com/facebook/flow/issues/2194#issuecomment-241290508
    return typeof val === 'number' ? val * sign : val;
  };
}
