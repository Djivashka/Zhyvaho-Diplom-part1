///<reference types="cypress"/>
import user from '../fixtures/user.json';


it('Authorization', () => {
    cy.log("**Open authorization page**")
    cy.visit('/#/login')

    cy.log('**Dismiss pop-up**')
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click()

    cy.log("**Fill the authorization page**")
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('mat-icon.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').eq(5).click()

    cy.log("Check that authorization was completed successfully")
    cy.get('.mat-button-wrapper').should('contain', ' Your Basket')
}
)