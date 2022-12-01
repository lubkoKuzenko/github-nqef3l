const help = new RxjsHelpers();

describe('Recovery => Standard', () => {
  beforeEach(() => {
    help.before();
  });

  beforeEach(() => {
    cy.intercept('GET', 'users*', { fixture: 'user.json' }).as('images');
  });

  afterEach(() => {
    help.logout();
  });

  describe('test', () => {
    it(`should test page `, () => {
      help
        .navigateToPage()
        .selectbutton()
        .goChecks() => {
          // asd
        })
        .goChecks() => {
          // asd
        })
        .wait();
  })

  after(() => {
    help.after();
  });

})