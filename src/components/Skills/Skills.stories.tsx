import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
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
    const imgs = canvas.getAllByRole('img')

    await step('Render icons with alt and title attributes', () => {
      for (const img of imgs) {
        const wrapper = img.parentElement?.parentElement

        expect(img).toHaveAttribute('alt')
        expect(wrapper).toHaveAttribute('title')
      }
    })
  }
}
