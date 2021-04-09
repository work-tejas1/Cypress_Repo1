/// <reference types="cypress" />

describe('My Second Suit', function () {
    it('My Second Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //CHECK Boxes
        //cy.get('#checkBoxOption1').first().check() // can use this
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1') // opposite
        
        //Multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2','option3']) //check method will accept value property
    

    })

})