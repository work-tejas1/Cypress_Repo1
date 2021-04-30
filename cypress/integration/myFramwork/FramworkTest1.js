 /// <reference types="cypress" />

describe('My First Suit', function () 
{
        before(() => {
          // runs once before all tests in the block  //Resolve promise is important 
          cy.fixture('data').then(function(data)
          {
            this.data=data  //this keyboard refers to whole class. This changes Scope to entire class
          })
        })
 
    it('My First Test Case', function () {
        cy.visit(Cypress.env('URL'))
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
            // cy.pause()  //pause test
            cy.log(Nickname.text())
            
            cy.customCommand1()  // can be used for repetative code
            //this data is array array

            //for each2
            this.data.card.forEach(cardDetails => cy.log(cardDetails));

            //forEach1
            // this.data.card.forEach(function(cardDetails) {
            //   cy.log(cardDetails)
            // });
          })

        //How to use x-path
       /*  cy.xpath('//*[contains(@class,"Nickname")]').then(function(Nickname)
        {
            cy.log(Nickname.text())

        }) */
        
  
    })

})