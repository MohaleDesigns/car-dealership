// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from '@storybook/react'

import Fotter from './Fotter'

const meta: Meta<typeof Fotter> = {
  component: Fotter,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Fotter>

export const Primary: Story = {}
