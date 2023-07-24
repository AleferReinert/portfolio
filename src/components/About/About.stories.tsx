import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import AboutComponent from './About'
import { about } from 'content/content'
import Container from 'components/Container/Container'
import theme from 'styles/themes/dark'
import { jsMediaQuery } from 'utils/helpers'
import { breakpoints } from 'styles/global'

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
  parameters: {
    viewport: {
      defaultViewport: 'xsmall'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const name = canvas.getByRole('heading', { name: /alefer reinert/i })
    const role = canvas.getByRole('heading', {
      name: /desenvolvedor front end/i
    })
    const subtitle = canvas.queryByRole('heading', { name: /sobre mim/i })
    const description = canvas.getByRole('paragraph')

    await step('Render name, role and description', () => {
      expect(name).toHaveStyle({ color: theme.colors.heading })
      expect(role).toHaveStyle({ color: theme.colors.primary })
      expect(description).toBeInTheDocument()
    })

    jsMediaQuery.lessThan(breakpoints.small, async () => {
      await step('Without subtitle on mobile', () => {
        expect(subtitle).not.toBeInTheDocument()
      })
    })

    jsMediaQuery.greaterThan(breakpoints.small, async () => {
      await step('Render subtitle on desktop', () => {
        expect(subtitle).toBeInTheDocument()
      })
    })
  }
}
