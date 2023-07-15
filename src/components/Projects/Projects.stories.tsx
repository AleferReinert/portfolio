import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { jsMediaQuery } from 'utils/helpers'
import { projects } from 'content/content'
import Container from 'components/Container/Container'
import ProjectsComponent from './Projects'
import theme from 'styles/theme'

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
    const titles = canvas.getAllByRole('heading')

    await step('Minimal two projects', () => {
      expect(titles.length).toBeGreaterThan(1)
    })

    jsMediaQuery.greaterThan(theme.breakpoints.small, async () => {
      await step('Alternate alignment between right and left', () => {
        for (let i = 0; i < titles.length; i++) {
          const wrapper = titles[i].parentElement?.parentElement
          if (i % 2 === 0) {
            expect(wrapper).toHaveStyle({ flexDirection: 'row' })
          } else {
            expect(wrapper).toHaveStyle({ flexDirection: 'row-reverse' })
          }
        }
      })
    })
  }
}
