import { locators, validData, labels } from "../fixtures/test-data"

describe("E2E test for Peach Finance", () =>{
    before("User should login", () => {
        cy.visit('/login');
        cy.get(locators.fields.email).type(validData.userEmail, {force: true});
        cy.get(locators.fields.password).type(validData.userPassword, {force: true});
        cy.get(locators.buttons.submit).click();
    })

    it('User can add payment method', function () {
        cy.get(locators.buttons.loanOptions).click();
        cy.contains(labels.menuItems.menagePayment).click();
        cy.get(locators.buttons.addPayment).click();
        cy.contains(locators.buttons.addCard, labels.buttons.debitCard).click();
        cy.get(locators.fields.firstName).type(validData.firstName, {force: true});
        cy.get(locators.fields.lastName).type(validData.lastName, {force: true})
        cy.get(locators.fields.cardNumber).type(validData.cardNumber, {force: true})
        cy.get(locators.fields.cardGroup).siblings().first().find('input').type(validData.exp, {force: true})
        cy.get(locators.fields.cardGroup).siblings().contains('CVC').siblings('input').type(validData.cvc, {force: true})
        cy.get(locators.fields.cardGroup).siblings().last().find('input').type(validData.zip, {force: true})
        cy.get(locators.buttons.submit).click({force: true})
    });
})