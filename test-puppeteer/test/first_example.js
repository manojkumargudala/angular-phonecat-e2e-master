'use strict';
const puppeteer = require('puppeteer');

var homePage = require('../pages/home');

describe(
    'PhoneCat Application for motorolo atix 4g',function () {
        beforeEach(async function () {
            console.log("beforeEach")
        });

        afterEach( async function () {
           // await utilspage.close();
        });

        it('should filter the phone list as a user types into the search box and show details of a selected phone',
            async function () {
                console.log("initialized the browser");
                console.log("in it function")
                homePage.getPhoneList()
              //  await utilspage.screenshot({
                //    path: 'example.png'
                //});
            })

    })


