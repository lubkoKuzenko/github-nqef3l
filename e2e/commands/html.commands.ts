declare global {
  namespace Cypress {
    interface Chainable {
      getByDataAttribute: typeof getByDataAttribute;
      getByDataTestAttribute: typeof getByDataTestAttribute;
      getTagWithAttribute: typeof getTagWithAttribute;
    }
  }
}

export function getByDataTestAttribute(value: string) {
  return getByDataAttribute('test', value);
}

export function getByDataAttribute(dataAttributeName: string, value: string) {
  return cy.get(`[data-${dataAttributeName}=${value}]`);
}

export function getTagWithAttribute(
  tag: string,
  attribute: string,
  value: string
) {
  return cy.get(`${tag}[${attribute}=${value}]`);
}

Cypress.Commands.add('getByDataTestAttribute', getByDataTestAttribute);
Cypress.Commands.add('getByDataAttribute', getByDataAttribute);
Cypress.Commands.add('getTagWithAttribute', getTagWithAttribute);
