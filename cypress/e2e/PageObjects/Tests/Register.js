import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {registraion} from "../PageActions/RegisterActions"

const RegisterActions = new registraion

Given('user visits Tealium',()=>{
    cy.visit('https://ecommerce.tealiumdemo.com/')
})

When('user Navigate to Regsiter',()=>{
    RegisterActions.clickAccount(),
    RegisterActions.clickRegister()
})
Then('User Adds First Name',()=>{
    RegisterActions.setFirstName('test')
})
And('User Adds last Name',()=>{
    RegisterActions.setLastName('test')
})

And('User Adds Email',()=>{
    RegisterActions.setEmail('joehammad4@gmail.com')
})

And('User Adds password',()=>{
    RegisterActions.setPassword("12345678")
})
And ('User Confirms password',()=>{
    RegisterActions.confirmPassword("12345678")
})
Then ('User Click register',()=>{
    RegisterActions.submit()
})