/// <reference types= "Cypress" />

['macbook-15', 'ipad-2', 'iphone-x'].forEach(screen => {

    describe('Testing landing page', () => {
        beforeEach(() => {
            cy.viewport(screen);
            cy.visit('https://www.saucedemo.com/');
        });
    
        it('The logo should display correctly', () => {
            cy.matchImageSnapshot(`Image on ${screen}`);
        });
     });
})

