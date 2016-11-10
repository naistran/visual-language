// @flow

import styleCreatorFromKey from './utils/styleCreatorFromKey';
import type { CSSValue } from './ValueTypes';

export const absoluteFill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

export const fixedFill = {
  ...absoluteFill,
  position: 'fixed',
};

export const visuallyHidden = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
};

export const borderBottomRadius = (r: CSSValue) =>
  styleCreatorFromKey('borderBottom', 'Radius')({ horizontal: r });

export const borderTopRadius = (r: CSSValue) =>
  styleCreatorFromKey('borderTop', 'Radius')({ horizontal: r });

export const borderLeftRadius = (r: CSSValue) =>
  styleCreatorFromKey('border', 'LeftRadius')({ vertical: r });

export const borderRightRadius = (r: CSSValue) =>
  styleCreatorFromKey('border', 'RightRadius')({ vertical: r });

const flexAlignValues = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
};

type AlignValues = $Keys<typeof flexAlignValues>;

type Alignment = {
  flexDirection: 'row' | 'column',
  justifyContent?: 'flex-start' | 'flex-end' | 'center',
  alignItems?: 'flex-start' | 'flex-end' | 'center',
};

type AlignmentArg = AlignValues | {
  x?: AlignValues,
  y?: AlignValues,
};

export function alignment(
  arg: AlignmentArg,
  direction?: 'row' | 'column' = 'column',
): Alignment {
  const style: Alignment = { flexDirection: direction };

  if (typeof arg === 'string') {
    return {
      ...style,
      justifyContent: flexAlignValues[arg],
      alignItems: flexAlignValues[arg],
    };
  }

  const { x, y } = arg;
  const isRow = direction === 'row';
  const xAxis = isRow ? 'justifyContent' : 'alignItems';
  const yAxis = isRow ? 'alignItems' : 'justifyContent';

  if (x) {
    style[xAxis] = flexAlignValues[x];
  }

  if (y) {
    style[yAxis] = flexAlignValues[y];
  }

  return style;
}
