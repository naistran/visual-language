// @flow

import createValueGetter from '../createValueGetter';

describe('createValueGetter', () => {
  const scale = [
    0,
    2,
    4,
    8,
    16,
    '100%',
  ];

  const map = {
    pill: 9999,
    circle: '100%',
  };

  const getValue = createValueGetter(scale, map);
  const getValueWithDefault = createValueGetter(scale, map, '9999em');

  it('gets correct value from the scale', () => {
    expect(getValue(1)).toEqual(2);
    expect(getValue(5)).toEqual('100%');
    expect(getValue(1)).toEqual(2);
    expect(getValue(5)).toEqual('100%');
  });

  it('handles negative numbers', () => {
    expect(getValue(-2)).toEqual(-4);
    expect(getValue(-5)).toEqual('100%');
    expect(getValue(-2)).toEqual(-4);
    expect(getValue(-5)).toEqual('100%');
  });

  it('returns the mapped value of given the key', () => {
    expect(getValue('pill')).toEqual(9999);
    expect(getValue('circle')).toEqual('100%');
  });

  it('handles default value', () => {
    expect(getValue()).toEqual(0);
    expect(getValueWithDefault()).toEqual('9999em');
  });
});
