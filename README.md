# Step by step
- Go to directory where you want to have this project
- Run `git clone git@github.com:labasdamian/Cypress_test_cases.git`
- Go to the directory with project
- Run `yarn install` or `npm install`
  - In case you are using `npm` remember to remove `yarn.lock`
- In file `cypress/specs/loginPage.spec.js` you should write your other tests
- To run test run in terminal `yarn cy:open` to open Cypress GUI or `yarn cy:run` to run all tests in headless mode


yarn [comand] or npm run [comand]:
- `yarn cy:open` or `npm run cy:open` - open Cypress GUI
- `yarn run` or `npm run cy:run` - run all tests in headleas mode