
const URL = 'http://uitestingplayground.com/sampleapp';

const VALID_USER_NAME = 'Karol';
const VALID_PASSWORD = 'pwd';
const INVALID_PASSWORD = 'notValidPassowrd';

const USER_NAME_INPUT_NAME = 'UserName'
const PASSWORD_INPUT_NAME = 'Password'

const LOGIN_STATUS_ID = 'loginstatus';
const AUTH_BUTTON_ID = 'login';

describe('Login Page', () => {
  before(() => {
    cy.visit(URL);
  });

  it('As a User I should be able to log in', () => {
    cy.findInputByName(USER_NAME_INPUT_NAME).type(VALID_USER_NAME);
    cy.findInputByName(PASSWORD_INPUT_NAME).type(VALID_PASSWORD);

    cy.get(`button[id='${AUTH_BUTTON_ID}']`).click();

    cy.get(`label[id=${LOGIN_STATUS_ID}]`).should('exist').should('contain.text', `Welcome, ${VALID_USER_NAME}!`);
  });

  it('As a User I should be able to logout', () => {
    cy.get(`button[id='${AUTH_BUTTON_ID}']`).click();

    cy.get(`label[id=${LOGIN_STATUS_ID}]`).should('exist').should('contain.text', 'User logged out.');
  })

  it('As a User I cannot log in with invalid password', () => {
    cy.findInputByName(USER_NAME_INPUT_NAME).type(VALID_USER_NAME);
    cy.findInputByName(PASSWORD_INPUT_NAME).type(INVALID_PASSWORD);

    cy.get(`button[id='${AUTH_BUTTON_ID}']`).click();

    cy.get(`label[id=${LOGIN_STATUS_ID}]`).should('exist').should('contain.text', 'Invalid username/password');
  });

  it('As a User I cannot log in with empty password field', () => {
    cy.findInputByName(USER_NAME_INPUT_NAME).type(VALID_USER_NAME);
    cy.findInputByName(PASSWORD_INPUT_NAME).type(' ');

    cy.get(`button[id='${AUTH_BUTTON_ID}']`).click();

    cy.get(`label[id=${LOGIN_STATUS_ID}]`).should('exist').should('contain.text', 'Invalid username/password');
  });

  it('As a User I should be log out after reload page', () => {
    cy.findInputByName(USER_NAME_INPUT_NAME).type(VALID_USER_NAME);
    cy.findInputByName(PASSWORD_INPUT_NAME).type(VALID_PASSWORD);

    cy.get(`button[id='${AUTH_BUTTON_ID}']`).click();

    cy.reload();

    cy.get(`label[id=${LOGIN_STATUS_ID}]`).should('exist').should('contain.text', 'User logged out.');
  })
});
