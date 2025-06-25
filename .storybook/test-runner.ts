import { TestRunnerConfig, getStoryContext } from '@storybook/test-runner'

export const viewports = {
  xs: { name: 'Tailwind xs (320)', styles: { width: '320px', height: '100%' } },
  sm: { name: 'Tailwind sm (640)', styles: { width: '640px', height: '100%' } },
  md: { name: 'Tailwind md (768)', styles: { width: '768px', height: '100%' } },
  lg: { name: 'Tailwind lg (1024)', styles: { width: '1024px', height: '100%' } },
  xl: { name: 'Tailwind xl (1280)', styles: { width: '1920px', height: '1080px' } }
} as const

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 }

const config: TestRunnerConfig = {
  async preVisit(page, story) {
    const context = await getStoryContext(page, story)

    const viewportName = (context.parameters.viewport as { defaultViewport?: keyof typeof viewports })?.defaultViewport

    const viewportParameter = viewportName && viewports[viewportName]

    if (viewportParameter) {
      const viewportSize = Object.entries(viewportParameter.styles).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          [screen]: parseInt(size)
        }),
        {} as { width: number; height: number }
      )

      page.setViewportSize(viewportSize)
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE)
    }
  }
}
export default config
