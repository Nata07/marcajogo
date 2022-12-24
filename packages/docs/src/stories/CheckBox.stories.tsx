import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@marcajogo-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept checked</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}

export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    disabled: true,
  },
}
