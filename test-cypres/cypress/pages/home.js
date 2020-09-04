'use strict';

var homePage = {

    visit: function () {
      return cy.visit('index.html');
    },

    getPhoneList: function () {
        return cy.get('ul li');
    },

    searchFor: function (phoneName) {
        var query = cy.get('input');
        query.clear();
        query.type(phoneName);
        cy.get('input').should('have.value', phoneName)

    },

    selectFirstFromList: function () {
        return cy.get('.phones li a').first().click();
    }

};

module.exports = homePage;