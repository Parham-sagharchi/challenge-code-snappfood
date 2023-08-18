import { Landing, Restaurant } from './utils'

describe("Redirection Test", () => {
    it("should redirect to the 'vendors' page", () => {
        cy.visit(Landing.url);

        // Find the element with the Cypress attribute and trigger a click
        cy.get('[data-cy="enter-button"]').click();

        // Wait for the redirection to complete and assert the new URL
        cy.url().should("include", Restaurant.path);
    });
});
