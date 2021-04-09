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
    
        //Static Dropdown
        cy.get('select').select('option3').should('have.value','option3')

        //Dynamic dropdown
        cy.get('#autocomplete').type('Ger')
        cy.get('.ui-menu-item div').each(($element, index, $list) => { 
        //Travel, parent to child, find common element then iterate each element
        
            if($element.text()==="Germany")    
            {
                $element.click()
            }
    })
        cy.get('#autocomplete').should('have.value','Germany')

        // check visibility 
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })

})