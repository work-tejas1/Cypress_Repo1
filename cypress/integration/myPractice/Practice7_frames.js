/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

//frames
describe('My 7th Suit', function () {
    it('My 7th Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click() // always write iframe if you are in frame
        //cy.iframe
    })

})