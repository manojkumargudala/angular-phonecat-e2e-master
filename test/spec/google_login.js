'use strict';

const { browser } = require("protractor");


describe(
	'Login to accounts.google.com',
	function () {

		beforeEach(function () {

		});

		afterEach(function () {

		});

		it('google login',
			function () {
				browser.get("https://accounts.google.com")
				browser.waitForAngular();
				browser.findElement(by.css("input#identifierId")).sendKeys("seleniumauto0@gmail.com")
				browser.findElement(by.css("span:contains('Next')")).click()
				browser.findElement(by.css("input[@name='password']")).sendKeys("manoj1234")
				browser.findElement(by.css("span:contains('Next')")).click()

			});

	});

	(function() 
	{ return document.querySelectorAll('.search_btn')[1].click(); })();


document.querySelector('input#identifierId').dispatchEvent(new Event('focus'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keydown'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keypress'),{bubbles: true});
document.querySelector('input#identifierId').value = '';
document.querySelector('input#identifierId').value = 'seleniumauto0@gmail.com';
document.querySelector('input#identifierId').dispatchEvent(new Event('input'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keyup'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('change'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('blur'),{bubbles: true});


document.querySelector('button[class~="VfPpkd-LgbsSe"]').dispatchEvent(new Event('focus'),{bubbles: true});
document.querySelector('button[class~="VfPpkd-LgbsSe"]').dispatchEvent(new Event('mousedown'),{bubbles: true});
document.querySelector('button[class~="VfPpkd-LgbsSe"]').dispatchEvent(new Event('mouseenter'),{bubbles: true});
document.querySelector('button[class~="VfPpkd-LgbsSe"]').dispatchEvent(new Event('click'),{bubbles: true});
document.querySelector('button[class~="VfPpkd-LgbsSe"]').dispatchEvent(new Event('mouseup'),{bubbles: true});
document.querySelector('button[class~="VfPpkd-LgbsSe"]').dispatchEvent(new Event('blur'),{bubbles: true});

document.querySelector('button[class~="VfPpkd-LgbsSe"]').dispatchEvent(new Event('focus'),{bubbles: true});
document.querySelector('div#identifierNext').dispatchEvent(new Event('click'),{bubbles: true});



document.querySelector('div#identifierNext')
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("div#identifierNext").click();
    }
});

document.querySelector('input#identifierId').dispatchEvent(new Event('focus'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keydown'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keypress'),{bubbles: true});
document.querySelector('input#identifierId').value = '';
document.querySelector('input#identifierId').value = 'manoj1234';
document.querySelector('input#identifierId').dispatchEvent(new Event('input'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keyup'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('change'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('blur'),{bubbles: true});
document.querySelector('div#identifierNext').click();

document.querySelector('input[name="password"]').dispatchEvent(new Event('focus'),{bubbles: true});
document.querySelector('input[name="password"]').dispatchEvent(new Event('keydown'),{bubbles: true});
document.querySelector('input[name="password"]').dispatchEvent(new Event('keypress'),{bubbles: true});
document.querySelector('input[name="password"]').value = '';
document.querySelector('input[name="password"]').value = 'manoj1234';
document.querySelector('input[name="password"]').dispatchEvent(new Event('input'),{bubbles: true});
document.querySelector('input[name="password"]').dispatchEvent(new Event('keyup'),{bubbles: true});
document.querySelector('input[name="password"]').dispatchEvent(new Event('change'),{bubbles: true});
document.querySelector('input[name="password"]').dispatchEvent(new Event('blur'),{bubbles: true});
document.querySelector('div#passwordNext').click();

document.querySelector('input#identifierId').dispatchEvent(new Event('focus'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keydown'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keypress'),{bubbles: true});
document.querySelector('input#identifierId').value = '';
document.querySelector('input#identifierId').value = 'seleniumauto0@gmail.com';
document.querySelector('input#identifierId').dispatchEvent(new Event('input'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('keyup'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('change'),{bubbles: true});
document.querySelector('input#identifierId').dispatchEvent(new Event('blur'),{bubbles: true});

