import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@marcajogo-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando box</span>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
