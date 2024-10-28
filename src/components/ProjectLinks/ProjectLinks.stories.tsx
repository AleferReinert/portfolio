import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ProjectLinks } from './ProjectLinks'

const meta: Meta<typeof ProjectLinks> = {
  title: 'Components/ProjectLinks',
  args: {
    repositoryLink: '/repository-link'
  },
  component: ProjectLinks
}

export default meta
type Story = StoryObj<typeof ProjectLinks>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render GitHub', () => {
      const repositoryLink = canvas.getByRole('link', {
        name: 'GitHub'
      })
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

    await step('Render Storybook', () => {
      const storybookLink = canvas.getByRole('link', {
        name: 'Storybook'
      })
      expect(storybookLink).toHaveAttribute('href', '/storybook-link')
    })
  }
}

export const WithWebsite: Story = {
  args: {
    projectLink: '/project-link'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render website', () => {
      const projectLink = canvas.getByRole('link', {
        name: 'Visualizar'
      })
      expect(projectLink).toHaveAttribute('href', '/project-link')
    })
  }
}
