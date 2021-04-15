/// <reference types="cypress" />

describe('My Third Suit', function () {
    it('My Third Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling Alerts
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //Fire event on browser/ manupulate DOM
        cy.on('window:alert',(str) =>
        {
            expect(str).to.equals('Hello , share this kjfwekenbf')

        })

    
    })

})