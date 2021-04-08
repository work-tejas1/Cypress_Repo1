/// <reference types="cypress" />

describe('My First Suit', function () {
    it('My First Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     returning false here prevents Cypress from
        //     failing the test
        //     return false
        // })
        // it('fails to visit website 1', function () {
        //     cy.visit('https://unikrn.com/')
        //    cy.visit('https://admin-demo.nopcommerce.com/')
        // })
        //cy.get("[type='button']").eq(4).click() //clicking on "START PLAYING"
        //cy.get('[data-test=LoginSignupLoginButton] > .translation--as-html').click()
        cy.get('.search-keyword').type('ca')
       // cy.wait(2000)

        //only visible 
        cy.get('.product:visible').should('have.length',4)
        
        //Parent child chaining (contrain element search to only particular block)
        cy.get('.products').find('.product').should('have.length',4)

        //click on add to cart
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()





       
     
    })

})