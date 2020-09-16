const puppeteer = require('puppeteer');

class Webpage {
    static async generatePDF(url) {
        const browser = await puppeteer.launch({
            headless: false
        }); // Puppeteer can only generate pdf in headless mode.
        const page = await browser.newPage();
        await page.goto(url); // Adjust network idle as required. 
        const elementHandle = await page.$('input#username');
        await elementHandle.type('azina00@yahoo.com');
        const password = await page.$('input#password');
        await password.type('Love4always');
        const submit = await page.$('button#submit');
        await submit.click({
            waitUntil: 'domcontentloaded'
        });
        await page.waitForNavigation();
        await page.$('icon-wrapper');
        const pdfConfig = {
            path: 'url.pdf', // Saves pdf to disk. 
            format: 'A4',
            printBackground: true,
            margin: { // Word's default A4 margins
                top: '2.54cm',
                bottom: '2.54cm',
                left: '2.54cm',
                right: '2.54cm'
            }
        };
        //await page.emulateMedia('screen');
        const pdf = await page.pdf(pdfConfig); // Return the pdf buffer. Useful for saving the file not to disk. 

        await browser.close();

        return pdf;
    }
}

(async () => {
    const url = 'https://hrblock.read.inkling.com/read/';
    const buffer = await Webpage.generatePDF(url);
})();