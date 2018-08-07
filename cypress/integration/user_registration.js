import { APP_URL, MOBILE_WIDTH, MOBILE_HEIGHT } from './constants';

describe("User Registrations: ", () => {

  beforeEach(() => {
    cy.viewport(375, 812);
  });

  describe("when navigating to the register page", () => {

    beforeEach(() => {
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

  describe("when filling in the registration form", () => {

    beforeEach(() => {
      cy.visit(APP_URL);
      cy.get('#redirect-to-register').click();
    });

    describe("with an invalid email", () => {
      it("will remain disabled");
    });

    describe("with an invalid password", () => {
      it("will remain disabled");
    });

    describe('with an invalid password confirmation', () => {
      it("will remain disabled");
    });

    describe("with valid user information", () => {
      it("will not remain disabled");
    });

  });

  describe("when submitting a valid form", () => {
    it("will show a successful registration message");
    it("will redirect to the tabs page");
  });

});
