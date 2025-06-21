import type { Meta, StoryObj } from '@storybook/react'

import SellACarPage from './SellACarPage'

const meta: Meta<typeof SellACarPage> = {
  component: SellACarPage,
}

export default meta

type Story = StoryObj<typeof SellACarPage>

export const Primary: Story = {}
