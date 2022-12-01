export class RxjsHelpers {
  before() {
    Cypress.LocalStorage.clear();
    cy.login();
  }

  after() {
    Cypress.LocalStorage.clear();
    Cypress.Cookies.clear();
  }

  wait(ms: number) {
    cy.wait(ms);
    return this;
  }

  goChecks(callback) {
    callback();
    return this;
  }

  logout() {
    cy.get('#menu').click();
    cy.wait(200);
    cy.get('ul').find('li.logout').click();
  }

  navigateToPage(){
// 
return this;
  }

  selectbutton(){
// 
return this;
  }