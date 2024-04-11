import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { about } from 'content/content'
import { jsMediaQuery } from 'utils/helpers'
import AboutComponent from './About'
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
    const name = canvas.getByRole('heading', { name: /alefer reinert/i })
    const role = canvas.getByRole('heading', {
      name: /desenvolvedor front end/i
    })
    const subtitle = canvas.queryByRole('heading', { name: /sobre mim/i })
    const description = canvas.getByRole('paragraph')

    await step('Render name, role and description', () => {
      expect(name).toBeInTheDocument()
      expect(role).toBeInTheDocument()
      expect(description).toBeInTheDocument()
    })

    jsMediaQuery.lessThan('small', async () => {
      await step('Without subtitle on mobile', () => {
        expect(subtitle).not.toBeInTheDocument()
      })
    })

    jsMediaQuery.greaterThan('small', async () => {
      await step('Render subtitle on desktop', () => {
        expect(subtitle).toBeInTheDocument()
      })
    })
  }
}
