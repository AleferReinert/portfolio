import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { projects } from 'app/content'
import { Container } from 'components/Container/Container'
import { Projects } from './Projects'

const meta: Meta<typeof Projects> = {
  title: 'Components/Projects',
  component: Projects,
  args: {
    projects: projects
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Projects>

export const Default: Story = {
  name: 'Projects',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const projects = canvas.getAllByRole('listitem')
    const firstImage = canvas.getAllByRole('img')[0]

    await step('Minimal two projects', () => {
      expect(projects.length).toBeGreaterThan(1)
    })

    await step('First image without loading lazy', () => {
      expect(firstImage).not.toHaveAttribute('loading')
    })

    await step('Alternate alignment between right and left', () => {
      for (let i = 0; i < projects.length; i++) {
        if (i % 2 === 0) {
          expect(projects[i]).toHaveStyle({ flexDirection: 'row' })
        } else {
          expect(projects[i]).toHaveStyle({ flexDirection: 'row-reverse' })
        }
      }
    })
  }
}
