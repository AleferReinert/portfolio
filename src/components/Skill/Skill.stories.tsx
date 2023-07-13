import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import SkillComponent from './Skill'

const meta: Meta<typeof SkillComponent> = {
  title: 'Components/Skill',
  component: SkillComponent,
  args: {
    title: 'React',
    img: 'img/skills/react.svg'
  }
}

export default meta

type Story = StoryObj<typeof SkillComponent>

export const Skill: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img', { name: /react/i })
    const wrapper = img.parentElement?.parentElement

    await step('Render icon', () => {
      expect(img).toHaveAttribute('alt', 'React')
    })

    await step('Wrapper with title attribute', () => {
      expect(wrapper).toHaveAttribute('title', 'React')
    })
  }
}
