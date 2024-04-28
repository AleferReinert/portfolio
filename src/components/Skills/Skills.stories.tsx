import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { expect } from '@storybook/test'
import { skills } from 'content/content'
import SkillsComponent from './Skills'
import Container from 'components/Container/Container'

const meta: Meta<typeof SkillsComponent> = {
  title: 'Components/Skills',
  component: SkillsComponent,
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

type Story = StoryObj<typeof SkillsComponent>

export const Skills: Story = {
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
