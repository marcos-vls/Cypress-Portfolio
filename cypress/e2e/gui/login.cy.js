
describe('login', () => {
  it('Deve fazer o login com sucesso', () => {
    cy.login()
    cy.get('[data-qa-selector="welcome_title_content"]').should('be.visible')

  })
})

