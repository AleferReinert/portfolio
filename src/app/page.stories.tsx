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
    await step('Render section about', async () => {
      await waitFor(() => {
        const about = document.getElementById('about')
        expect(about).toBeVisible()
      })
    })

    await step('Render section projects', async () => {
      await waitFor(() => {
        const projects = document.getElementById('projects')
        expect(projects).toBeVisible()
      })
    })

    await step('Render section skills', async () => {
      await waitFor(() => {
        const skills = document.getElementById('skills')
        expect(skills).toBeVisible()
      })
    })

    await step('Render section certificates', async () => {
      await waitFor(() => {
        const certificates = document.getElementById('certificates')
        expect(certificates).toBeVisible()
      })
    })

    await step('Render section contact', async () => {
      await waitFor(() => {
        const contact = document.getElementById('contact')
        expect(contact).toBeVisible()
      })
    })
  }
}
