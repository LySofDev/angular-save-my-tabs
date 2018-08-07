import { APP_URL } from './constants';

describe("User Registrations: ", () => {

  describe("when a new user visits the site", () => {
    it("the user will reach the login page", () => {
      cy.visit(APP_URL);
      cy.contains('Login');
    });

    it("the user can navigate to the registration page", () => {
      cy.get('#redirect-to-register').click();
      cy.contains('Register');
    });
  });

});
