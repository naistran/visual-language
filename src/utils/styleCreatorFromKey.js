// @flow

import type { CSSValue } from '../ValueTypes';

type StyleCreator<T, V> = (_: T | {|
  vertical?: T,
  horizontal?: T,
  top?: T,
  bottom?: T,
  left?: T,
  right?: T,
|}) => { [key: string]: ?(T | V) };

type ValueMapper<T, V> = (_: T) => ?(T | V);

function styleCreatorFromKey<T: CSSValue, V: CSSValue>(
  key: string,
  suffixOrMapValue?: string | ValueMapper<T, V>,
  mapValue?: ValueMapper<T, V> = x => x,
): StyleCreator<T, V> {
  return val => {
    let suffix = '';

    if (typeof suffixOrMapValue === 'string') {
      suffix = suffixOrMapValue;
    } else if (typeof suffixOrMapValue === 'function') {
      mapValue = suffixOrMapValue;
    }

    if (typeof val === 'number' || typeof val === 'string') {
      return { [`${key}${suffix}`]: mapValue(val) };
    }

    const o = {};
    const { vertical, horizontal, top, bottom, left, right } = val;

    if (vertical != null) {
      o[`${key}Top${suffix}`] = mapValue(vertical);
      o[`${key}Bottom${suffix}`] = mapValue(vertical);
    }
    if (horizontal != null) {
      o[`${key}Left${suffix}`] = mapValue(horizontal);
      o[`${key}Right${suffix}`] = mapValue(horizontal);
    }
    if (top != null) {
      o[`${key}Top${suffix}`] = mapValue(top);
    }
    if (bottom != null) {
      o[`${key}Bottom${suffix}`] = mapValue(bottom);
    }
    if (left != null) {
      o[`${key}Left${suffix}`] = mapValue(left);
    }
    if (right != null) {
      o[`${key}Right${suffix}`] = mapValue(right);
    }

    return o;
  };
}

export default styleCreatorFromKey;
