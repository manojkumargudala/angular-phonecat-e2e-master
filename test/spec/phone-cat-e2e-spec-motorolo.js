'use strict';

var pageUtils = require('../utilities/page-utils');
var jsConsole = require('../utilities/js-console');
var page = require('../pages/page');
var homePage = require('../pages/home');
var detailPage = require('../pages/detail');

describe(
		'PhoneCat Application for motorolo atix 4g',
		function() {

			beforeEach(function() {
				homePage.visit();
				pageUtils.takeScreenShot('home-page');
			});

			afterEach(function() {
				jsConsole.captureJSLogsOnPage();
			});

			it(
					'should filter the phone list as a user types into the search box and show details of a selected phone',
					function() {
						var phoneList = homePage.getPhoneList();
						browser.pause();
						expect(phoneList.count()).toBe(20);
						pageUtils.takeScreenShot('phones-list');

						homePage.searchFor('motorola-atrix');
						expect(phoneList.count()).toBe(1);
						pageUtils.takeScreenShot('filter-motorolo atrix 4');

						homePage.selectFirstFromList();
						expect(page.getUrl()).toBe('/phones/motorola-atrix-4g');
						pageUtils.takeScreenShot('nexus-s-detail');

						var title = detailPage.getTitle();
						expect(title).toBe('MOTOROLA ATRIX™ 4G');

						var mainImage = detailPage.getMainImage();
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.0.jpg/);

						detailPage.selectThumbnail(2);
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.2.jpg/);
						pageUtils.takeScreenShot('thumbnail-2');

						detailPage.selectThumbnail(3);
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.3.jpg/);
						pageUtils.takeScreenShot('thumbnail-3');

					});
		it(
					'this is another test case',
					function() {
						var phoneList = homePage.getPhoneList();
						browser.pause();
						expect(phoneList.count()).toBe(20);
						pageUtils.takeScreenShot('phones-list');

						homePage.searchFor('motorola-atrix');
						expect(phoneList.count()).toBe(1);
						pageUtils.takeScreenShot('filter-motorolo atrix 4');

						homePage.selectFirstFromList();
						expect(page.getUrl()).toBe('/phones/motorola-atrix-4g');
						pageUtils.takeScreenShot('nexus-s-detail');

						var title = detailPage.getTitle();
						expect(title).toBe('MOTOROLA ATRIX™ 4G');

						var mainImage = detailPage.getMainImage();
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.0.jpg/);

						detailPage.selectThumbnail(2);
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.2.jpg/);
						pageUtils.takeScreenShot('thumbnail-2');

						detailPage.selectThumbnail(3);
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.3.jpg/);
						pageUtils.takeScreenShot('thumbnail-3');

					});

		});

		describe(
				'PhoneCat Application for motorolo atix 4g another test',
				function() {

					beforeEach(function() {
						homePage.visit();
						pageUtils.takeScreenShot('home-page');
					});

					afterEach(function() {
						jsConsole.captureJSLogsOnPage();
					});

					it(
							'should filter the phone list as a user types into the search box and show details of a selected phone',
							function() {
								var phoneList = homePage.getPhoneList();
								browser.pause();
								expect(phoneList.count()).toBe(20);
								pageUtils.takeScreenShot('phones-list');

								homePage.searchFor('motorola-atrix');
								expect(phoneList.count()).toBe(1);
								pageUtils.takeScreenShot('filter-motorolo atrix 4');

								homePage.selectFirstFromList();
								expect(page.getUrl()).toBe('/phones/motorola-atrix-4g');
								pageUtils.takeScreenShot('nexus-s-detail');

								var title = detailPage.getTitle();
								expect(title).toBe('MOTOROLA ATRIX™ 4G');

								var mainImage = detailPage.getMainImage();
								expect(mainImage.getAttribute('src')).toMatch(
										/img\/phones\/motorola-atrix-4g.0.jpg/);

								detailPage.selectThumbnail(2);
								expect(mainImage.getAttribute('src')).toMatch(
										/img\/phones\/motorola-atrix-4g.2.jpg/);
								pageUtils.takeScreenShot('thumbnail-2');

								detailPage.selectThumbnail(3);
								expect(mainImage.getAttribute('src')).toMatch(
										/img\/phones\/motorola-atrix-4g.3.jpg/);
								pageUtils.takeScreenShot('thumbnail-3');

							});
			it(
					'this is another test case',
					function() {
						var phoneList = homePage.getPhoneList();
						browser.pause();
						expect(phoneList.count()).toBe(20);
						pageUtils.takeScreenShot('phones-list');

						homePage.searchFor('motorola-atrix');
						expect(phoneList.count()).toBe(1);
						pageUtils.takeScreenShot('filter-motorolo atrix 4');

						homePage.selectFirstFromList();
						expect(page.getUrl()).toBe('/phones/motorola-atrix-4g');
						pageUtils.takeScreenShot('nexus-s-detail');

						var title = detailPage.getTitle();
						expect(title).toBe('MOTOROLA ATRIX™ 4G');

						var mainImage = detailPage.getMainImage();
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.0.jpg/);

						detailPage.selectThumbnail(2);
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.2.jpg/);
						pageUtils.takeScreenShot('thumbnail-2');

						detailPage.selectThumbnail(3);
						expect(mainImage.getAttribute('src')).toMatch(
								/img\/phones\/motorola-atrix-4g.3.jpg/);
						pageUtils.takeScreenShot('thumbnail-3');

					});

				});
