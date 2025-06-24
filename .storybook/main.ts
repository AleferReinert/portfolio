import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y'
  ],
  framework: { name: '@storybook/nextjs', options: {} },
  docs: {
    autodocs: true
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
