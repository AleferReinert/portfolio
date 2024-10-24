import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import { projects } from 'app/content'
import { Filter } from './Filter'

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  args: {
    showFilters: true,
    skills: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    selectedSkills: [],
    setSelectedSkills: fn(),
    filteredProjects: projects,
    projects: projects
  }
}

export default meta
type Story = StoryObj<typeof Filter>

export const Default: Story = {
  name: 'Filter',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Exibe todas skills', async () => {
      const checkboxes = canvas.getAllByRole('checkbox')
      expect(checkboxes.length).toBe(4)
    })

    await step('Executa setSelectedSkills() ao clicar em Limpar', async () => {
      const clearButton = canvas.getByRole('button')
      userEvent.click(clearButton)
      waitFor(() => {
        expect(args.setSelectedSkills).toHaveBeenCalled()
      })
    })

    // Mais testes com filtros no story Projects
  }
}
