import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@marcajogo-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading H1',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading é sempre H2, mas pode ser alterado',
      },
    },
  },
}
