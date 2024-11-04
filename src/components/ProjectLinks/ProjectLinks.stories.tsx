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

    await step('Render GitHub link', () => {
      const repositoryLink = canvas.getByRole('link', {
        name: 'GitHub'
      })
      expect(repositoryLink).toHaveAttribute('href', '/repository-link')
    })

    await step('Render svg with aria-hidden', () => {
      const svg = canvas.getByRole('img', { hidden: true })
      expect(svg).toHaveAttribute('aria-hidden', 'true')
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

    await step('Render all svgs with aria-hidden', () => {
      const svgs = canvas.getAllByRole('img', { hidden: true })
      expect(svgs.length).toBe(2)
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

    await step('Render all svgs with aria-hidden', () => {
      const svgs = canvas.getAllByRole('img', { hidden: true })
      expect(svgs.length).toBe(2)
    })
  }
}
