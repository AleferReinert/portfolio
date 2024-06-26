import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { projects } from '../../content/content'
import { ProjectPage as ProjectPageComponent } from './ProjectPage'

const meta: Meta<typeof ProjectPageComponent> = {
  title: 'Pages/Project',
  component: ProjectPageComponent
}

export default meta

type Story = StoryObj<typeof ProjectPageComponent>

export const Project: Story = {
  args: {
    project: projects[0]
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'Findbook' })

    await step('Render title', () => {
      expect(title).toBeInTheDocument()
    })
  }
}
