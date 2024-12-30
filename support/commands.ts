/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
import Data from '../fixtures/userdata.json';
import 'cypress-file-upload';
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
// 	namespace Cypress {
// 		interface Chainable {
// 			login(email: string, password: string): Chainable<void>;
// 			drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
// 			dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
// 			visit(
// 				originalFn: CommandOriginalFn,
// 				url: string,
// 				options: Partial<VisitOptions>,
// 			): Chainable<Element>;
// 		}
// 	}
// }
declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to login.
			 * @example cy.login()
			 */
			myTest: any;
		}
	}
}

Cypress.Commands.add('myTest', (loginemail, loginpassword) => {
	cy.session([loginemail, loginpassword], () => {
		cy.visit('/');
		cy.clearAllCookies();
		cy.get('input[data-test-id="email-test-field"]').type(Data.loginemail); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.loginpassword); //password
		cy.wait(2000);
		cy.contains('Sign in').click(); //sign
		cy.wait(5000);
	});
});
