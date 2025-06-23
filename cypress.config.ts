import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalRunAllSpecs: true
  },
  screenshotOnRunFailure: false,
  viewportWidth: 1024
})
