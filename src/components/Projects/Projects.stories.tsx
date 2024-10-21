import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { projects } from 'app/content'
import { Projects } from './Projects'

const meta: Meta<typeof Projects> = {
  title: 'Components/Projects',
  component: Projects,
  args: {
    projects: projects
  }
}

export default meta
type Story = StoryObj<typeof Projects>

export const Default: Story = {
  name: 'Projects',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ProjectComponents = canvas.getAllByTestId('ProjectComponent')

    await step('Render heading', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toHaveTextContent('Projetos')
    })

    await step('Minimal 5 projects', () => {
      expect(ProjectComponents.length).toBeGreaterThanOrEqual(5)
    })

    await step('Image of first project without loading lazy', () => {
      const firstImage = canvas.getAllByRole('img')[0]
      expect(firstImage).not.toHaveAttribute('loading')
    })

    await step('Alternate alignment between right and left', () => {
      for (let i = 0; i < ProjectComponents.length; i++) {
        if (i % 2 === 0) {
          expect(ProjectComponents[i]).toHaveStyle({ flexDirection: 'row' })
        } else {
          expect(ProjectComponents[i]).toHaveStyle({
            flexDirection: 'row-reverse'
          })
        }
      }
    })
  }
}
