import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
