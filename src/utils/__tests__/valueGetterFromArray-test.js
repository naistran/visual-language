// @flow

import valueGetterFromArray from '../valueGetterFromArray';

describe('valueGetterFromArray', () => {
  const scale = [
    0,
    2,
    4,
    8,
    16,
    '100%',
  ];

  const getValue = valueGetterFromArray(scale);

  it('gets correct value from the scale', () => {
    expect(getValue()).toEqual(0);
    expect(getValue(1)).toEqual(2);
    expect(getValue(5)).toEqual('100%');
  });

  it('handles negative numbers', () => {
    expect(getValue(-2)).toEqual(-4);
    expect(getValue(-5)).toEqual('100%');
  });

  it('handles out-of-bound values', () => {
    expect(getValue(-9999)).toEqual('100%');
    expect(getValue(9999)).toEqual('100%');
  });

  const getValueWithDefault = valueGetterFromArray(scale, 1);

  it('handles default value', () => {
    expect(getValueWithDefault()).toEqual(1);
  });
});
