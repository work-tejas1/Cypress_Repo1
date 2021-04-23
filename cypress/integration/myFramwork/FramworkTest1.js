 /// <reference types="cypress" />

describe('My First Suit', function () 
{
        before(() => {
          // runs once before all tests in the block
          cy.fixture('data').then(function(data)
          {
            this.data=data

          })
        })
 
    it('My First Test Case', function () {
        cy.visit('https://unikrn.com')
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from failing the test
          return false
      })
   
        cy.get('[name="user"]').type(this.data.email)
        cy.get('[name="pass"]').type(this.data.password)
        cy.get('button[type="submit"]').click()
        cy.get('span[class*="Nickname"]').then(function(Nickname)
        {
            cy.get('span[class*="Nickname"]').should('have.text',this.data.nickname)
            cy.log(Nickname.text())

        })

        //How to use x-path
       /*  cy.xpath('//*[contains(@class,"Nickname")]').then(function(Nickname)
        {
            cy.log(Nickname.text())

        }) */
        
  
    })

})