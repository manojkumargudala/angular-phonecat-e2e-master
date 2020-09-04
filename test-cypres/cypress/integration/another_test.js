var homePage = require('../pages/home');
var detailPage = require('../pages/detail');

describe('Another Example which fails', () => {  
    it('Check product detil page', () => {  
        cy.visit("/");  
        cy.wait(5000)
        homePage.getPhoneList().should('have.length', 20);
        cy.wait(1000)
        homePage.searchFor('motorola-atrix')
        homePage.getPhoneList().should('have.length', 1);        
        homePage.selectFirstFromList();
		cy.url().should('include','/phones/motorola-atrix-4g');
        detailPage.getTitle().should('include','MOTOROLA ATRIX™ 4G');
        detailPage.getMainImage().should('have.attr', 'src').and('contains','img\/phones\/motorola-atrix-4g.0.jpg');
        detailPage.selectThumbnail(1).should('have.attr', 'src').and('contains','img\/phones\/motorola-atrix-4g.1.jpg');
        detailPage.selectThumbnail(2).should('have.attr', 'src').and('contains','img\/phones\/motorola-atrix-4g.2.jpg');
        detailPage.selectThumbnail(3).should('have.attr', 'src').and('match',/motorola\-atrix\-4g/);
        //This will fail
        detailPage.selectThumbnail(4).should('have.attr', 'src').and('match',/motorola\-atrix\-4g/);


       
    })  

    it('Check cross origin test', function() {  
        cy.visit('https://www.google.co.in')  
        cy.wait(2000)  
        cy.get('input[name="q"]').type('Csharp Corner')  
        cy.get('input[name="btnK"]').first().click()  
        cy.get('a').contains('C# Corner - Community of Software and Data Developers').click()  
        cy.wait(2000)  
        cy.get('input[id="ctl00_HeaderHomeNewDesign_Login1_HyperLinkRegister"]').click()  
    })  
})  