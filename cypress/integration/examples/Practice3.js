/// <reference types="cypress" />

describe('My Third Suit', function () {
    it('My Third Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()











    })

})