///<reference types="cypress"/>
import {faker} from '@faker-js/faker';
import loginWithRegestration from '../support/pages/AuthorizationPageWithNewUser'

let adress = {
    country: faker.address.country(),
    name: faker.name.firstName(),
    mobileNumber: faker.random.numeric(10),
    zipCode: faker.random.numeric(7),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
}

it('Feedback', () => {
    cy.log('**Register**')
    loginWithRegestration.registration()

    cy.log('**Login**')
    loginWithRegestration.login()
    cy.wait(1000)

    cy.log('**Go to feedback page')
    cy.visit('/#/contact')

    cy.log('**Leave a comment**')
    cy.get('#comment').type('comment')

    cy.log('**Move slider Rating**')
    cy.get('mat-slider.mat-focus-indicator.mat-accent.mat-slider-has-ticks.mat-slider-horizontal.mat-slider-thumb-label-showing')
    .type("{rightarrow}")

    cy.log('**Resolve Captcha controll and type answer')
    cy.get('#captcha').invoke('text')
    .then(text => {
        let captchaValue = eval(text)
        cy.log(captchaValue)
        cy.get('#captchaControl').type(captchaValue)
    })
    
    cy.log('**Submit feedback**')
    cy.get('.mat-button-wrapper').contains(' Submit ').click()

    cy.log('**Check that user leaved a feedback')
    cy.get('span.mat-simple-snack-bar-content').should('contain', 'Thank you for your feedback.')

}
)