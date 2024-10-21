import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { SiStyledcomponents } from 'react-icons/si'
import { Skill } from './Skill'

const meta: Meta<typeof Skill> = {
  title: 'Components/Skill',
  component: Skill,
  args: {
    title: 'StyledComponents',
    icon: SiStyledcomponents
  }
}

export default meta
type Story = StoryObj<typeof Skill>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Has title in li', () => {
      const listItem = canvas.getByRole('listitem')
      expect(listItem).toHaveAttribute('title', 'StyledComponents')
    })

    await step('Visible svg', () => {
      const svg = canvas.getByRole('img')
      expect(svg).toBeVisible()
    })

    await step('Visible skill name', () => {
      const skillName = canvas.getByText('StyledComponents')
      waitFor(() => expect(skillName).toBeVisible())
    })
  }
}

export const WithShortTile: Story = {
  args: {
    shortTitle: 'CSSinJS'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('shortTitle attribute in heading', () => {
      const skillName = canvas.getByText('CSSinJS')
      expect(skillName).toBeVisible()
    })

    await step('Normal title attribute in title', () => {
      const listItem = canvas.getByRole('listitem')
      expect(listItem).toHaveAttribute('title', 'StyledComponents')
    })
  }
}
