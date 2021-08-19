import variables from '../../src/utils';

describe('intercept ', () => {
    
  it('should intercept ', () => {

    cy.intercept('https://www.forbes.com/xignite/*',(req)=>{
        req.continue(res=>{
            res.body.PercentChangeFromPreviousClose=0.5
        })
    }).as('xigniteFitch');

    cy.visit(variables.frontEnd1)


    cy.wait('@xigniteFitch')

  });
});
