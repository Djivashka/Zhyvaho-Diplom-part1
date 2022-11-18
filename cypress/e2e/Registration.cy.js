///<reference types="cypress"/>
import {faker} from '@faker-js/faker';

let user = {
    email: faker.internet.email(),
    password: faker.internet.password(10),
    answer: faker.name.firstName('female')
}

it('Registration'), () => {
    cy.log("**Open registration page**")
    cy.visit('/#/register')

    cy.log("**Fill the registration page**")
    cy.get('#emailControl').type(user.email)
    cy.get('#passwordControl').type(user.password)
    cy.get('#repeatPasswordControl').type(user.password)
    cy.get('.mat-select-arrow-wrapper.ng-tns-c130-15').click()
    cy.get('#mat-option-7').click()
    cy.get('#securityAnswerControl').type(user.answer)

    cy.log("**Click registration button**")
    cy.get('.mat-button-wrapper').should('contain', ' Register ').click()
}