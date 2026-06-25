describe('logout',() => {
    beforeEach(() =>{
        cy.login()
    })
    it('Fazer o logout da página com sucesso.',() => {
  
      cy.get('.qa-user-avatar').click()
      cy.get('[data-qa-selector="sign_out_link"]').click()
      cy.url().should('contain', '/sign_in')

    }) 

})

