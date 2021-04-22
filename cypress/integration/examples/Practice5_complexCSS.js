/// <reference types="cypress" />

describe('My Third Suit', function () {
    it('My Third Test Case', function () {
        cy.visit('https://www.cricbuzz.com/cricket-series/3472/indian-premier-league-2021/points-table')

       cy.get('table tr td:nth-child(7)').each(($element, index, $list) => {
       const points = $element.text()
       cy.log(points)
       }) 
    })

})