import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { projects } from 'content/projects'
import { skills } from 'content/skills'
import { Filter } from './Filter'

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  args: {
    showFilters: true,
    skills: skills.map((skill) => skill.title),
    selectedSkills: [],
    setSelectedSkills: fn(),
    filteredProjects: projects,
    projects: projects
  },
  decorators: (Story) => (
    <div className='p-4'>
      <Story />
    </div>
  )
}

export default meta
type Story = StoryObj<typeof Filter>

export const Default: Story = {}
