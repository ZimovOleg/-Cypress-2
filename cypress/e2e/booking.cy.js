const selectors = require("../fixtures/selectors.json");
const logins = require("../fixtures/login.json");
const film = require("../fixtures/film.json");

it("Add Film and Book it", () => {
    cy.visit("/admin/");
    cy.loginAdm(logins.login, logins.pass);

    cy.get(selectors.filmName).then(($el) => {
      const filmName = $el.text();
    })
    cy.visit("/client/");
    cy.bookingByName(selectors.weekDay, selectors.filmName, selectors.time);

});


// cy.booking(day, text, seats); // тут функция бронирования с тремя аргументами, 
// но можно и по другому конечно…,без этой функции, например через cy.contains(text) и.т.д.