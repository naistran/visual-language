// @flow

import React from 'react';
import { View, Text } from 'primitives';
import Visual from '../src';

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
  .add('View', () => <View style={{ flexDirection: 'row' }}>
    <View
      style={{
        width: Visual.space(8),
        height: Visual.space(8),
        backgroundColor: Visual.hotPink,
      }}
    />
    <View
      style={{
        width: Visual.space(8),
        height: Visual.space(8),
        backgroundColor: Visual.lightestBlue,
        borderColor: Visual.lightSilver,
        borderWidth: Visual.lineWidth(1),
        borderRadius: Visual.radius(6),
      }}
    />
    <View
      style={{
        width: Visual.space(8),
        height: Visual.space(8),
        backgroundColor: Visual.lightPurple,
        borderRadius: Visual.radius(3),
        ':hover': {
          backgroundColor: Visual.darkBlue,
        },
      }}
    />
  </View>)
  .add('Text', () => <View
    style={{
      padding: Visual.space(4),
      backgroundColor: Visual.washedGreen,
    }}
  >
    <Text
      style={{
        fontSize: Visual.size(1),
        maxWidth: Visual.measure('wide'),
        lineHeight: Visual.leading(),
      }}
    >
      <Text
        style={{
          fontSize: Visual.size(2),
          fontWeight: Visual.weight(7),
        }}
      >
        Heading{'\n'}
      </Text>
      <Text
        style={{
          fontWeight: Visual.weight(3),
          color: Visual.lightSilver,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Text>
  </View>);
