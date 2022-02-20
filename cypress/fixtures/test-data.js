export const locators = {
    fields: {
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        firstName: 'input[name="first name"]',
        lastName: 'input[name="last name"]',
        cardNumber: '[class="with-card-type"] input',
        cardGroup: '[class="with-card-type"]'
    },
    buttons: {
        submit: '[data-cy="submit"]',
        loanOptions: 'button[label="Loan"]',
        addPayment: 'button .content',
        addCard: '.btn-label'
    }
}

export const labels = {
    buttons: {
        debitCard: 'Debit Card',
        makePayment: 'Make a payment'
    },
    menuItems: {
        menagePayment: 'Manage payment methods'
    }
}

export const validData = {
    userEmail: 'auto.user+bo-2k6e-4plk@peachfinance.com',
    userPassword: 'hello12345',
    firstName: 'John',
    lastName: 'Doe',
    cardNumber: '5698563214562089',
    cvc: '123',
    exp: '07223',
    zip: '12312'
}