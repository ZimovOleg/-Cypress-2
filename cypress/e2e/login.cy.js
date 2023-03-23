const logins = require("../fixtures/login.json");

it("Should not be on the main page", () => {
    cy.visit("/admin/");
    cy.loginAdm(logins.login, logins.badPass);
    cy.contains("Ошибка авторизации!",).should("be.visible");
});

it("Should be on the main page", () => {
    cy.visit("/admin/");
    cy.loginAdm(logins.login, logins.pass);
    cy.contains("Администраторррская",).should("be.visible");
});