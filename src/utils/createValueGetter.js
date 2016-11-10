// @flow

import valueGetterFromArray from './valueGetterFromArray';
import valueGetterFromObject from './valueGetterFromObject';
import type { CSSValue } from '../ValueTypes';

type ValueMap<T> = { [key: string]: T };
type ValueGetter<T: CSSValue, M: ValueMap<T>> = (_?: number | $Keys<M>) => T;


export default function createValueGetter<T: CSSValue, M: ValueMap<T>>(
  array: Array<T>,
  obj: M,
  defaultValue?: T,
): ValueGetter<T, M> {
  const getValueFromArray = valueGetterFromArray(array);
  const getValueFromObject = valueGetterFromObject(obj);

  return (x?: number | $Keys<M>) => {
    if (typeof x === 'number') {
      return getValueFromArray(x);
    } else if (typeof x === 'string') {
      return getValueFromObject(x);
    }

    if (defaultValue != null) {
      return defaultValue;
    }

    return getValueFromArray();
  };
}
