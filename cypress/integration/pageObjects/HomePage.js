class HomePage{

email(){
   return cy.get('[name="user"]')}

password(){
    return cy.get('[name="pass"]')}

loginButton(){
    return cy.get('button[type="submit"]')}

}

export default HomePage;
