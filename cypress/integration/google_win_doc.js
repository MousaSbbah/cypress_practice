describe('My First Test', () => {
    before(() => {
      cy.visit('/')
    });
    it('should check the window and document objects', () => {
        cy.document().should('have.property', 'domain').and('eq','google.com')
        cy.window().should('have.property', 'location')
            .then(location=>{
                expect(location.href).to.eq('https://www.google.com/')
            })
      })
    })



  
  