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
    const certificates = document.getElementById('certificates')
    const skills = document.getElementById('skills')

    await step('Render all sections', () => {
      expect(about).toBeInTheDocument()
      expect(projects).toBeInTheDocument()
      expect(certificates).toBeInTheDocument()
      expect(skills).toBeInTheDocument()
    })
  }
}
