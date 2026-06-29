describe('Delete Project', () => {
    beforeEach(() =>{
        cy.login()

    })
    it('Deve excluir o projeto com sucesso.', () => {
     
        cy.get(':nth-child(1) > .avatar-container > .project > .avatar').click()
        cy.get('a.shortcuts-tree[href$="/edit"]').click()
        cy.get('#js-project-advanced-settings > .settings-header > .settings-title').click()
        cy.get(':nth-child(6) > form > .btn').click()

        // Pega o texto do <code> e digita no input
        cy.get('.js-confirm-danger-match')
        .invoke('text')
        .then((texto) => {
            cy.get('#confirm_name_input')
            .type(texto)
          })
        cy.get('.qa-confirm-button').click()
        
        cy.contains('is in the process of being deleted.').should('be.visible')


        
          


    })



})