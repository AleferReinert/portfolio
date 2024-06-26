import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
import ProjectComponent from './Project'

const meta: Meta<typeof ProjectComponent> = {
  title: 'Components/Project',
  component: ProjectComponent,
  args: {
    title: 'My project',
    year: '2023',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    skills: 'React Next.js Jest',
    repositoryLink: '/repository-link',
    img: '/img/projects/portfolio.webp'
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

export const Project: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /my project/i })
    const year = canvas.getByLabelText('ano')
    const shortDescription = canvas.getByRole('paragraph')
    const skills = canvas.getByLabelText(/skills utilizadas/i)
    const img = canvas.getByRole('img', { name: /imagem do projeto/i })

    await step(
      'Render title, year, shortDescription, skills, repository and image',
      () => {
        expect(title).toBeInTheDocument()
        expect(year).toBeInTheDocument()
        expect(shortDescription).toHaveTextContent(/lorem ipsum dolor sit/i)
        expect(skills).toBeInTheDocument()
        expect(img).toBeInTheDocument()
      }
    )
  }
}
