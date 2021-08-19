describe('Cypress Request ', () => {

  
  const key = 'a1cb5c658f5871864a9c1f4e48262066374a2c66';

  it('should deny the hit without key  ', () => {
    cy.request({
      url: '/ticker',
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).to.eq(
        "Authentication failed. We couldn't find an API key in the request. See our documentation at docs.nomics.com for details.\n"
      );
    });
  });
  it('should get the data for specific coin ', () => {
    cy.wait(1100);

    cy.request(`/ticker?key=${key}&ids=BTC`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.length).to.eq(1);
      expect(res.body[0].id).to.eq('BTC');
    });
    cy.wait(1100);
    cy.request(`/ticker?key=${key}&ids=ETH`).then((res) => {
        

      expect(res.status).to.eq(200);
      expect(res.body.length).to.eq(1);
      expect(res.body[0].id).to.eq('ETH');
    });
  });

  it.only('should get the data for specific page ', () => {
    let perPageResult = {};
    cy.wait(1100);
    cy.request(`/ticker?key=${key}&page=1&per-page=7`).then((res) => {
      perPageResult = res.body;
      expect(res.status).to.eq(200);
      expect(res.body.length).to.eq(7);
    });
    cy.wait(1100);
    cy.request(`/ticker?key=${key}&page=2&per-page=7`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.length).to.eq(7);
      res.body.forEach((result, idx) => {
        expect(result).to.not.deep.equal(perPageResult[idx]);
      });
    });
  });
});
