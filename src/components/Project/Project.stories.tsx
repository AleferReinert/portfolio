import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Container from 'components/Container/Container'
import ProjectComponent from './Project'

const meta: Meta<typeof ProjectComponent> = {
  title: 'Components/Project',
  component: ProjectComponent,
  args: {
    title: 'My project',
    year: '2023',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    skills: 'React Next.js Jest',
    repositoryLink: '/repository-link',
    img: 'https://res.cloudinary.com/devalefer/image/upload/v1691172456/portfolio/projects/portfolio_cugysp.webp'
  },
  argTypes: {
    lazy: {
      table: { disable: true }
    }
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
    const title = canvas.getByRole('heading', { name: /my project/i })
    const year = canvas.getByLabelText('ano')
    const description = canvas.getByRole('paragraph')
    const skills = canvas.getByLabelText(/skills utilizadas/i)
    const repositoryLink = canvas.getByRole('link', {
      name: 'Repositório'
    })
    const img = canvas.getByRole('img', { name: /imagem do projeto/i })

    await step(
      'Render title, year, description, skills, repository and image',
      () => {
        expect(title).toBeInTheDocument()
        expect(year).toBeInTheDocument()
        expect(description).toHaveTextContent(/lorem ipsum dolor sit/i)
        expect(skills).toBeInTheDocument()
        expect(repositoryLink).toHaveAttribute('href', '/repository-link')
        expect(img).toBeInTheDocument()
      }
    )
  }
}

export const WithStorybookLink: Story = {
  args: {
    storybookLink: '/storybook-link'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const storybookLink = canvas.getByRole('link', {
      name: 'Storybook'
    })

    expect(storybookLink).toHaveAttribute('href', '/storybook-link')
  }
}

export const WithProjectLink: Story = {
  args: {
    projectLink: '/project-link'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const projectLink = canvas.getByRole('link', {
      name: 'Projeto'
    })

    expect(projectLink).toHaveAttribute('href', '/project-link')
  }
}
