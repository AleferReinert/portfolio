import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { jsMediaQuery } from 'utils/helpers'
import { projects } from 'content/content'
import Container from 'components/Container/Container'
import ProjectsComponent from './Projects'
import theme from 'styles/themes/dark'

const meta: Meta<typeof ProjectsComponent> = {
  title: 'Components/Projects',
  component: ProjectsComponent,
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

type Story = StoryObj<typeof ProjectsComponent>

export const Projects: Story = {
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

    jsMediaQuery.greaterThan(theme.breakpoints.small, async () => {
      await step('Alternate alignment between right and left', () => {
        for (let i = 0; i < projects.length; i++) {
          if (i % 2 === 0) {
            expect(projects[i]).toHaveStyle({ flexDirection: 'row' })
          } else {
            expect(projects[i]).toHaveStyle({ flexDirection: 'row-reverse' })
          }
        }
      })
    })
  }
}
