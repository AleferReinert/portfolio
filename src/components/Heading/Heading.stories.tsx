import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import HeadingComponent from './Heading'
import theme from 'styles/theme'

const meta: Meta<typeof HeadingComponent> = {
  title: 'Components/Heading',
  component: HeadingComponent,
  args: {
    title: 'Heading'
  }
}

export default meta

type Story = StoryObj<typeof HeadingComponent>

export const Heading: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: args.title })

    await step('Render heading', () => {
      expect(title).toBeInTheDocument()
      expect(title).toHaveStyle({
        borderBottom: `1px solid ${theme.colors.primary}`
      })
    })
  }
}
