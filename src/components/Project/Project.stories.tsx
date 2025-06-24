import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { projects } from 'content/projects'
import { Project } from './Project'

const lastProject = projects.at(-1)

const meta: Meta<typeof Project> = {
  title: 'Components/Project',
  component: Project,
  args: { ...lastProject },
  argTypes: { lazy: { table: { disable: true } } },
  parameters: {
    layout: 'padded',
    a11y: { config: { rules: [{ id: 'listitem', enabled: false }] } }
  }
}

export default meta
type Story = StoryObj<typeof Project>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 3 })
      waitFor(() => {
        expect(title).toBeVisible()
        expect(title).toHaveTextContent(lastProject!.title)
      })
    })

    await step('Year', () => {
      const year = canvas.getByRole('time')
      waitFor(() => {
        expect(year).toBeVisible()
        expect(year).toHaveTextContent(lastProject!.year)
      })
    })

    await step('Description', () => {
      const description = canvas.getByRole('paragraph')
      waitFor(() => {
        expect(description).toBeVisible()
        expect(description).toHaveTextContent(lastProject!.description)
      })
    })

    await step('Skills', () => {
      const list = canvas.getByRole('list', { name: 'Tecnologias utilizadas' })
      const skills = within(list).getAllByRole('listitem')
      waitFor(() => {
        expect(list).toBeVisible()
        expect(skills.length).toBe(3)
      })
    })

    await step('Image', () => {
      const img = canvas.getByRole('img', { name: 'Visualização do projeto em smartphone, tablet e desktop' })
      waitFor(() => {
        expect(img).toBeVisible()
        expect(img).toHaveAttribute('src', expect.stringContaining(lastProject!.img))
      })
    })
  }
}
