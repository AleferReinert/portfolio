import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import AboutComponent from './About'
import { about } from 'content/content'
import Container from 'components/Container/Container'

const meta: Meta<typeof AboutComponent> = {
  title: 'Components/About',
  component: AboutComponent,
  args: about,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ]
}

export default meta

type Story = StoryObj<typeof AboutComponent>

export const About: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const description = canvas.getByRole('paragraph')

    await step('Render heading and description', () => {
      expect(title).toBeInTheDocument()
      expect(description).toBeInTheDocument()
    })
  }
}
