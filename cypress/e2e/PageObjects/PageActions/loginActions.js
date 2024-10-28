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
setEmail(Email){
    cy.get(login.loginLocators.email).type(Email)
    return
}
setPassword (Password){
    cy.get(login.loginLocators.password).type(Password)
    return
}
loginBtn(){
    cy.get(login.loginLocators.loginBtn).click()
}
ErrorMessage(){
    cy.get(login.loginLocators.ErrorMsgElement).should('exist');
}
}