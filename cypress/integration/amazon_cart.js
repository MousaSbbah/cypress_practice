describe('My First Test', () => {
    before(() => {
      cy.visit('/')
    });
    it('Should add an item to the cart', () => {
      cy.get('#twotabsearchtextbox').type('clock');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-asin="B085HF9ZR4"]').eq(0).find('.a-text-normal').eq(0).click();
      let title='';
      cy.get('#productTitle').invoke('text')
        .then(tt=>{
        title = tt.split('\n\n\n\n\n\n\n\n')[1].split('\n\n\n\n\n\n\n')[0];
        console.log(title);
        cy.get('#add-to-cart-button').click();
        cy.get('.nav-cart-icon').click({force:true});
        cy.get('.a-truncate-full').should('have.text',title) 
      })
    })

  })


  
  