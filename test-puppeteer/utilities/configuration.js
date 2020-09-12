'use strict';



(async() => {

	function getTestExecutionEnvironment() {
		var envName = process.env.env ? process.env.env : "local";
		console.log("--> Running specs against environment: " + envName);
		return envName;
	}
	
	function Configuration() {
		var envConfig = require('../config/env.json');
		// process.env.env = "dev";
		let
			testExecutionEnvironment = getTestExecutionEnvironment();
		this.env = envConfig[testExecutionEnvironment];
		console.log("in main" + this.env["baseUrl"]);
		this.env["env"] = testExecutionEnvironment;
		this.env["username"] = process.env.username ? process.env.username : this.env["username"];
		this.env["password"] = process.env.password ? process.env.password : this.env["password"];
		process.env.browser = process.env.env ? process.env.env : "chrome";
		this.screenShotCounter = 0;
		console.log("--> with configuration " + JSON.stringify(this.env));
		console.log("url it is navigating to is " + this.env["baseUrl"])
	
		initlizepuppter()
			.then(values => {
				this.browser = values[0];
				this.puppeteer_page = values[1];
				//console.log("************************")
				//console.log(this.browser)
				//console.log(this.puppeteer_page)
				//console.log(this.env.baseUrl)
				//console.log("************************")
				values[1].goto(this.env.baseUrl)
				//values[1].wait(5000)
			});
	}
	async function initlizepuppter() {
	
			const puppeteer = require('puppeteer');
			console.log("test 1233")
			const browser = await puppeteer.launch()
			console.log("test 1234")
			const puppeteer_page = await browser.newPage()
			console.log("test 1235")	
			console.log("test 1236")
			if (puppeteer_page) {
				console.log("test 1237")
			}
			console.log("test 1238")
		return [browser, puppeteer_page]
	
	}

	var Configuration = new Configuration();

	Configurations.get = function (param) {
		if (this.env) {
			console.log("this envi is undefined")
		}
		if (this.env[param]) {
			console.log(JSON.stringify(this.env))
		}
		return this.env[param];
	};
	
	Configurations.getPuppeter = function () {
		if (this.puppeteer_page) {
			console.log("puppter is null");
		}
		return this.puppeteer_page;
	};
	
	Configurations.getScreenShotCounter = function () {
		return ++this.screenShotCounter;
	};
	
	Configurations.getAllElements = function (by) {
		return this.puppeteer_page.$eval((by));
	};
	
	Configurations.getElement = function (by) {
		return this.puppeteer_page.$eval(by);
	};
	
	Configurations.getUrl = function () {
		return this.puppeteer_page.getLocationAbsUrl();
	};
	
	Configurations.close = function () {
		return this.browser.close();
	};
	module.exports = configuration;
})();




