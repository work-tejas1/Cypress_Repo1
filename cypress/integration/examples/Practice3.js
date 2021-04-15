/// <reference types="cypress" />

describe('My 4th Suit', function () {
    it('My 4th Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //Child window handling
        cy.get('#opentab').invoke('removeAttr','target').click()
        
        //get URL and compare
        cy.url().should('include','rahulshetty')     // compare partial string
        //browser navigation
        cy.go('back')
        



    })

})