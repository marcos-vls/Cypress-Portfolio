Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']")
      .type(user)

    cy.get("[data-qa-selector='password_field']")
      .type(password, { log: false })

    cy.get("[data-qa-selector='sign_in_button']")
      .click()

  }

  const validate = () => {
    cy.visit('/')
   
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
  
    }

  const options = {
    cacheAcrossSpecs: true,
    validate,
  
  }

  if (cacheSession) {
    cy.session(['gui-login', user], login, options)
  
  } else {
    login()
  
  }

})

Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar')
    .click()
  
  cy.get('[data-qa-selector="sign_out_link"]')
    .click()

})

Cypress.Commands.add('gui_createProject', (project) => {
  cy.visit('/projects/new')

  cy.get('#project_name')
    .type(project.name)
  
  cy.get('#project_description')
    .type(project.description)
  
  cy.get('#project_initialize_with_readme')
    .check()
  
  cy.contains('Create project')
    .click()

})

Cypress.Commands.add('gui_deleteProject', () => {
  cy.visit('/projects')

  cy.get(':nth-child(1) > .avatar-container > .project > .avatar')
    .click()
  
  cy.get('a.shortcuts-tree[href$="/edit"]')
    .click()
  
  cy.get('#js-project-advanced-settings > .settings-header > .settings-title')
    .click()
  
  cy.get(':nth-child(6) > form > .btn')
    .click()
  
  // Pega o texto do <code> e digita no input
  cy.get('.js-confirm-danger-match')
    .invoke('text')
    .then((texto) => {
      cy.get('#confirm_name_input')
        .type(texto)
    })

  cy.get('.qa-confirm-button')
    .click()

})

Cypress.Commands.add('gui_createIssue', (issue) => {
  cy.visit('/projects')

  cy.get(':nth-child(1) > .avatar-container > .project > .avatar')
    .click()

  cy.get('.qa-issues-item')
    .click()

  cy.get('#new_issue_link')
    .click()

  cy.get('.qa-issuable-form-title')
    .type(issue.title)

  cy.get('.qa-issuable-form-description')
    .type(issue.description)
  
  cy.get('.qa-issuable-create-button')
    .click()

})
