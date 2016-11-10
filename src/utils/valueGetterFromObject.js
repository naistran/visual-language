// @flow

import type { CSSValue } from '../ValueTypes';

export default function valueGetterFromObject<T: CSSValue, M: { [key: string]: T }>(
  obj: M,
  defaultValue?: T,
): (_?: $Keys<M>) => T {
  return (x?: $Keys<M>) => {
    if (x == null && defaultValue != null) {
      return defaultValue;
    }

    if (x == null) {
      x = Object.keys(obj)[0];
    }

    return obj[x];
  };
}
