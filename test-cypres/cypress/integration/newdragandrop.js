it('works', () => {
    cy.visit('https://angular-oxkc7l-zirwfs.stackblitz.io/')
    cy.contains('To do', { timeout: 15000 }) // ensure page is loaded -__-
  
    const item = '.example-box:not(.cdk-drag-placeholder)'
  
    cy.get('#cdk-drop-list-1').children(item).should('have.length', 5)
  
    cy.get('.example-box:contains("Get to work")').dragTo('.example-box:contains("Get up")')
    cy.get('#cdk-drop-list-1').children(item).should('have.length', 6)
  
    // interpolates 10 extra mousemove events on the way
    cy.get('#cdk-drop-list-0').dragTo('#cdk-drop-list-1', { steps: 10 })
    cy.get('#cdk-drop-list-1').children(item).should('have.length', 7)
  
    // sets steps >= 10
    cy.get('#cdk-drop-list-0').dragTo('#cdk-drop-list-1', { smooth: true })
    cy.get('#cdk-drop-list-1').children(item).should('have.length', 8)
  
    cy.get('#cdk-drop-list-0').dragTo('#cdk-drop-list-1')
    cy.get('#cdk-drop-list-1').children(item).should('have.length', 9)
  })