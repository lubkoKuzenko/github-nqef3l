declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
    }
  }
}

export function login(name: string, password: string) {
  // login
  cy.get('#name').type(name);
  cy.get('#password').type(password);

  cy.url().should('not.contain', '/login');
}
