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
    return
}
setLastName(LastName)
{
    cy.get(registerLocators.regsiter.lastName).type(LastName)
    return
}
setEmail(Email)
{
    cy.get(registerLocators.regsiter.Email).type(Email)
    return
}
setPassword(password)
{
    cy.get(registerLocators.regsiter.password).type(password)
    return
}
confirmPassword(confirmation)
{
    cy.get(registerLocators.regsiter.confirmPass).type(confirmation)
    return
}
submit(){
    cy.get(registerLocators.regsiter.RegisterBtn).click()
}
}
