'use strict';
var utilsPage = require('../pages/utilsPage');

var homePage = {

    visit: function () {
      return utilsPage.goto('http://localhost:8000/index.html#!/phones');
    },

    getPhoneList: function () {
        return utilsPage.getAllElements('ul li');
    },

    searchFor: function (phoneName) {
        var query = utilsPage.getElement('input');
        query.clear();
        query.sendKeys(phoneName);
    },

    selectFirstFromList: function () {
        return utilsPage.getAllElements(by.css('.phones li a')).first().click();
    }

};

module.exports = homePage;