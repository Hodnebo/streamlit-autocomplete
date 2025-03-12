/// <reference types="cypress" />

describe('Autocomplete Component', () => {
  beforeEach(() => {
    // Visit the development page before each test
    cy.visit('/');
  });

  it('should render correctly', () => {
    // Check that the component renders
    cy.contains('Autocomplete Component Dev Environment');
    cy.get('input').should('be.visible');
  });

  it('should show suggestions when typing a trigger character', () => {
    // Type a trigger character
    cy.get('input').type('#');

    // Check that suggestions are shown
    cy.get('.suggestions-dropdown').should('be.visible');
    cy.contains('react').should('be.visible');
    cy.contains('typescript').should('be.visible');
  });

  it('should filter suggestions based on input', () => {
    // Type a trigger character followed by text
    cy.get('input').type('#re');

    // Check that suggestions are filtered
    cy.get('.suggestions-dropdown').should('be.visible');
    cy.contains('react').should('be.visible');

    // Typescript should not be in the filtered list
    cy.contains('typescript').should('not.exist');
  });

  it('should select a suggestion on click', () => {
    // Type a trigger character
    cy.get('input').type('#');

    // Click on a suggestion
    cy.contains('react').click();

    // Check that the input contains the selected suggestion
    cy.get('input').should('have.value', '#react\u200B ');

    // Suggestions should be hidden after selection
    cy.get('.suggestions-dropdown').should('not.exist');
  });

  it('should navigate suggestions with keyboard', () => {
    // Type a trigger character
    cy.get('input').type('#');

    // First item should be highlighted by default
    cy.get('.suggestion-item').first().should('have.css', 'background-color', 'rgb(230, 247, 255)');

    // Press down arrow to move to the second item
    cy.get('input').type('{downarrow}');
    cy.get('.suggestion-item').eq(1).should('have.css', 'background-color', 'rgb(230, 247, 255)');

    // Press enter to select the suggestion
    cy.get('input').type('{enter}');
    cy.get('input').should('have.value', '#typescript\u200B ');
  });

  it('should handle multiple trigger characters', () => {
    // Test @ trigger
    cy.get('input').clear().type('@');
    cy.get('.suggestions-dropdown').should('be.visible');
    cy.contains('user1').should('be.visible');

    // Test / trigger
    cy.get('input').clear().type('/');
    cy.get('.suggestions-dropdown').should('be.visible');
    cy.contains('help').should('be.visible');
  });

  it('should maintain hover selection when filtering', () => {
    // Type a trigger character
    cy.get('input').type('#');

    // Hover over the second item (typescript)
    cy.contains('typescript').trigger('mouseover');

    // Second item should be highlighted
    cy.get('.suggestion-item').eq(1).should('have.css', 'background-color', 'rgb(230, 247, 255)');

    // Type more text that still matches the hovered item
    cy.get('input').type('ty');

    // The hovered item should still be highlighted
    cy.contains('typescript').should('have.css', 'background-color', 'rgb(230, 247, 255)');
  });
});
