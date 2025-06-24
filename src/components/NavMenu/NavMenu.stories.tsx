import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { menu, socials } from 'content/layout'
import { NavMenu } from './NavMenu'

const meta: Meta<typeof NavMenu> = { title: 'Components/NavMenu', component: NavMenu, args: { menu: menu } }

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
      const githubLink = canvas.queryByRole('link', { name: socials[0].name })
      expect(githubLink).not.toBeInTheDocument()
    })
  }
}

export const WithGithub: Story = {
  args: { github: socials[0] },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('6 links', () => {
      const links = canvas.getAllByRole('link')
      expect(links.length).toBe(6)
    })

    await step('GitHub', () => {
      const githubLink = canvas.getByRole('link', { name: socials[0].name })
      const githubIcon = canvas.getByRole('img')
      expect(githubLink).toHaveAttribute('href', socials[0].url)
      expect(githubIcon).toBeVisible()
    })
  }
}
