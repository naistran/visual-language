// @flow

import React from 'react';
import { View } from 'primitives';
import Visual from '../src';

const SpacedView = ({ style, ...props }) => <View
  {...props}
  style={{

    width: Visual.space(7),
    height: Visual.space(7),
    ':not(:first-child)': {
      marginLeft: Visual.space(5),
    },
    borderRadius: Visual.radius(2),
    transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    ...style,
  }}
/>;

export default () => <View
  style={{
    flexDirection: 'row',
    padding: Visual.space(7),
  }}
>
  <SpacedView
    style={{
      boxShadow: Visual.shadow(1),
      ':hover': {
        boxShadow: Visual.shadow(2),
      },
    }}
  />
  <SpacedView
    style={{
      boxShadow: Visual.shadow(2),
      ':hover': {
        boxShadow: Visual.shadow(3),
      },
    }}
  />
  <SpacedView
    style={{
      boxShadow: Visual.shadow(3),
      ':hover': {
        boxShadow: Visual.shadow(4),
      },
    }}
  />
  <SpacedView
    style={{
      boxShadow: Visual.shadow(4),
      ':hover': {
        boxShadow: Visual.shadow(1),
      },
    }}
  />
</View>;
