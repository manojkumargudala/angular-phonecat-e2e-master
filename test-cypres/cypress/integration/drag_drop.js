var homePage = require('../pages/home');
var detailPage = require('../pages/detail');

describe('Test Drag and Drops', () => {  
before('setting the response',() => {
cy.server();
cy.fixture("phones.json").as("phones")
cy.fixture("phone_det.json").as("phones_det")
cy.route('GET', '**/phones**', '@phones')
cy.route('GET', '**/motorola-atrix-4g**', '@phones_det')

})

xit('Check Drag and drop element in same iframe', () => {  
    cy.visit("http://www.ankur.com/projects/FrameGlider/demo/simple/a.html");  
    cy.wait(1000)
    cy.getIframeBody("#b").find("#Dra1")
    cy.customDrag("#Dra1","#b","#Dro1","#b",)
    cy.xpath("//span[@id='messages']").invoke("text").should("eq","Mouse up on Dro1 . Dropped Dra1 on it")
    
})

    it('Check Drag and drop element in same iframe', () => {  
        cy.visit('https://angular-oxkc7l-zirwfs.stackblitz.io/')
        cy.contains('To do', { timeout: 15000 }) // ensure page is loaded -__-
      
        const item = '.example-box:not(.cdk-drag-placeholder)'
      
        cy.get('#cdk-drop-list-1').children(item).should('have.length', 5)
      
        cy.drag1( cy.get('.example-box:contains("Get to work")'), cy.get('.example-box:contains("Get up")'))
        cy.get('#cdk-drop-list-1').children(item).should('have.length', 6)
      
        
    })
})