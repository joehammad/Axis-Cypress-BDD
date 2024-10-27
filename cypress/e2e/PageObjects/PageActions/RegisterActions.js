const registerLocators = require ("../PageElements/RegElements.json")
const home = require ("../PageElements/HomeElements.json")

export class regestraion {
clickAccount(){
cy.get(home.Homelocators.account).click()
}
clickRegester(){
    cy.get(home.Homelocators.Register)
}

setFirstName()
{
    cy.get(registerLocators.regsiter.firstName).type(FirstName)
    return
}
setLastName()
{
    cy.get(registerLocators.regsiter.lastName).type(LastName)
    return
}
setEmail()
{
    cy.get(registerLocators.regsiter.Email).type(Email)
    return
}
setPassword()
{
    cy.get(registerLocators.regsiter.password).type(password)
    return
}
confirmPassword()
{
    cy.get(registerLocators.regsiter.confirmPass).type(confirmation)
    return
}
submit(){
    cy.get(registerLocators.regsiter.RegisterBtn).click()
}
}
