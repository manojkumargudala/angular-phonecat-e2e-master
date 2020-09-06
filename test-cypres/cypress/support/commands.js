// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('drag1',(source, target) => {
    cy.log("executed drage and drop")
    console.log("executed drage and drop")
    //const currentSourcePosition = target.getBoundingClientRect() 
    $target => {
        let currentSourcePosition = $target[0].getBoundingClientRect();
    source.trigger('mousedown', { which: 1 })
    .trigger('mousemove', { clientX: currentSourcePosition.clientX, clientY: currentSourcePosition.clientY })
    .trigger('mouseup', { force: true })
  }
})

  Cypress.Commands.add('getIframeBody', (iframeselector) => {
    return cy
    .get(iframeselector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
  })

  Cypress.Commands.add('customDrag', (source,sourceFrame, target,targetFrame) => {
    cy.log("executed drage and drop")
    cy.getIframeBody(targetFrame).then($el => {
        const currentTargetFramePosition = getCoords($el[0])
 
    cy.getIframeBody(targetFrame).find(target).then($el => {
        const currentTargetPosition = getCoords($el[0])
    cy.log("executed drage and drop")
    cy.log(currentTargetFramePosition.x)
    cy.log(currentTargetFramePosition.y)
    cy.log(currentTargetPosition.x)
    cy.log(currentTargetPosition.y)
    cy.getIframeBody(sourceFrame).find(source).then($el => {
        const currentSourcePosition = getCoords($el[0])
    cy.getIframeBody(sourceFrame).find(source).trigger('mousemove', { force: true,clientX: currentTargetFramePosition.x+currentSourcePosition.x, 
        clientY: currentTargetFramePosition.y+currentSourcePosition.y })
    .trigger('mousedown', { force: true, which: 1 })
    .trigger('mousemove', { force: true,clientX: currentTargetFramePosition.x+currentTargetPosition.x, 
        clientY: currentTargetFramePosition.y+currentTargetPosition.y })
    .trigger('mouseup', { force: true })
    cy.log("executed drage and drop")
    })
    })  
    })
    const getCoords = ($el) => {
        const domRect = $el.getBoundingClientRect()
        const coords = {
            x: domRect.left + (domRect.width / 2 || 0),
            y: domRect.top + (domRect.height / 2 || 0)
        }
    
        return coords
    }
  })
