import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import LayoutComponent from './Layout'

const meta: Meta<typeof LayoutComponent> = {
  title: 'Pages/Layout',
  component: LayoutComponent,
  args: {
    children: <h1>Children</h1>
  }
}

export default meta

type Story = StoryObj<typeof LayoutComponent>

export const Layout: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const headerComponent = canvas.getByTestId('header-component')
    const children = canvas.getByRole('heading', { name: 'Children' })
    const socialComponent = canvas.getAllByTestId('social-component')

    await step('Render header, children and social links', () => {
      expect(headerComponent).toBeInTheDocument()
      expect(children).toBeInTheDocument()
      expect(socialComponent.length).toBe(2)
    })
  }
}
