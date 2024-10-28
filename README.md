Axis Cypress BDD Project
This project is a Cypress BDD (Behavior-Driven Development) test suite for an e-commerce application. It covers essential user flows, such as user registration, login, and adding items to the cart, with both positive and negative scenarios.

Project Structure
Features: The Features folder contains .feature files written in Gherkin syntax for each test scenario:
Register.feature: Tests for user registration.
Login.feature: Tests for user login.
Cart.feature: Tests for adding an item to the cart.
PageObjects: This directory follows the Page Object Model (POM) pattern:
PageActions: JavaScript files with methods that perform actions on page elements.
PageElements: JSON files containing locators for specific page elements, organized by page.
Tests: Contains JavaScript files for individual tests that map to feature files.
fixtures: JSON files with test data, such as RegisteredUsers.json and users.json, to avoid hard-coding data in the scripts.
Test Scenarios
Register:

Positive scenario: Validates successful registration with correct data.
Negative scenario: Checks for error messages with invalid or duplicate information.
Login:

Positive scenario: Validates successful login with correct credentials.
Negative scenario: Checks for error messages with incorrect password.
Add to Cart:

Validates adding a selected product to the cart after sorting by price and selecting product options.
Includes assertions to ensure success messages appear.
Prerequisites
Node.js: Install Node.js (recommended version 14 or higher).
Cypress: This project uses Cypress for end-to-end testing.
Getting Started
Clone the Repository:


git clone https://github.com/joehammad/Axis-Cypress-BDD.git
cd Axis-Cypress-BDD
Install Dependencies:


npm install
Running the Tests
Interactive Mode
To run tests in the Cypress Test Runner:

npx cypress open
From the Cypress interface, you can select individual feature files to execute tests interactively.

Headless Mode
To run all tests in headless mode:

npx cypress run
To run a specific feature file in headless mode:

bash
Copy code
npx cypress run --spec "cypress/e2e/Features/<FeatureFileName>.feature"
Contributing
Feel free to open a pull request if you'd like to improve the tests or add additional scenarios.
