import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ProjectComponent from './Project'
import Container from 'components/Container/Container'
import { jsMediaQuery } from 'utils/helpers'
import theme from 'styles/theme'

const meta: Meta<typeof ProjectComponent> = {
  title: 'Components/Project',
  component: ProjectComponent,
  args: {
    title: 'My project',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    skills: 'React Next.js TypeScript StyledComponents Strapi',
    repositoryLink: '/repository',
    websiteLink: '/site',
    img: 'img/projects/tic-tac-toe.png'
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

type Story = StoryObj<typeof ProjectComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const description = canvas.getByText(/lorem ipsum/i)
    const skills = canvas.getByText(/react next/i)
    const img = canvas.getByRole('img', { name: /imagem do projeto/i })
    const repositoryLink = canvas.getAllByRole('link')[0]
    const siteLink = canvas.getAllByRole('link')[1]
    const wrapper = title.parentElement?.parentElement

    await step('Render title, description, skills and image', () => {
      expect(title).toBeInTheDocument()
      expect(description).toBeInTheDocument()
      expect(skills).toBeInTheDocument()
      expect(img).toBeInTheDocument()
    })

    await step('Render two links', () => {
      expect(repositoryLink).toHaveAttribute('href', '/repository')
      expect(siteLink).toHaveAttribute('href', '/site')
    })

    jsMediaQuery.greaterThan(theme.breakpoint.small, async () => {
      await step('Direction right as default', () => {
        expect(wrapper).toHaveStyle({ flexDirection: 'row-reverse' })
      })
    })
  }
}

export const DirectionLeft: Story = {
  args: {
    direction: 'left'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const wrapper = title.parentElement?.parentElement

    jsMediaQuery.greaterThan(theme.breakpoint.small, async () => {
      await step('Direction left', () => {
        expect(wrapper).toHaveStyle({ flexDirection: 'row' })
      })
    })
  }
}
