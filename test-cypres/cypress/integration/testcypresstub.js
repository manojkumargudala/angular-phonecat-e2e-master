var homePage = require('../pages/home');
var detailPage = require('../pages/detail');

describe('First Example', () => {  
before('setting the response',() => {
cy.server();
cy.fixture("phones.json").as("phones")
cy.fixture("phone_det.json").as("phones_det")
cy.route('GET', '**/phones**', '@phones')
cy.route('GET', '**/motorola-atrix-4g**', '@phones_det')

})

    it('Change the response of Phones call', () => {  
        cy.visit("/");  
        cy.wait(5000)
        homePage.getPhoneList().should('have.length', 40);
        cy.wait(1000)
        homePage.searchFor('motorola-atrix')
        homePage.getPhoneList().should('have.length', 2);        
        homePage.selectFirstFromList();
        cy.url().should('include','/phones/motorola-atrix-4g');
        detailPage.getTitle().should('include','SAMSUNG ATRIX™ 4G'); 
        cy.screenshot()
    })
})