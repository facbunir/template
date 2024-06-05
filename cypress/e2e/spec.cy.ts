describe('template spec', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?viewMode=story&id=example-header--logged-in',
    );
  });
  it('passes', () => {
    cy.contains('test');
  });
});
