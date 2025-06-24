import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { skills } from 'content/skills'
import { Skills } from './Skills'

const meta: Meta<typeof Skills> = {
  title: 'Components/Skills',
  component: Skills,
  args: { skills: skills },
  parameters: { layout: 'fullscreen' }
}

export default meta

type Story = StoryObj<typeof Skills>

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'xs' } },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Heading', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toHaveTextContent('Habilidades')
    })

    await step('18 skills', () => {
      const skills = canvas.getAllByRole('listitem')
      expect(skills.length).toBeGreaterThanOrEqual(18)
    })

    await step('3 columns', () => {
      const list = canvas.getByRole('list')
      expect(list).toHaveClass('grid-cols-3')
    })
  }
}

export const Desktop: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('6 columns', () => {
      const list = canvas.getByRole('list')
      expect(list).toHaveClass('sm:grid-cols-6')
    })
  }
}
