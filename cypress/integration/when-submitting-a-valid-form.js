import { APP_URL, MOBILE_WIDTH, MOBILE_HEIGHT } from './constants';

describe("when submitting a valid form", () => {

  beforeEach(() => {
    cy.viewport(MOBILE_WIDTH, MOBILE_HEIGHT);
    cy.visit(APP_URL);
    cy.get('#redirect-to-register').click();
    cy.get("#email-field").type("test.user1@gmail.com")
    cy.get("#password-field").type("password");
    cy.get("#password-confirmation-field").type("password");
  });

  it("will show a successful registration message", () => {
    cy.get("#register-button").click();
    cy.contains("You have been registered successfully.");
  });

  it("will redirect to the tabs page");

});
