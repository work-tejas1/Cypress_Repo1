/// <reference types="cypress" />

context('Actions2', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('#search_form_input_homepage').type("unikrn")
    cy.get('#search_button_homepage').click()
    cy.get('.result__url__domain').eq(1).click()
    cy.get("div.style__Container-sc-1r1x46d-0.ibditt.page-wrapper.UnikrnBundlePageClass div.style__NavbarTopContainer-sc-1mw4vrq-0.ikTdPT:nth-child(1) div.style__NavbarTopWidth-sc-1mw4vrq-1.dUaaeb div.style__RightContainer-sc-1mw4vrq-12.jGeRSy div.login-signup > button.style__Button-sc-8x3vwj-0.eNlhCg.styledComponent.style__Button-sc-1rwwxnx-4.hORASR.style__LoginSignupButton-d7c2ug-0.style__RegisterButton-d7c2ug-1.bmQQVa.primary").click() // Click on first el containing 'Welcome'
   
  })
})
