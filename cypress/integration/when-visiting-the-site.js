import { APP_URL, MOBILE_WIDTH, MOBILE_HEIGHT } from './constants';

describe("when visiting the site", () => {

  beforeEach(() => {
    cy.viewport(MOBILE_WIDTH, MOBILE_HEIGHT);
    cy.visit(APP_URL);
  });

  it ("will show the brand", () => {
    cy.contains('Save My Tabs');
  });

  it("will show the login form", () => {
    cy.contains('Login');
  });

  it("will have a link to the register page", () => {
    cy.get('#redirect-to-register').click();
    cy.contains('Register');
  });

  it("will have an inactive login button", () => {
    cy.get('#login-button').should('be.disabled');
  });

});
