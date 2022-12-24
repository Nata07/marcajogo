import { SignIn } from 'phosphor-react'
import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@marcajogo-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        SignIn
        <SignIn />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
