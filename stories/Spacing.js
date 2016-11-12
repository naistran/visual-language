// @flow

import React from 'react';
import { View, Text } from 'primitives';
import Visual from '../src';

const SpacedView = ({ size }: { size: number }) => <View
  style={{
    flexDirection: 'row',
    ':not(:first-child)': {
      marginTop: Visual.space(4),
    }
  }}
>
  <Text>{size}</Text>
  <View
    style={{
      marginLeft: Visual.space(3),
      borderStyle: 'dotted',
      borderColor: Visual.blue,
      borderWidth: Visual.lineWidth(2),
      width: Visual.space(size),
      height: Visual.space(size),
    }}
  />
</View>;

export default () => <View>
  <SpacedView size={1} />
  <SpacedView size={2} />
  <SpacedView size={3} />
  <SpacedView size={4} />
  <SpacedView size={5} />
  <SpacedView size={6} />
  <SpacedView size={7} />
  <SpacedView size={8} />
</View>;
