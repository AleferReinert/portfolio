/// <reference types="@testing-library/cypress" />
/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'
import { hexToRgb } from './utils/hextToRgb'
export {}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

Cypress.Commands.add('checkTheme', (hex) => {
  let formatedColor = hex
  if (hex.length <= 7) {
    formatedColor = hexToRgb(hex)
  }
  cy.log(formatedColor)
  cy.get('[name="theme-color"]').should('have.attr', 'content', hex)
  cy.get('body').should('have.css', 'background-color', formatedColor)
})

Cypress.Commands.add('checkProjectsLength', (length) => {
  if (length > 0) {
    cy.get('[data-testid="ProjectComponent"]').then(($components) => {
      expect($components.length).to.be.equal(length)
    })
  } else {
    cy.get('[data-testid="ProjectComponent"]').should('not.exist')
  }
})

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Check body background-color and metatag theme-color.
       * @example cy.checkTheme('#fafafa')
       */
      checkTheme(hex: string): Chainable<void>

      checkProjectsLength(length: number): Chainable<void>
    }
  }
}
