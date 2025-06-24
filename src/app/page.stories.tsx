import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor } from '@storybook/test'
import HomeComponent from './page'

const meta: Meta<typeof HomeComponent> = {
  title: 'Pages/Home',
  component: HomeComponent,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' }
}

export default meta

type Story = StoryObj<typeof HomeComponent>

export const Home: Story = {
  play: async ({ step }) => {
    await step('Sections: About, Projects, Skills, Certificates and Contact', async () => {
      await waitFor(() => {
        expect(document.getElementById('about')).toBeVisible()
        expect(document.getElementById('projects')).toBeVisible()
        expect(document.getElementById('skills')).toBeVisible()
        expect(document.getElementById('certificates')).toBeVisible()
        expect(document.getElementById('contact')).toBeVisible()
      })
    })
  }
}
