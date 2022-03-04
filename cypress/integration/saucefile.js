/// <reference types= "Cypress" />

describe('Testing landing page', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('https://www.saucedemo.com/');
    });

    it('The logo should display correctly', () => {
        cy.get('.login_logo').matchImageSnapshot("Logo");
    });
 })