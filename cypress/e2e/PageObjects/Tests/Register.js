import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {registraion} from "../PageActions/RegisterActions"

const RegisterActions = new registraion

let userData;

before(() => {
  // Load the fixture data before the tests run
  cy.fixture('users').then((users) => {
    userData = users[0]; // Use the first user from the list or choose another index if needed
  });
});

Given('user visits Tealium', () => {
  cy.visit('https://ecommerce.tealiumdemo.com/');
});

When('user navigates to Register', () => {
  RegisterActions.clickAccount();
  RegisterActions.clickRegister();
});

Then('User adds First Name', () => {
  RegisterActions.setFirstName(userData.firstName);
});

And('User adds Last Name', () => {
  RegisterActions.setLastName(userData.lastName);
});

And('User adds Email', () => {
  RegisterActions.setEmail(userData.email);
});

And('User adds Password', () => {
  RegisterActions.setPassword(userData.password);
});

And('User confirms Password', () => {
  RegisterActions.confirmPassword(userData.password);
});

Then('User clicks Register', () => {
  RegisterActions.submit();
  cy.wait(2000);
});

Then('Success message should appear', () => {
  RegisterActions.SuccessMessage();
});

Then('Error message should appear', () => {
  RegisterActions.ErrorMessage();
});