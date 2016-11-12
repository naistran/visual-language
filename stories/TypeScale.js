// @flow

import React from 'react';
import { View, Text } from 'primitives';
import Visual from '../src';

const StyledText = ({ size, ...props }: { size: number }) =>
  <Text {...props} style={{ fontSize: Visual.size(size) }} />;

export default () => <View>
  <StyledText size={-1}>
    Hello World
  </StyledText>
  <StyledText size={-0.5}>
    Hello World
  </StyledText>
  <StyledText size={0}>
    Hello World
  </StyledText>
  <StyledText size={0.5}>
    Hello World
  </StyledText>
  <StyledText size={1}>
    Hello World
  </StyledText>
  <StyledText size={1.5}>
    Hello World
  </StyledText>
  <StyledText size={2}>
    Hello World
  </StyledText>
  <StyledText size={2.5}>
    Hello World
  </StyledText>
  <StyledText size={3}>
    Hello World
  </StyledText>
  <StyledText size={3.5}>
    Hello World
  </StyledText>
  <StyledText size={4}>
    Hello World
  </StyledText>
  <StyledText size={4.5}>
    Hello World
  </StyledText>
  <StyledText size={5}>
    Hello World
  </StyledText>
  <StyledText size={5.5}>
    Hello World
  </StyledText>
  <StyledText size={6}>
    Hello World
  </StyledText>
  <StyledText size={6.5}>
    Hello World
  </StyledText>
  <StyledText size={7}>
    Hello World
  </StyledText>
  <StyledText size={7.5}>
    Hello World
  </StyledText>
</View>;
