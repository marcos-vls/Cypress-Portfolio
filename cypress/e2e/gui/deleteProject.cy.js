describe('Delete Project', () => {
    beforeEach(() =>{
      cy.login()

    })
    
    it('Deve excluir o projeto com sucesso.', () => {
      cy.gui_deleteProject()
        
      cy.contains('is in the process of being deleted.')
        .should('be.visible')

    })

})