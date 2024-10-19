import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from 'components/Container/Container'
import { Project } from './Project'

const meta: Meta<typeof Project> = {
  title: 'Components/Project',
  component: Project,
  args: {
    title: 'My project',
    year: '2024',
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

type Story = StoryObj<typeof Project>

export const Default: Story = {
  name: 'Project',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /my project/i, level: 3 })
    const year = canvas.getByLabelText('ano')
    const shortDescription = canvas.getByLabelText('descrição')
    const skills = canvas.getByTitle(/tecnologias utilizadas/i)
    const img = canvas.getByRole('img', { name: /imagem do projeto/i })

    await step(
      'Render title, year, shortDescription, skills, repository and image',
      () => {
        expect(title).toBeVisible()
        expect(year).toBeVisible()
        expect(shortDescription).toHaveTextContent(/lorem ipsum dolor sit/i)
        expect(skills).toBeVisible()
        expect(img).toBeVisible()
      }
    )
  }
}
