import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {registraion} from "../PageActions/RegisterActions"

const RegisterActions = new registraion

let userData;

before(() => {
  // Load the fixture data before the tests run
  cy.fixture('users').then((users) => {
     // Randomly select a user from the list
     const randomIndex = Math.floor(Math.random() * users.length);
     userData = users[randomIndex];
 
  });
});

Given('user visits Tealium', () => {
  cy.visit('https://ecommerce.tealiumdemo.com/');
});

When('user Navigate to Regsiter', () => {
  RegisterActions.clickAccount();
  RegisterActions.clickRegister();
});

Then('User Adds First Name', () => {
  RegisterActions.setFirstName(userData.firstName);
});

And('User Adds last Name', () => {
  RegisterActions.setLastName(userData.lastName);
});

And('User Adds Email', () => {
  RegisterActions.setEmail(userData.email);
});

And('User Adds password', () => {
  RegisterActions.setPassword(userData.password);
});

And('User Confirms password', () => {
  RegisterActions.confirmPassword(userData.password);
});

Then('User Click register', () => {
  RegisterActions.submit();
  cy.wait(2000);
});

Then('success message should appears', () => {
  RegisterActions.successAssertion();
});

Then('Error message should appears', () => {
  RegisterActions.errorAsserstion();
});