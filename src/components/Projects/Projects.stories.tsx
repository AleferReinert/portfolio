import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { projects } from 'app/content'
import { Projects } from './Projects'

const meta: Meta<typeof Projects> = {
  title: 'Components/Projects',
  component: Projects,
  args: {
    projects: projects
  }
}

export default meta
type Story = StoryObj<typeof Projects>

export const Default: Story = {
  name: 'Projects',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ProjectComponents = canvas.getAllByTestId('ProjectComponent')
    const FilterComponent = canvas.getByTestId('FilterComponent')
    const filterButton = canvas.getByRole('button', { name: 'Abrir filtros' })

    await step('Render heading', () => {
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
          expect(ProjectComponents[i]).toHaveStyle({
            flexDirection: 'row-reverse'
          })
        }
      }
    })

    await step('Open filters: all uncheck, hidden clear button and text with all projects', async () => {
      const skillsChecked = canvas.queryAllByRole('checkbox', { checked: true })
      const clearButton = canvas.queryByRole('button', { name: 'Limpar' })
      expect(FilterComponent).toHaveStyle({ 'max-height': '0' })
      userEvent.click(filterButton)
      await waitFor(() => {
        expect(FilterComponent).not.toHaveStyle({ 'max-height': '0' })
        expect(skillsChecked.length).toBe(0)
        expect(canvas.getByText('Exibindo 8 de 8 projetos.')).toBeVisible()
        expect(clearButton).not.toBeInTheDocument()
        expect(filterButton).toHaveAttribute('title', 'Fechar filtros')
      })
    })

    await step('Selected only one skill', () => {
      const tailwindSkill = canvas.getByLabelText('Tailwind')
      expect(tailwindSkill).not.toBeChecked()
      userEvent.click(tailwindSkill)
      waitFor(() => {
        expect(tailwindSkill).toBeChecked()
        expect(canvas.getByText('Exibindo 5 de 8 projetos.')).toBeVisible()
      })
    })

    await step('Selected multiple skills', () => {
      const storybookSkill = canvas.getByLabelText('Storybook')
      expect(storybookSkill).not.toBeChecked()
      userEvent.click(storybookSkill)
      waitFor(() => {
        expect(storybookSkill).toBeChecked()
        expect(canvas.getByText('Exibindo 2 de 8 projetos.')).toBeVisible()
      })
    })

    await step('Filter without results', () => {
      const gulpkSkill = canvas.getByLabelText('Gulp')
      expect(gulpkSkill).not.toBeChecked()
      userEvent.click(gulpkSkill)
      waitFor(() => {
        expect(gulpkSkill).toBeChecked()
        expect(canvas.getByText('Exibindo 0 de 8 projetos.')).toBeVisible()
      })
    })

    await step('Clear all filters on click button Limpar', () => {
      const clearButton = canvas.queryByRole('button', { name: 'Limpar' })
      userEvent.click(clearButton!)
      const skillsChecked = canvas.queryAllByRole('checkbox', { checked: true })
      expect(skillsChecked.length).toBe(0)
    })

    await step('Close filter on click button', async () => {
      userEvent.click(filterButton)
      await waitFor(() => {
        expect(FilterComponent).toHaveStyle({ 'max-height': '0' })
        expect(filterButton).toHaveAttribute('title', 'Abrir filtros')
      })
    })

    await step('Ignore this test, is only to reset story after tests', async () => {
      const clearButton = canvas.getByRole('button', { name: 'Limpar' })
      userEvent.click(filterButton)
      await waitFor(() => {
        userEvent.click(clearButton!)
        userEvent.click(filterButton)
      })
    })
  }
}
