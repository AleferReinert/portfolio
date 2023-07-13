import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import NavMenuComponent from './NavMenu'

const meta: Meta<typeof NavMenuComponent> = {
  title: 'Components/NavMenu',
  component: NavMenuComponent
}

export default meta

type Story = StoryObj<typeof NavMenuComponent>

export const NavMenu: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const about = canvas.getByRole('link', { name: /sobre mim/ })
    const certificatesAndSkills = canvas.getByRole('link', {
      name: /certificados e skills/
    })
    const projects = canvas.getByRole('link', { name: /projetos/ })

    await step('Render links', () => {
      expect(about).toBeInTheDocument()
      expect(certificatesAndSkills).toBeInTheDocument()
      expect(projects).toBeInTheDocument()
    })
  }
}
