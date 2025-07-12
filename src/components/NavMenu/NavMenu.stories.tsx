import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { menu } from 'components/Header/Header'
import { about } from 'content/about'
import { NavMenu } from './NavMenu'

const meta: Meta<typeof NavMenu> = {
  title: 'Components/NavMenu',
  component: NavMenu,
  args: { menu },
  decorators: Story => (
    <div className='p-4'>
      <Story />
    </div>
  )
}

export default meta
type Story = StoryObj<typeof NavMenu>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('5 links', () => {
      const links = canvas.getAllByRole('link')
      expect(links.length).toBe(5)
    })

    await step('GitHub hidden', () => {
      const githubLink = canvas.queryByRole('link', { name: 'GitHub' })
      expect(githubLink).not.toBeInTheDocument()
    })
  }
}

export const WithGithub: Story = {
  args: { github: about.socialLinks.find(link => link.name === 'GitHub') },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('6 links', () => {
      const links = canvas.getAllByRole('link')
      expect(links.length).toBe(6)
    })

    await step('GitHub', () => {
      const githubLink = canvas.getByRole('link', { name: 'GitHub' })
      const githubIcon = canvas.getByRole('img', { hidden: true })
      expect(githubLink).toHaveAttribute('href', about.socialLinks.find(link => link.name === 'GitHub')?.url)
      expect(githubIcon).toBeVisible()
    })
  }
}
