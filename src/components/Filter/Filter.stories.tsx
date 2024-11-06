import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { projects } from 'app/content/projects'
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
  play: async () => {
    // Testes com filtros no story Projects
  }
}
