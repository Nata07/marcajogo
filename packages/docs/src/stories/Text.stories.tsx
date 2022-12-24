import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@marcajogo-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos mollitia quas aspernatur voluptates excepturi, deleniti consectetur nesciunt laborum necessitatibus, vero fugiat aut dolorum rem animi esse alias quasi architecto.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
