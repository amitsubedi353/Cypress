/// <reference types="cypress" />

import Data from '../fixtures/userdata.json';

describe('Gump Test Automation', () => {
	beforeEach(() => {
		cy.myTest(Data.loginemail, Data.loginpassword);
	});

	it('Add User running a sanitizer', () => {
		//Add user-1
		cy.visit('/');
		cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
		cy.contains('Add Customer').click();
		cy.get('input[data-test-id="name-test-field"]').type(Data.name); //name
		cy.get('input[data-test-id="email-test-field"]').type(Data.email); //email
		cy.get('input[data-test-id="phoneNumber-test-field"]').type(Data['ph-number']); //ph-number
		cy.get('input[data-test-id="dob-test-field"]').click().type(Data.dob + cy.$$); //dob
		cy.get('input[data-test-id="gender-test-field"] Cypress.io{enter}').click(); //gender
		cy.get('input[class="ant-select-selection-search-input"]').contains('Nepalese').click(); //nationality

		cy.get('input[data-test-id="profession-test-field"]').type(Data.description); //profession
		cy.contains('Run Sanitizer').click();
		cy.get('button[type="submit"]').contains('Add User').click();
		cy.contains('Email registry is successfully created.').should('be.visible');
		cy.get('td[class="ant-table-cell"]')
			.eq(0)
			.get('div[type="success"]')
			.contains('Sanitized')
			.should('be.visible');
	});

	// it('Add User without running a sanitizer', () => {
	// 	//Add user-1
	// 	cy.visit('/');
	// 	cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.contains('Add Customer').should('be.visible').click();
	// 	cy.get('input[data-test-id="name-test-field"]').type(Data.name1); //name
	// 	cy.get('input[data-test-id="email-test-field"]').type(Data.email1); //email
	// 	cy.get('input[data-test-id="phoneNumber-test-field"]').type(Data['ph-number1']); //ph-number
	// 	cy.get('input[data-test-id="description-test-field"]').type(Data.description); //description
	// 	cy.get('button[type="submit"]').contains('Add User').click();
	// 	cy.contains('Email registry is successfully created.').should('be.visible');
	// });

	// it('Add Already Existed User', () => {
	// 	//Add user-1
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// cy.contains('Add Customer').should('be.visible').click();
	// 	cy.get('input[data-test-id="name-test-field"]').type(Data.name1); //name
	// 	cy.get('input[data-test-id="email-test-field"]').type(Data.email1); //email
	// 	cy.get('input[data-test-id="phoneNumber-test-field"]').type(Data['ph-number1']); //ph-number
	// 	cy.get('input[data-test-id="description-test-field"]').type(Data.description); //description
	// 	cy.get('button[type="submit"]').contains('Add User').click();
	// 	cy.contains(
	// 		'Email registry: asmita_acharya@varosatech.com already exist in the list!',
	// 	).should('be.visible');
	// });

	// it('Update Email running a sanitizer', () => {
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Update User').click();
	// 	cy.get('input[data-test-id="name-test-field"]').clear().type(Data.updatename);
	// 	cy.get('input[data-test-id="email-test-field"]').clear().type(Data.updateemail);
	// 	cy.get('input[data-test-id="phoneNumber-test-field"]').clear().type(Data.updatephnumber);
	// 	cy.get('input[data-test-id="description-test-field"]').clear().type(Data.updatedesc);
	// 	cy.contains('Run Sanitizer').click();
	// 	cy.get('button[type="submit"]').contains('Update User').click();
	// 	cy.contains('Email registry is successfully updated.').should('be.visible');
	// });

	// it('Update Email without running a sanitizer', () => {
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Update User').click();
	// 	cy.get('input[data-test-id="name-test-field"]').clear().type(Data.updatename);
	// 	cy.get('input[data-test-id="email-test-field"]').clear().type(Data.updateemail);
	// 	cy.get('input[data-test-id="phoneNumber-test-field"]').clear().type(Data.updatephnumber);
	// 	cy.get('input[data-test-id="description-test-field"]').clear().type(Data.updatedesc);
	// 	cy.get('button[type="submit"]').contains('Update User').click();
	// 	cy.contains('Email registry is successfully updated.').should('be.visible');
	// });

	// it('Delete Email', () => {
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Delete User').click();
	// 	cy.get('button[class="ant-btn css-1utzyru ant-btn-default ant-btn-lg"]')
	// 		.contains('Delete')
	// 		.click();
	// 	cy.contains('Email registry is successfully deleted.').should('be.visible');
	// });

	// it('Import File running a sanitizer', () => {
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.contains('Import Email').click();
	// 	cy.contains('Click to upload').click(); //email
	// 	cy.fixture('userfile12.csv').then((fileContent) => {
	// 		cy.get('input[type=file]').attachFile({
	// 			fileContent: fileContent.toString(),
	// 			fileName: 'userfile12.csv',
	// 			mimeType: 'text/csv',
	// 		});
	// 		cy.contains('Run Sanitizer').click();
	// 		cy.contains('Confirm').click();
	// 		cy.contains('Email list successfully imported').should('be.visible');
	// 	});
	// });

	// it('Import File  without running a sanitizer', () => {
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.contains('Import Email').click();
	// 	cy.contains('Click to upload').click(); //email
	// 	cy.fixture('userfile12.csv').then((fileContent) => {
	// 		cy.get('input[type=file]').attachFile({
	// 			fileContent: fileContent.toString(),
	// 			fileName: 'userfile12.csv',
	// 			mimeType: 'text/csv',
	// 		});
	// 		cy.wait(3000);
	// 		cy.contains('Confirm').click();
	// 		cy.contains('Email list successfully imported').should('be.visible');
	// 	});
	// });

	// it('Search Filter(name) in email list', () => {
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.get('input[placeholder="Search"]').click().type(Data.name1);
	// 	cy.wait(2000);
	// 	cy.get('td[class="ant-table-cell"]').contains(Data.name1).should('be.visible');
	// });

	// it('Search Filter(email) in email list', () => {
	// 	cy.get('input[placeholder="Search"]').click().type(Data.email1);
	// 	cy.wait(2000);
	// 	cy.get('tbody[class="ant-table-tbody"]').should('be.visible');
	// });

	// it('Search Filter(phonenumber) in email list', () => {
	// 	cy.get('input[placeholder="Search"]').click().type(Data['ph-number1']);
	// 	cy.wait(2000);
	// 	cy.get('tbody[class="ant-table-tbody"]').should('be.visible');
	// });

	// it('Search Filter in email list(NT)', () => {
	// cy.visit('/');
	// cy.get('span[class="ant-menu-title-content"]').contains('Customers List').click();
	// 	cy.get('input[placeholder="Search"]').click().type('munnn');
	// 	cy.wait(2000);
	// 	cy.get('img[src="/assets/EmptyRegistry.a568b469.png"]').should('be.visible');
	// });
});
