/// <reference types= "Cypress" />

describe('Testing landing page', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should load the page correctly', () => {
        cy.matchImageSnapshot();
    });
 })