import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { skills } from 'app/content'
import { Container } from 'components/Container/Container'
import { Skills } from './Skills'

const meta: Meta<typeof Skills> = {
  title: 'Components/Skills',
  component: Skills,
  args: {
    skills: skills
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Skills>

export const Default: Story = {
  name: 'Skills',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const skills = canvas.getAllByRole('listitem')
    const headings = canvas.getAllByRole('heading')

    await step('Render minimal 8 skills', () => {
      expect(skills.length).toBeGreaterThanOrEqual(8)
      expect(headings.length).toBeGreaterThanOrEqual(8)
    })
  }
}
