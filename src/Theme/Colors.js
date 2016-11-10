// @flow

export const black = '#000';
export const nearBlack = '#111';
export const darkGray = '#333';
export const midGray = '#555';
export const gray = '#777';
export const silver = '#999';
export const lightSilver = '#aaa';
export const moonGray = '#ccc';
export const lightGray = '#eee';
export const nearWhite = '#f4f4f4';
export const white = '#fff';

type Brightness = 0.125 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export const dark = (x: Brightness) => `rgba(0,0,0,${x / 10})`;
export const light = (x: Brightness) => `rgba(255,255,255,${x / 10})`;

export const darkRed = '#e7040f';
export const red = '#ff4136';
export const lightRed = '#ff725c';
export const orange = '#ff6300';
export const gold = '#ffb700';
export const yellow = '#ffd700';
export const lightYellow = '#fbf1a9';
export const purple = '#5e2ca5';
export const lightPurple = '#a463f2';
export const darkPink = '#d5008f';
export const hotPink = '#ff41b4';
export const pink = '#ff80cc';
export const lightPink = '#ffa3d7';
export const darkGreen = '#137752';
export const green = '#19a974';
export const lightGreen = '#9eebcf';
export const navy = '#001b44';
export const darkBlue = '#00449e';
export const blue = '#357edd';
export const lightBlue = '#96ccff';
export const lightestBlue = '#cdecff';
export const washedBlue = '#f6fffe';
export const washedGreen = '#e8fdf5';
export const washedYellow = '#fffceb';
export const washedRed = '#ffdfdf';
