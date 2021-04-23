/// <reference types="cypress" />

describe('My First Suit', function () {
    it('My First Test Case', function () {
        cy.visit('https://unikrn.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        it('fails to visit website 1', function () {
            cy.visit('https://unikrn.com/')
           // cy.visit('https://admin-demo.nopcommerce.com/')
           
        })
        //cy.get("[type='button']").eq(4).click() //clicking on "START PLAYING"
        //cy.get('[data-test=LoginSignupLoginButton] > .translation--as-html').click()
        
        const login = cy.get('[type=button]')
        login.click
        //https://github.com/cypress-io/cypress/issues/2554 issue is closed. Talk to Peere
    })

})