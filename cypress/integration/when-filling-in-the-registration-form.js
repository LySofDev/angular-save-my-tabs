import { APP_URL, MOBILE_WIDTH, MOBILE_HEIGHT } from './constants';

describe("when filling in the registration form", () => {

  beforeEach(() => {
    cy.viewport(MOBILE_WIDTH, MOBILE_HEIGHT);
    cy.visit(APP_URL);
    cy.get('#redirect-to-register').click();
  });

  describe("with an invalid email", () => {
    it("will remain disabled", () => {
      cy.get("#email-field").type("   ")
      cy.get("#password-field").type("password");
      cy.get("#password-confirmation-field").type("password");
    });
  });

  describe('with an invalid password confirmation', () => {
    it("will remain disabled", () => {
      cy.get("#email-field").type("mac.hdz@gmail.com")
      cy.get("#password-field").type("password");
      cy.get("#password-confirmation-field").type("invalid");
    });
  });

  describe("with valid user information", () => {
    it("will not remain disabled", () => {
      cy.get("#email-field").type("mac.hdz@gmail.com")
      cy.get("#password-field").type("password");
      cy.get("#password-confirmation-field").type("password");
    });
  });

});
