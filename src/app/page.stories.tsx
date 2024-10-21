import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import HomeComponent from './page'

const meta: Meta<typeof HomeComponent> = {
  title: 'Pages/Home',
  component: HomeComponent
}

export default meta

type Story = StoryObj<typeof HomeComponent>

export const Home: Story = {
  play: async ({ step }) => {
    const about = document.getElementById('about')
    const projects = document.getElementById('projects')
    const skills = document.getElementById('skills')
    const certificates = document.getElementById('certificates')
    const contact = document.getElementById('contact')

    await step('Render all sections', () => {
      expect(about).toBeVisible()
      expect(projects).toBeVisible()
      expect(skills).toBeVisible()
      expect(certificates).toBeVisible()
      expect(contact).toBeVisible()
    })
  }
}
