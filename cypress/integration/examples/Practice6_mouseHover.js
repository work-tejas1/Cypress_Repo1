/// <reference types="cypress" />

describe('My 4th Suit', function () {
    it('My 4th Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //Mouse hover and handle invisible emement
        //cy.get('div.mouse-hover-content').invoke('show') // can't use #mousehover because it's not immediate parent
        cy.contains('Top').click({force: true}) //click on hidden element
      //cy.contains('Top').click()
        cy.url().should('include','top')

        //cy.contains('Top').click({force:true}) //click on hidden element

    })

})