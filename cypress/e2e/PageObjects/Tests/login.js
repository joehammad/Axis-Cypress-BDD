import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {userLogin} from "../PageActions/loginActions"


const LoginTest = new userLogin

let userData;

before(() => {
    // Load the fixture data before the tests run
    cy.fixture('RegisterdUsers').then((users) => {
    
        userData = users[0];
    });
  });

  Given('user visits Tealium', () => {
    cy.visit('https://ecommerce.tealiumdemo.com/');
  });
  
  When('user Navigate to Login', () => {
    LoginTest.clickAccount()
    LoginTest.clickLogin();
  });
  
  Then('User Adds Email', () => {
   LoginTest.setEmail(userData.email)
  });
  
  And('User Adds Password', () => {
    LoginTest.setPassword(userData.password);

  });

  And('User Adds Wrong Password',()=>{
    LoginTest.setPassword("1234567")
  })

  Then('User Clicks Login', ()=>{
    LoginTest.loginBtn();
  })
  Then('Error message should appears', () => {
    LoginTest.errorAsserstion();
  });