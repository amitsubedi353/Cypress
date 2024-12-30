/// <reference types="cypress" />
//import 'cypress-drag-drop';

import Data from '../fixtures/userdata.json';

describe('Calilio Test Automation', () => {
	beforeEach(() => {
		cy.viewport(1280, 720);
		cy.myTest(Data.loginemail, Data.loginpassword);
	});

	it(' Create New Email Template', () => {
		cy.visit('/');
		cy.contains('Templates').click();
		cy.contains('Create New Template').click();
		cy.get('input[class="ant-radio-input"][value="Email"]').click();
		cy.contains('Next').click();
		cy.get('span[class="leading-5"]').contains('Create new Template').click();
		//drag and drop
		// const dataTransfer = DataTransfer;
		// cy.get('div[class="gjs-block gjs-one-bg gjs-four-color-h"][title="1 column"]').trigger(
		// 	'dragstart',
		// 	{
		// 		dataTransfer,
		// 	},
		// );

		// cy.get('div[id="gjs-cv-tools"]').trigger('drop', {
		// 	dataTransfer,
		// 	force: true,
		// });
		cy.get('div[class="gjs-block gjs-one-bg gjs-four-color-h"][title="1 column"]').trigger(
			'mousedown',
			{ which: 1 },
		);
		cy.get(
			'/html[1]/body[1]/div[1]/div[1]/section[1]/main[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[2]/img[1]',
		)
			.trigger('mousemove')
			.trigger('mouseup', { force: true });
		cy.contains('Send for Approval').click();
		cy.get('input[data-test-id="name-test-field"]').type('Template test');
		cy.get('textarea[data-test-id="description-test-field"]').type('Template test');
		cy.get('button[type="submit"]').contains('Save').click();
	});

	it(' Create Empty Email Template', () => {
		cy.visit('/');
		cy.contains('Templates').click();
		cy.contains('Create New Template').click();
		cy.get('input[class="ant-radio-input"][value="Email"]').click();
		cy.contains('Next').click();
		cy.get('span[class="leading-5"]').contains('Create new Template').click();
		cy.contains('Send for Approval').click();
		cy.get('input[data-test-id="name-test-field"]').type('Template test');
		cy.get('textarea[data-test-id="description-test-field"]').type('Template test');
		cy.get('button[type="submit"]').contains('Save').click();
		cy.contains('Email Template Cannot be empty').should('be.visible');
	});

	it(' Create Default Email Template', () => {
		cy.visit('/');
		cy.contains('Templates').click();
		cy.contains('Create New Template').click();
		cy.get('input[class="ant-radio-input"][value="Email"]').click();
		cy.contains('Next').click();
		cy.get('div[class="ant-col ant-col-lg-12 ant-col-xxl-6 css-hd0dl"]').eq(1).click();
		cy.get('button[class="ant-btn css-hd0dl ant-btn-primary sc-gTRrQi jGZxrH"]')
			.contains('Save')
			.click();
		cy.get('input[data-test-id="name-test-field"]').clear().type(Data.defaulttemplate);
		cy.get('textarea[data-test-id="description-test-field"]')
			.clear()
			.type(Data.defaulttemplate);
		cy.get(
			'button[class="ant-btn css-hd0dl ant-btn-primary sc-gTRrQi jGZxrH"][type="submit"]',
		).click();
	});

	// it(' Send Test Mail(Default Email Template)', () => {
	// 	cy.contains('Create New Template').click();
	// 	cy.get('input[class="ant-radio-input"][value="Email"]').click();
	// 	cy.contains('Next').click();
	// 	cy.get('div[class="ant-col ant-col-lg-12 ant-col-xxl-6 css-hd0dl"]').eq(1).click();
	// 	cy.contains('Send test mail').click();
	// 	cy.get('div[class="ant-select-selector"]').click().type(`${Data.email2}{enter}`);
	// 	cy.get('button[class="ant-btn css-hd0dl ant-btn-primary sc-gTRrQi jGZxrH w-full"]')
	// 		.contains('Send')
	// 		.click();
	// 	cy.contains('Email Sent Successfully').should('be.visible');
	// });

	// it(' Preview(Default Email Template)', () => {
	// 	cy.contains('Create New Template').click();
	// 	cy.get('input[class="ant-radio-input"][value="Email"]').click();
	// 	cy.contains('Next').click();
	// 	cy.get('div[class="ant-col ant-col-lg-12 ant-col-xxl-6 css-hd0dl"]').eq(1).click();
	// 	cy.contains('Preview').click();
	// 	cy.contains('Exit Preview').click();
	// 	cy.get('button[class="ant-btn css-hd0dl ant-btn-primary sc-gTRrQi jGZxrH"]')
	// 		.eq(0)
	// 		.contains('Save')
	// 		.click();
	// 	cy.get('input[data-test-id="name-test-field"]').clear().type(Data.previewtemplate);
	// 	cy.get('textarea[data-test-id="description-test-field"]')
	// 		.clear()
	// 		.type(Data.previewtemplate);
	// 	cy.get(
	// 		'button[class="ant-btn css-hd0dl ant-btn-primary sc-gTRrQi jGZxrH"][type="submit"]',
	// 	).click();
	// 	cy.contains('Email template is successfully created.').should('be.visible');
	// });

	// it(' Edit Email Template)', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Edit Template').click();
	// 	//drag and drop
	// 	const dataTransfer = DataTransfer;
	// 	cy.get('div[class="gjs-block gjs-one-bg gjs-four-color-h"][title="1 column"]').trigger(
	// 		'dragstart',
	// 		{
	// 			dataTransfer,
	// 		},
	// 	);

	// 	cy.get('div[id="gjs-cv-tools"]').trigger('drop', {
	// 		dataTransfer,
	// 		force: true,
	// 	});
	// });

	// it(' View Email Template', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('View Template').click();
	// 	cy.contains('Back').click();
	// });

	// it(' View and Create Email Template', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Duplicate Template').click();
	// 	cy.get('input[data-test-id="name-test-field"]').type('New Duplicate template1');
	// 	cy.get('textarea[data-test-id="description-test-field"]').type('New Duplicate template');
	// 	cy.contains('Save').click();
	// 	cy.contains('Email Template Created').should('be.visible');
	// });

	// it(' Delete Email Template)', () => {
	// 	cy.get('svg[class="ant-dropdown-trigger sc-fnGiBr jcNVqS"]').eq(0).click();
	// 	cy.contains('Delete Template').click();
	// 	cy.get('button[class="ant-btn css-1utzyru ant-btn-default ant-btn-lg"]')
	// 		.contains('Delete')
	// 		.click();
	// 	cy.contains('Template is successfully deleted.').should('be.visible');
	// });
});
