/// <reference types="cypress" />

import Data from '../fixtures/userdata.json';

describe('Calilio Login Page Automation', () => {
	beforeEach(() => {
		cy.visit('https://demo-massmail.genesesolution.com/auth/login');
		//cy.contains('Sign up').click();
	});

	it('Valid Email and Valid Password', () => {
		cy.get('input[data-test-id="email-test-field"]').type(Data.loginemail); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.loginpassword); //password
		cy.contains('Sign in').click(); //sign in button
		cy.contains('Dashboard').should('be.visible');
	});

	it('Invalid Email and Valid Password', () => {
		cy.get('input[data-test-id="email-test-field"]').type(Data.invalidemail); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.loginpassword); //password
		cy.contains('Sign in').click(); //sign in
		cy.contains('Password attempts exceeded', { timeout: 10000 }).should('be.visible');
	});

	it('Valid Email and Invalid Password', () => {
		cy.get('input[data-test-id="email-test-field"]').type(Data.loginemail); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.invalidpassword); //password
		cy.contains('Sign in').click(); //sign in
		cy.contains('Incorrect username or password.', { timeout: 10000 }).should('be.visible');
	});

	it('Invalid Email and Invalid Password', () => {
		cy.get('input[data-test-id="email-test-field"]').type(Data.invalidemail); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.invalidpassword); //password
		cy.contains('Sign in').click(); //sign in
		cy.contains('Password attempts exceeded', { timeout: 10000 }).should('be.visible');
	});
});
