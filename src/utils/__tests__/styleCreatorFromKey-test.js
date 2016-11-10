// @flow

import styleCreatorFromKey from '../styleCreatorFromKey';


describe('styleCreatorFromKey', () => {
  it('returns a style object from `key`', () => {
    const margin = styleCreatorFromKey('margin');
    expect(margin(8)).toEqual({ margin: 8 });
  });

  it('handles `key` and `mapValue`', () => {
    const margin = styleCreatorFromKey('margin', x => x * 2);
    expect(margin(8)).toEqual({ margin: 16 });
  });

  it('handles `key` and `suffix`', () => {
    const margin = styleCreatorFromKey('margin', 'Top');
    expect(margin(8)).toEqual({ marginTop: 8 });
  });

  it('handles `key`, `suffix` and `mapValue`', () => {
    const margin = styleCreatorFromKey('margin', 'Top', x => x * 2);
    expect(margin(8)).toEqual({ marginTop: 16 });
  });

  it('handles directions', () => {
    const borderWidth = styleCreatorFromKey('border', 'Width', x => x * 2);
    expect(borderWidth({
      vertical: 8,
      horizontal: 4,
    })).toEqual({
      borderTopWidth: 16,
      borderBottomWidth: 16,
      borderLeftWidth: 8,
      borderRightWidth: 8,
    });
    expect(borderWidth({
      top: 8,
      bottom: 8,
      left: 4,
      right: 4,
    })).toEqual({
      borderTopWidth: 16,
      borderBottomWidth: 16,
      borderLeftWidth: 8,
      borderRightWidth: 8,
    });
  });
});
