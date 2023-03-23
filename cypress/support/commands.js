// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const selectors = require("../fixtures/selectors.json");

Cypress.Commands.add("loginAdm", (login, password) => {
    if (login) {
        cy.get(selectors.login).type(login);
    }
    if (password){
        cy.get(selectors.pass).type(password);
    }
    cy.get(selectors.authButton).click();
  });
  
  Cypress.Commands.add("addFilm", (login, password) => {
    if (login) {
        cy.get(selectors.login).type(login);
    }
    if (password){
        cy.get(selectors.pass).type(password);
    }
    cy.get(selectors.authButton).click();
  });

  Cypress.Commands.add("bookingByName", (day, filmName, time) => {
    if (day) {
        cy.get(day).click();
    }
    if (filmName) {
        if (time){
            cy.contains(filmName).siblings(time).click();
        }
    }
    // if (seat){
    //     cy.get(selectors.pass).type(password);
    // }
    // cy.get(selectors.authButton).click();
  });