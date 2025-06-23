describe('Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
  })

  it('Open and close menu', () => {
    cy.findByRole('button', { name: 'Abrir menu' }).click()
    cy.findByTestId('MenuMobileComponent').within(() => {
      cy.findByTestId('NavMenuComponent').should('be.visible')
    })

    cy.findByRole('button', { name: 'Fechar menu' }).click()
    cy.findByTestId('MenuMobileComponent').within(() => {
      cy.findByTestId('NavMenuComponent').should('not.be.visible')
    })
  })
})
