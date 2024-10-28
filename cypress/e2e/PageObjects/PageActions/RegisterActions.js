const registerLocators = require ("../PageElements/RegElements.json")
const home = require ("../PageElements/HomeElements.json")

export class registraion {
clickAccount(){
cy.get(home.Homelocators.account).click()
}
clickRegister(){
    cy.get(home.Homelocators.Register).click()
}

setFirstName(FirstName)
{
    cy.get(registerLocators.regsiter.firstName).type(FirstName)
    
}
setLastName(LastName)
{
    cy.get(registerLocators.regsiter.lastName).type(LastName)
    
}
setEmail(Email)
{
    cy.get(registerLocators.regsiter.Email).type(Email)
    
}
setPassword(password)
{
    cy.get(registerLocators.regsiter.password).type(password)
    
}
confirmPassword(confirmation)
{
    cy.get(registerLocators.regsiter.confirmPass).type(confirmation)
    
}
submit(){
    cy.get(registerLocators.regsiter.RegisterBtn).click()
    
    
}

successAssertion(){
    cy.get(registerLocators.regsiter.SuccessMsg).should('exist');
}
errorAsserstion(){
    cy.get(registerLocators.regsiter.ErrorMsg).should('exist');
}
}
