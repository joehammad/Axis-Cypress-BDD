# Axis Cypress BDD Project

This repository contains a Cypress test automation framework for an e-commerce application, designed using Behavior-Driven Development (BDD) principles with Gherkin syntax. The tests cover registration, login, and adding items to the cart with both positive and negative scenarios.

## Project Structure:

- **Features**: Contains `.feature` files with Gherkin syntax for each test scenario.
  - `Register.feature`: Tests for user registration.
  - `Login.feature`: Tests for user login.
  - `Cart.feature`: Tests for adding an item to the cart.

- **PageObjects**: Implements the Page Object Model (POM) pattern.
  - **PageActions**: JavaScript files with methods that perform actions on page elements.
  - **PageElements**: JSON files containing locators for specific page elements, organized by page.

- **Tests**: Contains JavaScript files for individual tests that map to feature files.

- **fixtures**: JSON files with test data, such as `RegisteredUsers.json` and `users.json`, to avoid hard-coding data in the scripts.

## Test Scenarios

### Register:
- **Positive scenario**: Validates successful registration with correct data.
- **Negative scenario**: Checks for error messages with invalid or duplicate information.

### Login:
- **Positive scenario**: Validates successful login with correct credentials.
- **Negative scenario**: Checks for error messages with incorrect password.

### Add to Cart:
- Validates adding a selected product to the cart after sorting by price and selecting product options.
- Includes assertions to ensure success messages appear.

## Prerequisites

- **Node.js**: Install Node.js (recommended version 14 or higher).
- **Cypress**: This project uses Cypress for end-to-end testing.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/joehammad/Axis-Cypress-BDD.git
cd Axis-Cypress-BDD
npm install --save-dev cypress
npm install --save-dev cypress-cucumber-preprocessor
npm install --save-dev cypress-mochawesome-reporter

```
## Running the Tests
Interactive Mode
To run tests in the Cypress Test Runner:

```bash
npx cypress open
```
## Report 

```bash
npm run test
```