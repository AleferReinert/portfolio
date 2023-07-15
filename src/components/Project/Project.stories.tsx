import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ProjectComponent from './Project'
import { projects } from 'content/content'
import Container from 'components/Container/Container'
import { jsMediaQuery } from 'utils/helpers'
import theme from 'styles/theme'

const meta: Meta<typeof ProjectComponent> = {
  title: 'Components/Project',
  component: ProjectComponent,
  args: projects[0],
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

export const Project: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const description = canvas.getByLabelText(/descrição/i)
    const skills = canvas.getByLabelText(/skills/i)
    const repositoryLink = canvas.getByRole('link', { name: /repositório/i })
    const siteLink = canvas.getByRole('link', { name: /website/i })
    const img = canvas.getByRole('img', { name: /imagem do projeto/i })

    await step('Render title, description, skills, links and image', () => {
      expect(title).toBeInTheDocument()
      expect(description).toBeInTheDocument()
      expect(skills).toBeInTheDocument()
      expect(img).toBeInTheDocument()
      expect(repositoryLink).toHaveAttribute('href')
      expect(siteLink).toHaveAttribute('href')
    })
  }
}
