
describe('login', () => {
  it('Deve fazer o login com sucesso', () => {
        
    cy.login()

    cy.url().should('contain', 'http://localhost/')

  })
})