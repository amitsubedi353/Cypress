/// <reference types="cypress" />

import Data from '../fixtures/userdata.json';
import 'cypress-file-upload';

describe('Gump Test Automation', () => {
	beforeEach(() => {
		cy.myTest(Data.loginemail, Data.loginpassword);
	});

	it('Add Group Uploading a File(Running Sanitizer)', () => {
		cy.visit('/');
		//click-user-group
		cy.get('span[class="ant-menu-title-content"]').contains('User Groups').click();
		// click-email-group
		cy.get('span[class="ant-menu-title-content"]').contains('Email Groups').click();
		cy.contains('Add Group').click();
		cy.get('input[data-test-id="groupName-test-field"]').type(Data.groupname); //groupname
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
		cy.contains('Email registry group with email registries is successfully created.').should(
			'be.visible',
		);
		cy.get('input[class="class="ant-table-cell ant-table-cell-row-hover""]')
			.eq(0)
			.contains('Sanitized')
			.should('be visible');
	});

	it('Add Group From Email List(Running Sanitizer)', () => {
		cy.visit('/');
		//click-user-group
		cy.get('span[class="ant-menu-title-content"]').contains('User Groups').click();
		// click-email-group
		cy.get('span[class="ant-menu-title-content"]').contains('Email Groups').click();
		cy.contains('Add Group').click();
		cy.get('input[data-test-id="groupName-test-field"]').type(Data.groupname1); //groupname
		cy.contains('From Email List').click();

		cy.contains('Next').click();
		cy.wait(2000);

		cy.get('input[aria-label="Select all"]').click();
		cy.get('button[id="selectFromList"]').contains('Next').click();
		cy.contains('Run Sanitizer').click();
		cy.contains('Confirm').click();
		cy.contains('Email registry group is successfully created.').should('be.visible');
	});

	// it('Add Group Uploading a File(Without Running Sanitizer)', () => {
	// 	cy.contains('Add Group').click();
	// 	cy.get('input[data-test-id="groupName-test-field"]').type(Data.groupname2); //groupname
	// 	cy.contains('Upload a File').click(); //email
	// 	cy.fixture('userfile12.csv').then((fileContent) => {
	// 		cy.get('input[type=file]').attachFile({
	// 			fileContent: fileContent.toString(),
	// 			fileName: 'userfile12.csv',
	// 			mimeType: 'text/csv',
	// 		});
	// 	});
	// 	cy.wait(3000);
	// 	cy.contains('Confirm').click();
	// 	cy.contains('Email registry group with email registries is successfully created.').should(
	// 		'be.visible',
	// 	);
	// });

	// it('Add Group From Email List( Without Running Sanitizer)', () => {
	// 	cy.contains('Add Group').click();
	// 	cy.get('input[data-test-id="groupName-test-field"]').type(Data.groupname3); //groupname
	// 	cy.contains('From Email List').click();

	// 	cy.contains('Next').click();
	// 	cy.wait(2000);

	// 	cy.get('input[aria-label="Select all"]').click();
	// 	cy.get('button[id="selectFromList"]').contains('Next').click();
	// 	cy.contains('Confirm').click();
	// 	cy.contains('Email registry group is successfully created.').should('be.visible');
	// });

	// it('Email Group Already Exist(NT)', () => {
	// 	cy.contains('Add Group').click();
	// 	cy.get('input[data-test-id="groupName-test-field"]').type(Data.groupname3); //groupname
	// 	cy.contains('From Email List').click();

	// 	cy.contains('Next').click();
	// 	cy.wait(2000);

	// 	cy.get('input[aria-label="Select all"]').click();
	// 	cy.get('button[id="selectFromList"]').contains('Next').click();
	// 	cy.contains('Confirm').click();
	// 	cy.contains('"Email registry group: data-group3 already exist!"').should('be.visible');
	// });

	// it('Edit Group)', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Edit Group').click();
	// 	cy.get('input[data-test-id="groupName-test-field"]').clear().type('data-group5'); //groupname
	// 	cy.get('button[type="submit"]').contains('Confirm').click();
	// 	cy.contains('Group updated successfully', { timeout: 10000 }).should('be.visible');
	// });

	// it('View Emails', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('View Emails').click();
	// 	cy.contains('Add Email').click();
	// 	//Add user-1
	// 	cy.get('input[data-test-id="name-test-field"]').type(Data.emailname); //name
	// 	cy.get('input[data-test-id="email-test-field"]').type(Data.emailemail); //email
	// 	cy.get('input[data-test-id="phoneNumber-test-field"]').type(Data['emailph-number']); //ph-number
	// 	cy.get('input[data-test-id="description-test-field"]').type(Data.description); //description
	// 	cy.contains('Run Sanitizer').click();
	// 	cy.get('button[type="submit"]').contains('Add User').click();
	// 	cy.contains('Email registry is successfully created.').should('be.visible');
	// });

	// it('Delete Group', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Delete Group').click();
	// 	cy.get(
	// 		'button[style="color: rgb(255, 255, 255); background: rgb(240, 68, 56); border: 1px solid rgb(240, 68, 56); width: 100%;"]',
	// 	)
	// 		.contains('Delete')
	// 		.click();
	// 	cy.contains('Email registry group is successfully deleted.').should('be.visible');
	// });

	// it('Activate/Deactivate Group', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Deactivate Group')
	// 		.should('be.visible')
	// 		.then(($deactivateBtn) => {
	// 			if ($deactivateBtn) {
	// 				cy.contains('Deactivate Group').click();
	// 				cy.get('button[type="submit"]').contains('De-activate').click();
	// 			}
	// 			cy.get('td[class="ant-table-cell ant-table-cell-row-hover"]').eq(0);
	// 			cy.get('div[type="danger"]').contains('Inactive').should('be.visible');
	// 		});
	// });
});
