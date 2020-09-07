'use strict';
const puppeteer = require('puppeteer');

var utilsPage = {

    visit: async function (url) {
        await puppeteer_page.goto(url);
    },

    getAllElements: function (by) {
        return puppeteer_page.$eval((by));
    },

    getElement: function (by) {
        return puppeteer_page.$eval(by);
    },

    getUrl: function () {
        return browser.getLocationAbsUrl();
    },

    close: function () {
        return puppeteer_page.close();
    },

    async initialBrowser(){
        var browser = await puppeteer.launch();
        puppeteer_page = await browser.newPage();
    }
}

module.exports = utilsPage;