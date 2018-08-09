import { APP_URL, MOBILE_WIDTH, MOBILE_HEIGHT } from './constants';

describe("when navigating to the register page", () => {

  beforeEach(() => {
    cy.viewport(MOBILE_WIDTH, MOBILE_HEIGHT);
    cy.visit(APP_URL);
    cy.get('#redirect-to-register').click();
  });

  it("will show the registration form", () => {
    cy.contains('Register');
  });

  it("will show a disabled register button", () => {
    cy.get('#register-button').should('be.disabled');
  });

  it("will have a link to the login page", () => {
    cy.get('#redirect-to-login').click();
    cy.contains('Login');
  })

});
