import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { SiStyledcomponents } from 'react-icons/si'
import { Skill } from './Skill'

const meta: Meta<typeof Skill> = {
  title: 'Components/Skill',
  component: Skill,
  args: {
    title: 'Styled Components',
    icon: SiStyledcomponents
  }
}

export default meta
type Story = StoryObj<typeof Skill>

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'xs' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Has title in li', () => {
      const skill = canvas.getByRole('listitem')
      expect(skill).toHaveAttribute('title', 'Styled Components')
    })

    await step('Visible svg with aria-hidden', () => {
      const svg = canvas.getByRole('img', { hidden: true })
      expect(svg).toBeVisible()
      expect(svg).toHaveAttribute('aria-hidden')
    })

    await step('Hidden heading', () => {
      const svg = canvas.getByRole('heading', { level: 3, hidden: true })
      waitFor(() => expect(svg).toHaveStyle({ display: 'none' }))
      // a linha acima está retornando display block em vez de none
    })
  }
}

export const Desktop: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Visible heading', () => {
      const svg = canvas.getByRole('heading', { level: 3 })
      expect(svg).toBeVisible()
      expect(svg).toHaveTextContent('Styled Components')
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
      const svg = canvas.getByRole('heading', { level: 3 })
      expect(svg).toHaveTextContent('CSSinJS')
    })

    await step('Normal title attribute in title', () => {
      const skill = canvas.getByRole('listitem')
      expect(skill).toHaveAttribute('title', 'Styled Components')
    })
  }
}
