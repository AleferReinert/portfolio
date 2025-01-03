import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor } from '@storybook/test'
import HomeComponent from './page'

const meta: Meta<typeof HomeComponent> = {
  title: 'Pages/Home',
  component: HomeComponent
}

export default meta

type Story = StoryObj<typeof HomeComponent>

export const Home: Story = {
  play: async ({ step }) => {
    await step('Render section about', async () => {
      waitFor(() => {
        const about = document.getElementById('about')
        expect(about).toBeVisible()
      })
    })

    await step('Render section projects', async () => {
      waitFor(() => {
        const projects = document.getElementById('projects')
        expect(projects).toBeVisible()
      })
    })

    await step('Render section skills', async () => {
      waitFor(() => {
        const skills = document.getElementById('skills')
        expect(skills).toBeVisible()
      })
    })

    await step('Render section certificates', async () => {
      waitFor(() => {
        const certificates = document.getElementById('certificates')
        expect(certificates).toBeVisible()
      })
    })

    await step('Render section contact', async () => {
      waitFor(() => {
        const contact = document.getElementById('contact')
        expect(contact).toBeVisible()
      })
    })
  }
}
