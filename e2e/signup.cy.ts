/// <reference types="cypress" />

import Data from '../fixtures/userdata.json';

describe('Gump Signup Page Automation', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Blank Input Field', () => {
		cy.get('input[data-test-id="name-test-field"]').click(); //name
		cy.get('input[data-test-id="phone_number-test-field"]').click(); //Phone-number
		cy.get('input[data-test-id="email-test-field"]').click(); //email
		cy.get('input[data-test-id="password-test-field"]').click(); //password
		cy.contains('Get started').click();
		cy.contains('Password is required.').should('be.visible');
	});

	it('Invalid Email in SignUp page', () => {
		cy.get('input[data-test-id="name-test-field"]').type(Data.name); //name
		cy.get('input[data-test-id="phone_number-test-field"]').type(Data['ph-number1']); //Phone-number
		cy.get('input[data-test-id="email-test-field"]').type(Data.signupinvalidemail); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.signuppassword); //password
		cy.contains('Get started').click();
		cy.contains('Invalid email format.').should('be.visible');
	});

	it('Invalid PhoneNumber in SignUp page', () => {
		cy.get('input[data-test-id="name-test-field"]').type(Data.name); //name
		cy.get('input[data-test-id="phone_number-test-field"]').type(Data['invalidph-number']); //Phone-number
		cy.get('input[data-test-id="email-test-field"]').type(Data.email); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.signuppassword); //password
		cy.contains('Get started').click();
		cy.contains('Invalid phone number').should('be.visible');
	});

	it('Invalid password in Signup page', () => {
		cy.get('input[data-test-id="name-test-field"]').type(Data.name); //name
		cy.get('input[data-test-id="phone_number-test-field"]').type(Data['ph-number']); //Phone-number
		cy.get('input[data-test-id="email-test-field"]').type(Data.email); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.passwordinvalid); //password
		cy.contains('Get started').click();
		cy.contains('Password did not confirm with policy').should('be.visible');
	});

	it('Already Exist Email in Signup page', () => {
		cy.get('input[data-test-id="name-test-field"]').type(Data.name); //name
		cy.get('input[data-test-id="phone_number-test-field"]').type(Data['ph-number']); //Phone-number
		cy.get('input[data-test-id="email-test-field"]').type(Data.email2); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.signuppassword); //password
		cy.contains('Get started').click();
		cy.wait(5000);
		Cypress.on('uncaught:exception', (err, runnable) => {
			if (err.message.includes('An account with the given email already exists.')) {
				return false;
			}
			cy.contains('An account with the given email already exists.', {
				timeout: 10000,
			}).should('be.visible');
		});
	});

	it('Sign Up Process(Valid data)', () => {
		cy.get('input[data-test-id="name-test-field"]').type(Data.name); //name
		cy.get('input[data-test-id="phone_number-test-field"]').type(Data['ph-number']); //Phone-number
		cy.get('input[data-test-id="email-test-field"]').type(Data.email); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.signuppassword); //password
		cy.contains('Get started').click();
		cy.contains('Verify Your Email', { timeout: 10000 }).should('be.visible');
	});
});
