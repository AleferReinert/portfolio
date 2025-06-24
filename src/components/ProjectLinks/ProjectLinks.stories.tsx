import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ProjectLinks } from './ProjectLinks'

const meta: Meta<typeof ProjectLinks> = {
  title: 'Components/ProjectLinks',
  args: { repositoryUrl: '/repository-link' },
  component: ProjectLinks
}

export default meta
type Story = StoryObj<typeof ProjectLinks>

export const Default: Story = {
  name: 'GitHub (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('GitHub url', () => {
      const repositoryUrl = canvas.getByRole('link', { name: 'GitHub' })
      expect(repositoryUrl).toHaveAttribute('href', '/repository-link')
    })

    await step('Svg with aria-hidden', () => {
      const svg = canvas.getByRole('img', { hidden: true })
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    })
  }
}

export const WithStorybook: Story = {
  args: { storybookUrl: '/storybook-link' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Storybook', () => {
      const storybookUrl = canvas.getByRole('link', { name: 'Storybook' })
      expect(storybookUrl).toHaveAttribute('href', '/storybook-link')
    })

    await step('All svgs with aria-hidden', () => {
      const svgs = canvas.getAllByRole('img', { hidden: true })
      expect(svgs.length).toBe(2)
    })
  }
}

export const WithProject: Story = {
  args: { projectUrl: '/project-link' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Project url', () => {
      const projectUrl = canvas.getByRole('link', { name: 'Visualizar' })
      expect(projectUrl).toHaveAttribute('href', '/project-link')
    })

    await step('Render all svgs with aria-hidden', () => {
      const svgs = canvas.getAllByRole('img', { hidden: true })
      expect(svgs.length).toBe(2)
    })
  }
}
