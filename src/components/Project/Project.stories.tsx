import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { projects } from 'app/content'
import { Project } from './Project'

const lastProject = projects.at(-1)

const meta: Meta<typeof Project> = {
  title: 'Components/Project',
  component: Project,
  args: { ...lastProject },
  argTypes: { lazy: { table: { disable: true } } },
  decorators: [
    (Story) => (
      <div className='p-4'>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof Project>

export const Default: Story = {
  name: 'Project',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Visible title', () => {
      const title = canvas.getByRole('heading', { level: 3 })
      waitFor(() => {
        expect(title).toBeVisible()
        expect(title).toHaveTextContent(lastProject!.title)
      })
    })

    await step('Visible year', () => {
      const year = canvas.getByLabelText('ano')
      waitFor(() => {
        expect(year).toBeVisible()
        expect(year).toHaveTextContent(lastProject!.year)
      })
    })

    await step('Visible shortDescription', () => {
      const shortDescription = canvas.getByLabelText('descrição')
      waitFor(() => {
        expect(shortDescription).toBeVisible()
        expect(shortDescription).toHaveTextContent(lastProject!.shortDescription)
      })
    })

    await step('Visible skills', () => {
      const skills = canvas.getByTitle(/tecnologias utilizadas/i)
      waitFor(() => {
        expect(skills).toBeVisible()
        expect(skills).toHaveTextContent(lastProject!.skills)
      })
    })

    await step('Visible img', () => {
      const img = canvas.getByRole('img', { name: /imagem do projeto/i })
      waitFor(() => {
        expect(img).toBeVisible()
        expect(img).toHaveAttribute('src', expect.stringContaining(lastProject!.img))
      })
    })
  }
}
