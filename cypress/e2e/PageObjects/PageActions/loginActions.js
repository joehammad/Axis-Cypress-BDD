const home = require ("../PageElements/HomeElements.json")
const login = require ("../PageElements/loginElements.json")

export class userLogin
{
clickAccount(){
    cy.get(home.Homelocators.account).click()
   
}
clickLogin(){
    cy.get(home.Homelocators.login).click()
}
setEmail(email){
    cy.get(login.loginLocators.email).type(email)
    
}
setPassword (Password){
    cy.get(login.loginLocators.password).type(Password)
    
}
loginBtn(){
    cy.get(login.loginLocators.loginBtn).click()
}
errorAsserstion(){
    cy.get(login.loginLocators.ErrorMsgElement).should('exist');
}
}