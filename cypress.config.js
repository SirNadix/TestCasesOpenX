const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com/sampleapp',
    specPattern: ['cypress/specs/**/*spec.js'],
    testIsolation: false
  }
});
