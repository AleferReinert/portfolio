import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ProjectLinks } from './ProjectLinks'

const meta: Meta<typeof ProjectLinks> = {
  title: 'Components/ProjectLinks',
  args: {
    repositoryUrl: 'https://repository-url.com',
    projectUrl: 'https://project-url.com'
  },
  component: ProjectLinks,
  decorators: (Story) => (
    <div className='p-4'>
      <Story />
    </div>
  )
}

export default meta
type Story = StoryObj<typeof ProjectLinks>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('PageSpeed Insights url', () => {
      const repositoryUrl = canvas.getByRole('link', { name: 'PageSpeed Insights' })
      expect(repositoryUrl).toHaveAttribute(
        'href',
        'https://pagespeed.web.dev/analysis?url=https://project-url.com&form_factor=desktop'
      )
    })

    await step('GitHub url', () => {
      const repositoryUrl = canvas.getByRole('link', { name: 'GitHub' })
      expect(repositoryUrl).toHaveAttribute('href', 'https://repository-url.com')
    })

    await step('Project url', () => {
      const projectUrl = canvas.getByRole('link', { name: 'Visualizar' })
      expect(projectUrl).toHaveAttribute('href', 'https://project-url.com')
    })
  }
}

export const WithStorybook: Story = {
  args: {
    storybookUrl: 'https://storybook-url.com'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Storybook', () => {
      const storybookUrl = canvas.getByRole('link', { name: 'Storybook' })
      expect(storybookUrl).toHaveAttribute('href', 'https://storybook-url.com')
    })

    await step('SVGs with aria-hidden', () => {
      const svgs = canvas.getAllByRole('img', { hidden: true })
      for (let i = 0; i < svgs.length; i++) {
        expect(svgs[i]).toBeVisible()
        expect(svgs[i]).toHaveAttribute('aria-hidden', 'true')
      }
    })
  }
}
