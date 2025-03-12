import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    viewportWidth: 1000,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: 'st_autocomplete',
  video: true,
  screenshotOnRunFailure: true,
  watchForFileChanges: true,
});
