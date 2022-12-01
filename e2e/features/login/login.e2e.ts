describe('Login', () => {
  it('should login successfully', () => {
    cy.login();
    cy.visit('/');
    cy.url().should('not.contain', '/login');
  });
});
