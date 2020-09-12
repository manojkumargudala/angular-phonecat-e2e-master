const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key, Actions } = require('selenium-webdriver');
//var pageUtils = require('page-utils');

require("chromedriver");
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given(/^Open chrome browser and start application$/, async function () {
        await driver.get('https://www.online-calculator.com//html5/online-calculator/index.php?v=10',10000);
       });




 When('I enter {string} {string} and {string}', async function (strValue1, strOperator, strValue2) {
inputString = strValue1+strOperator+strValue2;
typeKeys(strValue1);
//driver.pause(2000)
typeKeys(strOperator);
//driver.pause(2000)
typeKeys(strValue2);
//driver.pause(2000)
typeKeys("=")
//driver.pause(2000)

});
function typeKeys(inputString){
 const scriptString = "\""+inputString+"\".split('').forEach(function(item, index){var keycode = item.charCodeAt(0);document.getElementById(\"canvas\").dispatchEvent(new KeyboardEvent(\"keypress\",{which: keycode, keyCode: keycode, bubbles:true}))});"
console.log(scriptString);
driver.executeScript(scriptString)
}

const assert = require('assert');
//var pageUtils = require('page-utils');

 Then('I should be able to seeing the value {string}', async function (output) {
    console.log("expected output is "+output)
    const actualOutput= await driver.executeScript("return exportRoot.showscreen_txt.text").then(function(title) {
                    console.log("Actual output is: " + title);
                    return title
            });
    driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('out.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
    return assert.equal(actualOutput,output);

         });

 var { After, Status } = require("cucumber");

After(function(testCase) {
var me = this;

if (testCase.result.status === Status.FAILED) {
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('out123.png', image, 'base64', function(err) {
            console.log(err);
        });
});
}
});

 AfterAll('end', async function(){
     await driver.quit();
 });