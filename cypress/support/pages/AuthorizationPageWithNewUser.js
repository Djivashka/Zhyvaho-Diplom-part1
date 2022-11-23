import {faker} from '@faker-js/faker';

let user = {
    email: faker.internet.email(),
    password: faker.internet.password(10),
    answer: faker.name.firstName('female')
}

class AuthorizationPage {

    registration(){
    cy.visit('/#/register')
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click()
    cy.get('#emailControl').type(user.email)
    cy.get('#passwordControl').type(user.password)
    cy.get('#repeatPasswordControl').type(user.password)
    cy.get('.mat-select-arrow-wrapper.ng-tns-c130-11').click()
    cy.get('#mat-option-7').click()
    cy.get('#securityAnswerControl').type(user.answer)
    cy.get('#registerButton').click()
    }
    
    login(){
        cy.visit('/#/login')
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('mat-icon.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').eq(5).click()
    }
}

export default new AuthorizationPage();




