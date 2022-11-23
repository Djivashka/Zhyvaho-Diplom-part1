///<reference types="cypress"/>
import loginWithRegestration from '../support/pages/AuthorizationPageWithNewUser'
import {faker} from '@faker-js/faker';

let adress = {
    country: faker.address.country(),
    name: faker.name.firstName(),
    mobileNumber: faker.random.numeric(10),
    zipCode: faker.random.numeric(7),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
}

it('Order', () => {
    cy.log('**Register**')
    loginWithRegestration.registration()

    cy.log('**Login**')
    loginWithRegestration.login()

    cy.log('**Add to basket**')
    cy.get('.mat-focus-indicator.btn-basket.mat-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').eq(0).click({force: true})
    
    cy.log('**Go to basket**')
    cy.get('.mat-button-wrapper').eq(4).click()

    cy.log('**Checkout order**')
    cy.get('#checkoutButton').click()

    cy.log('**Add new address**')
    cy.get('.btn-new-address').click()

    cy.log('**Fill the form adress')
    cy.get('[placeholder="Please provide a country."]').type(adress.country)
    cy.get('[placeholder="Please provide a name."]').type(adress.name)
    cy.get('[placeholder="Please provide a mobile number."]').type(adress.mobileNumber)
    cy.get('[placeholder="Please provide a ZIP code."]').type(adress.zipCode)
    cy.get('[placeholder="Please provide an address."]').type(adress.address)
    cy.get('[placeholder="Please provide a city."]').type(adress.city)

    cy.log('**Submit**')
    cy.get('#submitButton').click()

    cy.log('**Choose address and continue**')
    cy.get('[id="mat-radio-40"]').click({force: true})
    cy.get('span').contains('Continue').click()

    cy.log('**Choose delivery speed**')
    cy.get('.mat-radio-inner-circle').eq(0).click()
    cy.get('span').contains('Continue').click()

    cy.log('**Setup banking card**')
    cy.get('.mat-content.ng-tns-c150-30').click()
    cy.get('[id="mat-input-14"]').type(adress.name)
    cy.get('[id="mat-input-15"]').type(faker.random.numeric(16))
    cy.get('[id="mat-input-16"]').select(1)
    cy.get('[id="mat-input-17"]').select(1)
    cy.get('span').contains(' Submit ').click()
    
    cy.log('**Confirm the order**')
    cy.get('.mat-radio-container').click()
    cy.get('span').contains('Continue').click()

    cy.log('**Place order**')
    cy.get('span').contains('Place your order and pay').click()

    cy.log('**Check thar order was placed')
    cy.get('.confirmation').should('contain', 'Thank you for your purchase!')
}
)