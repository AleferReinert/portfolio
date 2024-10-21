import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { skills } from 'app/content'
import { Skills } from './Skills'

const meta: Meta<typeof Skills> = {
  title: 'Components/Skills',
  component: Skills,
  args: {
    skills: skills
  }
}

export default meta

type Story = StoryObj<typeof Skills>

export const Default: Story = {
  name: 'Skills',
  parameters: {
    viewport: { defaultViewport: 'xs' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render heading', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toHaveTextContent('Habilidades')
    })

    await step('Render 20 skills', () => {
      const skills = canvas.getAllByRole('listitem')
      expect(skills.length).toBeGreaterThanOrEqual(20)
    })
  }
}
