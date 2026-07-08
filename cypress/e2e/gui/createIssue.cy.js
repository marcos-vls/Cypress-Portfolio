
import { faker, Faker } from "@faker-js/faker"

describe('Create Issue', () => {
    beforeEach(() =>{
      cy.login()

    }) 
    it('Deve criar uma issue em um projeto no gitlab', () => {
      const issue = {
        title: `Issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3)
        }    
          
      cy.gui_createIssue(issue)        

      cy.contains('Opened just now by')
        .should('be.visible')

    }) 

})