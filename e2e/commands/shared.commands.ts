
declare global {
  namespace Cypress {
    interface Chainable {
      clickOnDiv: typeof clickOnDiv;
      clickCloseButton: typeof clickCloseButton;
      clickButtonByText: typeof clickButtonByText;
    }
  }
}

export function clickOnDivClass(label: string) {
  cy.get(`div[class*="${class}"]`).click();
}

export function clickCloseButton() {
  return cy.get('icon.close').click();
}

export function clickButtonByText(text: string, index: number = 0) {
  return cy.get('btn').contains(text).eq(index).click();
}
