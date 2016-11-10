// @flow

import valueGetterFromObject from '../valueGetterFromObject';

describe('valueGetterFromObject', () => {
  const obj = {
    pill: 9999,
    circle: '100%',
  };

  const getValue = valueGetterFromObject(obj);

  it('returns the mapped value of given the key', () => {
    expect(getValue()).toEqual(9999);
    expect(getValue('pill')).toEqual(9999);
    expect(getValue('circle')).toEqual('100%');
  });

  const getValueWithDefault = valueGetterFromObject(obj, 1);

  it('handles default value', () => {
    expect(getValueWithDefault()).toEqual(1);
  });
});
