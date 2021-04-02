/// <reference types="cypress" />

describe('My First Suit', function() 
{
    it('My First Test Case', function() {
        cy.visit('https://unikrn.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          it('fails to visit website 1', function () {
            cy.visit('https://unikrn.com/')
          })


          cy.get("[type='button']").eq(4).click()
          //cy.get('[data-test=LoginSignupLoginButton] > .translation--as-html').click()
          //cy.get("[type='submit']").click() // Click on first el containing 'Welcome'
        //https://github.com/cypress-io/cypress/issues/2554 issue is closed. Talk to Peere
    })

  })