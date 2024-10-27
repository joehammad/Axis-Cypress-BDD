const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      on('before:run', () => {
        const tags = process.env.TAGS || 'not @ignore';
        config.env.TAGS = tags;
      });
      return config;
    },
    specPattern: "cypress/e2e/Features/*.feature",
    
    env: {
      TAGS: "not @ignore"
    }
  },
  
});
