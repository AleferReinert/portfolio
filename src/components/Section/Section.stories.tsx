import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Section } from './Section'

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
  args: { id: 'about', children: 'Children of section.' }
}

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('id', () => {
      const section = canvasElement.getElementsByTagName('section')[0]
      expect(section.id).toBe('about')
    })

    await step('Children', () => {
      const children = canvas.getByText('Children of section.')
      expect(children).toBeVisible()
    })
  }
}

export const WithTitle: Story = {
  args: { title: 'My custom title' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('My custom title')
    })
  }
}
