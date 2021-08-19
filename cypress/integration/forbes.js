import variables from '../src/utils';



describe('forbes ', () => {
  before(() => {

    cy.visit(variables.frontEndLink);
  });
  it('should have the same header info from the API', () => {
    cy.request(variables.headerAPInfo).then((res) => {
      cy.get(variables.logoSelector).should('have.attr', 'src', res.body.logo);
      cy.get(variables.descriptionSelector).should('have.text', res.body.description);
    });
  });

  it('should have the same Assets Traded On the API', () => {
    cy.request(variables.tradesAPInfo).then((res) => {
      let data = JSON.parse(res.body).filter((a) => a.slug);

      data.forEach((value, idx) => {
        cy.get(variables.listItemSelector)
          .eq(idx)
          .find('a')
          .should(
            'have.text',
            `${value.name} (${value.displaySymbol.toUpperCase()})`
          );
      });
    });
  });
});
