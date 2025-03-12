// Import cypress commands
import './commands';

// Prevent TypeScript from showing errors for Cypress commands
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here if needed
    }
  }
}
