'use strict';
var Configurations = require('../utilities/configuration');

var homePage = {
   
    getPhoneList: function () {
        return Configurations.getAllElements('ul li');
    },

    searchFor: function (phoneName) {
        var query = Configurations.getElement('input');
        query.clear();
        query.sendKeys(phoneName);
    },

    selectFirstFromList: function () {
        return Configurations.getAllElements(by.css('.phones li a')).first().click();
    }

};

module.exports = homePage;