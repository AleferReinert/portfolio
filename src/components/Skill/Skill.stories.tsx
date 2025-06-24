import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { SiStyledcomponents, SiTailwindcss } from 'react-icons/si'
import { Skill } from './Skill'

const meta: Meta<typeof Skill> = {
  title: 'Components/Skill',
  component: Skill,
  decorators: (Story) => {
    return (
      <div className='size-36'>
        <Story />
      </div>
    )
  }
}

export default meta
type Story = StoryObj<typeof Skill>

export const Default: Story = {
  args: { title: 'Tailwind', iconAction: SiTailwindcss },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Not render title in <li>', () => {
      const listItem = canvas.getByRole('listitem')
      expect(listItem).not.toHaveAttribute('title', 'Tailwind')
    })

    await step('Svg', () => {
      const svg = canvas.getByRole('img', { hidden: true })
      waitFor(() => {
        expect(svg).toBeVisible()
      })
    })

    await step('Skill name', () => {
      const skillName = canvas.getByText('Tailwind')
      waitFor(() => expect(skillName).toBeVisible())
    })
  }
}

export const WithShortTile: Story = {
  args: { title: 'StyledComponents', iconAction: SiStyledcomponents, shortTitle: 'CSSinJS' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('shortTitle attribute in heading', async () => {
      const skillName = canvas.getByText('CSSinJS')
      await waitFor(() => {
        expect(skillName).toBeVisible()
      })
    })

    await step('Title in <li>', () => {
      const listItem = canvas.getByRole('listitem')
      expect(listItem).toHaveAttribute('title', 'StyledComponents')
    })
  }
}
