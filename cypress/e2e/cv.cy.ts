import {APP_API} from './../../src/app/config/app-api.config';
describe('Cv Page', () => {
  it('should show Cv Page with Cv list', () => {
    cy.intercept(APP_API.cv, {fixture: 'cvs'});
    cy.visit('/cv');
    cy.get('[data-cy="cvList"]');
    cy.get('[data-cy="cvCard"]').should('not.exist');
  })
  it('should show CvCard details after click on cv', () => {
    cy.intercept(APP_API.cv, {fixture: 'cvs'});
    cy.visit('/cv');
    cy.get('[data-cy="cvList"]').children().first().click();
    const id = 1;
    cy.intercept(APP_API.cv + id, { fixture: 'cv1' });
    cy.get('[data-cy="cvDetailButton"]').click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/'+id);
    });

  })
})
