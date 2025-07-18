describe('Desktop', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Change theme', () => {
    cy.checkTheme('#070707')
    cy.get('[data-testid="SwitchComponent"]').click()
    cy.checkTheme('#efefef')
    cy.get('[data-testid="SwitchComponent"]').click()
    cy.checkTheme('#070707')
  })

  it('Change filters', () => {
    const totalProjects = 14
    cy.wait(800)
    cy.findByTestId('FilterComponent').should('be.hidden')
    cy.findByTestId('FilterBadge').should('have.attr', 'title', '').should('have.attr', 'aria-hidden', 'true')
    cy.checkProjectsLength(totalProjects)

    cy.findByRole('button', { name: 'Exibir filtros' }).click()
    cy.findByTestId('FilterComponent').should('be.visible')
    cy.findByText(`Exibindo ${totalProjects} de ${totalProjects} projetos.`)

    cy.contains('label', 'React').click()
    cy.findByTestId('FilterBadge').should('have.attr', 'title', '1 filtro selecionado').should('be.visible')
    cy.findByText(`Exibindo 12 de ${totalProjects} projetos.`)
    cy.findByRole('button', { name: 'Limpar' }).should('be.visible')
    cy.checkProjectsLength(12)

    cy.contains('label', 'Storybook').click()
    cy.findByTestId('FilterBadge').should('have.attr', 'title', '2 filtros selecionados').should('be.visible')
    cy.findByText(`Exibindo 7 de ${totalProjects} projetos.`)
    cy.checkProjectsLength(7)

    cy.contains('label', 'Less').click()
    cy.checkProjectsLength(0)
    cy.findByText('Nenhum projeto encontrado contendo todos os filtros selecionados.')

    cy.findByRole('button', { name: 'Limpar' }).click()
    cy.findByTestId('FilterBadge').should('have.attr', 'aria-hidden', 'true')
    cy.findByText(`Exibindo ${totalProjects} de ${totalProjects} projetos.`)
    cy.checkProjectsLength(totalProjects)

    cy.findByRole('button', { name: 'Ocultar filtros' }).click()
    cy.findByTestId('FilterComponent').should('be.hidden')
  })
})
