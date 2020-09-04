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

    it('Check Drag and drop element in same iframe', () => {  
        cy.visit("http://www.ankur.com/projects/FrameGlider/demo/simple/a.html");  
        cy.wait(5000)
        cy.getIframeBody("#b").find("#Dra1").trigger('dragstart')
        cy.wait(1000)
        cy.getIframeBody("#b").find("#Dro1").trigger('drop')
        cy.xpath("//span[@id='messages']").invoke("text").should("eq","Mouse up on Dro1 . Dropped Dra1 on it")
        
    })
})