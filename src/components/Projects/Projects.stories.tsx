import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { projects } from 'content/projects'
import { Projects } from './Projects'

const meta: Meta<typeof Projects> = {
  title: 'Components/Projects',
  component: Projects,
  args: { projects: projects },
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Projects>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ProjectComponents = await waitFor(() => canvas.getAllByTestId('ProjectComponent'))
    const FilterComponent = canvas.getByTestId('FilterComponent')
    const filterButton = canvas.getByRole('button', { name: 'Exibir filtros' })

    await step('Heading', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toHaveTextContent('Projetos')
    })

    await step('Minimal 5 projects', () => {
      expect(ProjectComponents.length).toBeGreaterThanOrEqual(5)
    })

    await step('Image of first project without loading lazy', () => {
      const firstImage = canvas.getAllByRole('img')[0]
      expect(firstImage).not.toHaveAttribute('loading')
    })

    await step('Alternate alignment between right and left', () => {
      for (let i = 0; i < ProjectComponents.length; i++) {
        if (i % 2 === 0) {
          expect(ProjectComponents[i]).toHaveStyle({ flexDirection: 'row' })
        } else {
          expect(ProjectComponents[i]).toHaveStyle({ flexDirection: 'row-reverse' })
        }
      }
    })

    await step('Open filters: all uncheck, hidden clear button', async () => {
      const skillsChecked = canvas.queryAllByRole('checkbox', { checked: true })
      const clearButton = canvas.queryByRole('button', { name: 'Limpar' })
      expect(FilterComponent).toHaveStyle({ 'max-height': '0' })
      userEvent.click(filterButton)
      await waitFor(() => {
        expect(FilterComponent).not.toHaveStyle({ 'max-height': '0' })
        expect(skillsChecked.length).toBe(0)
        expect(clearButton).not.toBeInTheDocument()
        expect(filterButton).toHaveAttribute('title', 'Ocultar filtros')
      })
    })

    await step('Selected only one skill', async () => {
      const tailwindSkill = canvas.getByLabelText('Tailwind')
      expect(tailwindSkill).not.toBeChecked()
      await userEvent.click(tailwindSkill)
      await waitFor(() => {
        expect(tailwindSkill).toBeChecked()
        expect(canvas.getByText(`Exibindo 11 de ${projects.length} projetos.`)).toBeVisible()
      })
    })

    await step('Selected multiple skills', async () => {
      const storybookSkill = canvas.getByLabelText('Storybook')
      expect(storybookSkill).not.toBeChecked()
      await userEvent.click(storybookSkill)
      await waitFor(() => {
        expect(storybookSkill).toBeChecked()
        expect(canvas.getByText(`Exibindo 7 de ${projects.length} projetos.`)).toBeVisible()
      })
    })

    await step('Filter without results', async () => {
      const gulpkSkill = canvas.getByLabelText('Gulp')
      expect(gulpkSkill).not.toBeChecked()
      await userEvent.click(gulpkSkill)
      await waitFor(() => {
        expect(gulpkSkill).toBeChecked()
        expect(canvas.getByText('Nenhum projeto encontrado contendo todos os filtros selecionados.')).toBeVisible()
      })
    })

    await step('Clear all filters on click button Limpar', async () => {
      const clearButton = canvas.queryByRole('button', { name: 'Limpar' })
      await userEvent.click(clearButton!)
      const skillsChecked = canvas.queryAllByRole('checkbox', { checked: true })
      expect(skillsChecked.length).toBe(0)
    })

    await step('Close filter on click button', async () => {
      await userEvent.click(filterButton)
      await waitFor(() => {
        expect(FilterComponent).toHaveStyle({ 'max-height': '0' })
        expect(filterButton).toHaveAttribute('title', 'Exibir filtros')
      })
    })
  }
}
