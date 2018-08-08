import { APP_URL, MOBILE_WIDTH, MOBILE_HEIGHT } from './constants';

describe("when filling in the registration form", () => {

  beforeEach(() => {
    cy.viewport(MOBILE_WIDTH, MOBILE_HEIGHT);
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
