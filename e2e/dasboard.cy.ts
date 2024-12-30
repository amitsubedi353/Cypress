/// <reference types="cypress" />

import Data from '../fixtures/userdata.json';

describe('Calilio Test Automation', () => {
	beforeEach(() => {
		cy.visit('https://demo-massmail.genesesolution.com/');
		//cy.contains('Sign up').click();
	});

	it('signup page', () => {
		cy.get('input[data-test-id="email-test-field"]').type(Data.loginemail); //email
		cy.get('input[data-test-id="password-test-field"]').type(Data.loginpassword); //password
		cy.contains('Sign in').click(); //sign in

		//email-regiistry

		/*cy.get('span[class="ant-menu-title-content"]').contains('Email List').click();

		//click-email-list
		cy.get('span[class="ant-menu-title-content"]').contains('Email List').click();

		//Add user
		/*
		cy.contains('Add User').click();
		cy.get('input[data-test-id="name-test-field"]').type(Data.name); //name
		cy.get('input[data-test-id="email-test-field"]').type(Data.email); //email
		cy.get('input[data-test-id="phoneNumber-test-field"]').type(Data['ph-number']); //ph-number
		cy.get('input[data-test-id="description-test-field"]').type(Data.description); //description
		cy.get('button[type="submit"]').contains('Add User').click();

		cy.contains('Add User').click();
		cy.get('input[data-test-id="name-test-field"]').type(Data.name1); //name
		cy.get('input[data-test-id="email-test-field"]').type(Data.email1); //email
		cy.get('input[data-test-id="phoneNumber-test-field"]').type(Data['ph-number1']); //ph-nudata-test-id="phoneNumber-test-field"mber
		cy.get('input[data-test-id="description-test-field"]').type(Data.description1); //description
		cy.get('button[type="submit"]').contains('Add User').click();
		*/

		/*cy.contains('Import Email').click();
		cy.wait(2000);
		cy.fixture('userfile12.csv').then((fileContent) => {
			cy.get('input[type=file]').attachFile({
				fileContent: fileContent.toString(),
				fileName: 'userfile12.csv',
				mimeType: 'text/csv',
			});
		});
		cy.contains('Run Sanitizer').click();
		cy.contains('Confirm').click();

		//click-user-group
		cy.get('span[class="ant-menu-title-content"]').contains('User Groups').click();
		// click-email-group
		cy.get('span[class="ant-menu-title-content"]').contains('Email Groups').click();
		cy.contains('Add Group').click();
		cy.get('input[data-test-id="groupName-test-field"]').type(Data.groupname1); //groupname
		cy.contains('Upload a File').click(); //email
		cy.fixture('userfile12.csv').then((fileContent) => {
			cy.get('input[type=file]').attachFile({
				fileContent: fileContent.toString(),
				fileName: 'userfile12.csv',
				mimeType: 'text/csv',
			});
		});

		cy.contains('Run Sanitizer').click();
		cy.contains('Confirm').click();

		//email-group
		cy.contains('Add Group').click();
		cy.get('input[data-test-id="groupName-test-field"]').type(Data.groupname2); //groupname
		cy.contains('From Email List').click();

		cy.contains('Next').click();
		cy.wait(2000);

		cy.get('input[aria-label="Select all"]').click();
		cy.get('button[id="selectFromList"]').contains('Next').click();
		cy.contains('Confirm').click();*/

		//Templates
		/*	cy.contains('Templates').click();
		cy.contains('Email Template').click();
		cy.contains('Create New Template').click();
		cy.contains('Global IME Account Opening').click();
		cy.get('button[class="ant-btn css-l6bg4r ant-btn-primary sc-gTRrQi jGZxrH"]').click();

		cy.get('input[data-test-id="name-test-field"]').clear().type(Data.templatename);

		cy.get('textarea[data-test-id="description-test-field"]').clear().type(Data.templatedesc);
		cy.get('button[form="sendTest"]').click();*/

		//campaign

		cy.contains('Campaign').click();
		cy.contains('Create New Campaign').click();

		cy.get('span[class="ant-select-selection-search"]').type(Data.templatename);
		cy.contains('Next').click();
	});
});
