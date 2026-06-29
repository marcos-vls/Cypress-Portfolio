
describe('login', () => {
  it('Deve fazer o login com sucesso', () => {
    cy.login()
    cy.get('.qa-user-avatar').should('be.visible')

  })
})

