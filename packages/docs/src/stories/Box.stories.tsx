import { StoryObj, Meta } from '@storybook/react'
import React from 'react'
import { Box, BoxProps, Text } from '@marcajogo-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
