import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ProjectLinks as ProjectLinksComponent } from './ProjectLinks'

const meta: Meta<typeof ProjectLinksComponent> = {
  title: 'Components/ProjectLinks',
  args: {
    repositoryLink: '/repository-link'
  },
  component: ProjectLinksComponent
}

export default meta

type Story = StoryObj<typeof ProjectLinksComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const repositoryLink = canvas.getByRole('link', {
      name: 'Repositório'
    })

    await step('Render GitHub', () => {
      expect(repositoryLink).toHaveAttribute('href', '/repository-link')
    })
  }
}

export const WithStorybook: Story = {
  args: {
    storybookLink: '/storybook-link'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const storybookLink = canvas.getByRole('link', {
      name: 'Storybook'
    })

    await step('Render Storybook', () => {
      expect(storybookLink).toHaveAttribute('href', '/storybook-link')
    })
  }
}

export const WithProject: Story = {
  args: {
    projectLink: '/project-link'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const projectLink = canvas.getByRole('link', {
      name: 'Visualizar'
    })

    await step('Render project', () => {
      expect(projectLink).toHaveAttribute('href', '/project-link')
    })
  }
}
