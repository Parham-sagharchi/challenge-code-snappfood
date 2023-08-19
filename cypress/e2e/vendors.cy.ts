import { Restaurant } from './utils'

describe('Lazy Loading Test', () => {
    it('should load more vendors on scroll', () => {
        cy.visit(Restaurant.url); // Replace with the actual URL

        cy.wait(3000)

        // Wait for loader to disappear
        cy.get('[data-cy=loader]').should('not.exist');

        cy.wait(3000)

        // Ensure initial vendor cards are present
        cy.get('[data-cy=vendor-card]').should('have.length.at.least', 10);

        // Scroll down to trigger lazy loading
        cy.get('[data-cy=vendors-wrapper]').scrollTo('bottom');

        // Wait for additional vendor cards to load
        cy.get('[data-cy=vendor-card]').should('have.length.greaterThan', 10);

        // Scroll down again (if needed) to load more vendors
        cy.get('[data-cy=vendors-wrapper]').scrollTo('bottom');

        // Wait for more vendor cards to load
        cy.get('[data-cy=vendor-card]').should('have.length.greaterThan', 10);
    });
});
