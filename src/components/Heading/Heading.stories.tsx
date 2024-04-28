import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { expect } from '@storybook/test'
import HeadingComponent from './Heading'

const meta: Meta<typeof HeadingComponent> = {
  title: 'Components/Heading',
  component: HeadingComponent,
  args: {
    children: 'Heading'
  }
}

export default meta

type Story = StoryObj<typeof HeadingComponent>

export const Heading: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')

    await step('Render heading', () => {
      expect(title).toBeInTheDocument()
      expect(title).toHaveStyle({
        borderBottomWidth: '1px'
      })
    })
  }
}
