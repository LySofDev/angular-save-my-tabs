import { APP_URL, MOBILE_WIDTH, MOBILE_HEIGHT } from './constants';

describe("when submitting a valid form", () => {

  beforeEach(() => {
    cy.viewport(MOBILE_WIDTH, MOBILE_HEIGHT);
    cy.visit(APP_URL);
    cy.get('#redirect-to-register').click();
  });

  it("will show a successful registration message");
  it("will redirect to the tabs page");
  
});
