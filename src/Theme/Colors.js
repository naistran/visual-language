// @flow

import OpenColorJSON from 'open-color/open-color.json';
import valueGetterFromArray from '../utils/valueGetterFromArray';

type Color =
  'gray' |
  'red' |
  'pink' |
  'grape' |
  'violet' |
  'indigo' |
  'blue' |
  'cyan' |
  'teal' |
  'green' |
  'lime' |
  'yellow' |
  'orange';

const OpenColor: {
  white: string,
  black: string,
  [key: Color]: Array<string>,
} = OpenColorJSON;

type Brightness = 0.125 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export const white = (x?: Brightness): string =>
  x == null ? OpenColor.white : `rgba(0,0,0,${x / 10})`;
export const black = (x?: Brightness): string =>
  x == null ? OpenColor.black : `rgba(255,255,255,${x / 10})`;


const getColor = (c: Color) =>
  valueGetterFromArray(OpenColor[c], OpenColor[c][5]);

export const gray = getColor('gray');
export const red = getColor('red');
export const pink = getColor('pink');
export const grape = getColor('grape');
export const violet = getColor('violet');
export const indigo = getColor('indigo');
export const blue = getColor('blue');
export const cyan = getColor('cyan');
export const teal = getColor('teal');
export const green = getColor('green');
export const lime = getColor('lime');
export const yellow = getColor('yellow');
export const orange = getColor('orange');
