// @flow

import React from 'react';
import { View, Text } from 'primitives';
import Visual from '../src';
import Spacing from './Spacing';
import TypeScale from './TypeScale';
import Shadow from './Shadow';

const { storiesOf } = Storybook;

storiesOf('Visual Language', module)
  .add('View and Text', () => <View
    style={{
      backgroundColor: Visual.washedRed,
      height: Visual.space(8) * 2,
      ...Visual.alignment('center'),
    }}
  >
    <Text>Hello</Text>
    <Text
      style={{
        fontWeight: Visual.weight('semibold'),
        fontSize: Visual.size(3),
      }}
    >
      World
    </Text>
  </View>)
  .add('Spacing', () => <Spacing />)
  .add('Type scale', () => <TypeScale />)
  .add('Shadow', () => <Shadow />);
