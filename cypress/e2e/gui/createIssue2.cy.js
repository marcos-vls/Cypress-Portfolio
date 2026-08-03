import { faker } from '@faker-js/faker'

const options = { env: {snapshotOnly: true}}


describe('Create Project and Issue', options, () => {
  const issue = {
    title: `issue - ${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
        name:`Project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)

    }
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createProject(issue.project)

  })

  it('Deve criar uma issue no projeto criado com sucesso.', () => {
    cy.gui_createIssue2(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)

    cy.contains('Opened just now by')
      .should('be.visible')
        
  })

})