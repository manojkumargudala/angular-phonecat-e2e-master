'use strict';

const puppeteer = require('puppeteer');
const prompt = require('prompt');

(async () => {

  prompt.get(['username', 'password'], async function (err, result) {
    if (err) {
      return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.password);

    const proxyUrl = 'http://proxy.example.com:8000';

    const browser = await puppeteer.launch({
        args: [`--proxy-server=${proxyUrl}`],
        headless: false,
    });
    const page = await browser.newPage();
    page.authenticate(result.username,result.password)

    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.resourceType() === 'image') request.abort();
      else request.continue();
    });
    await page.goto('https://news.google.com/news/');
    await page.screenshot({
      path: 'news.png',
      fullPage: true
    });

    await browser.close();


  });

  function onErr(err) {
    console.log(err);
    return 1;
  }


})();