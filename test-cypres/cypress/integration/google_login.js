

describe('First Example', () => {  
before('setting the response',() => {


})

    it('Change the response of Phones call', () => {  
        cy.visit("https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin");  
        cy.wait(5000)
        cy.get("input#identifierId").type("seleniumauto0@gmail.com")
        cy.get("span:contains('Next')")
        cy.get("input[@name='password']").type("manoj1234")
        cy.get("span:contains('Next')")
        cy.screenshot()
    })
})