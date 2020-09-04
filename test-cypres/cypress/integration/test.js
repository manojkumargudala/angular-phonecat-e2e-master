describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

  describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(false)
    })
  })

  describe('My First Test', function() {
    it('Visits page', function() {
      cy.visit('https://www.cypress.io/')
    })
  })