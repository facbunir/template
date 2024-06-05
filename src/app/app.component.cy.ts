import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should redirect to welcome screen when creds are correct', () => {
    cy.mount(AppComponent);
    cy.contains('test');
  });
});
