'use strict';
const puppeteer = require('puppeteer');

var homePage = require('../pages/home');
var utilspage = require('../pages/utilsPage');

describe(
    'PhoneCat Application for motorolo atix 4g', async function () {
        beforeEach(function () {
            console.log("beforeEach")
            utilspage.initialBrowser();
            utilspage.visit('http://localhost:8000/index.html#!/phones');
        });

        afterEach( async function () {
            await utilspage.close();
        });

        it('should filter the phone list as a user types into the search box and show details of a selected phone',
            async function () {
              
                console.log("initialized the browser");
                console.log("in it function")
                homePage.getPhoneList()
                await utilspage.screenshot({
                    path: 'example.png'
                });
            })

    })


