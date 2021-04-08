/// <reference types="cypress" />

describe('My First Suit', function () {
    it('My First Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  
        cy.get('.search-keyword').type('ca')
       //cy.wait(2000)

       //ALIASING
       cy.get('.products').as('prodLocator')

        //only visible element
        cy.get('.product:visible').should('have.length',4)
        
        //Parent child chaining (contrain element search to only PARTICULAR block)
        cy.get('@prodLocator').find('.product').should('have.length',4)

        //click on add to cart
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        //find text and then click (using loop to iterare EACH  element) 
        cy.get('@prodLocator').find('.product').each(($element, index, $list) => {
        const nameVeg = $element.find('h4.product-name').text()
        if(nameVeg.includes('Capsicum'))    //click on Capsicum
        {
        $element.find('button').click()
        }
        })
        
        //ASSERT 
        cy.get('.brand').should('have.text','GREENKART11')

        //understanding THEN function due to asynchronous nature of cypress
        cy.get('.brand').then(function(logoElement)
        {
            cy.log(logoElement.text())

        }
        )
       
    





    })

})