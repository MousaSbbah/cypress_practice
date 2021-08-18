describe('Cypress Request ', () => {

    it('should hit the API ', () => {
        cy.request('https://swapi.dev/api/').then(res=>{
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('people');

            

        })

        cy.request('https://swapi.dev/api/people').then(res=>{
            expect(res.status).to.eq(200);
                    
            

        })
      })
    })



  
  