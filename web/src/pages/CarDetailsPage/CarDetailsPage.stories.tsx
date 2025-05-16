import type { Meta, StoryObj } from '@storybook/react'

import CarDetailsPage from './CarDetailsPage'

const meta: Meta<typeof CarDetailsPage> = {
  component: CarDetailsPage,
}

export default meta

type Story = StoryObj<typeof CarDetailsPage>

export const Primary: Story = {}
