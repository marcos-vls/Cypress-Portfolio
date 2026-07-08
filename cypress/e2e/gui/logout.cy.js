describe('logout',() => {
    beforeEach(() =>{
      cy.login()
      
      cy.visit('/')
    
    })
    
    it('Fazer o logout da página com sucesso.',() => {
      cy.logout()
      cy.url()
        .should('contain', '/sign_in')

    }) 

})

