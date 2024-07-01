import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import ImportResearchMaterialsRequestPage from '../pages/importResearchMaterialsRequest-page';
import DashboardPage from '../pages/dashboard-page';

//=========================Variables========================
let data;
let dashboardPage:DashboardPage;
let importResearchMaterialsRequestPage:ImportResearchMaterialsRequestPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    importResearchMaterialsRequestPage = new ImportResearchMaterialsRequestPage(page);
    await page.goto(envSetup.getEnvURL());
    await importResearchMaterialsRequestPage.clickImportResearchMaterialsRequest();
});
//==========================Tests===========================
test.describe('Test import research materials request page',() =>{
    test('verify that import research materials request page has the correct components and texts', async ({ }) => {
        await importResearchMaterialsRequestPage.assertImportResearchMaterialsRequestIconExist();
        await importResearchMaterialsRequestPage.assertImportResearchMaterialsRequestTitleText();
        await importResearchMaterialsRequestPage.assertUserDetailsText();
        await importResearchMaterialsRequestPage.assertUserNameLabelText();
        await importResearchMaterialsRequestPage.assertUserNameValueText(data.arabicName1);
        await importResearchMaterialsRequestPage.assertIDNumberLabelText();
        await importResearchMaterialsRequestPage.assertIDNumberValueText(data.validUsername1);
        await importResearchMaterialsRequestPage.assertEmailLabelText();
        await importResearchMaterialsRequestPage.assertEmailValueText(data.email1);
        await importResearchMaterialsRequestPage.assertMobileNumberLabelText();
        await importResearchMaterialsRequestPage.assertMobileNumberValueText(data.mobileNumber1);
        await importResearchMaterialsRequestPage.assertOfficialEmailLabelText();
        await importResearchMaterialsRequestPage.assertVerifyButtonText();
        await importResearchMaterialsRequestPage.assertCancelButtonText();
        await importResearchMaterialsRequestPage.assertSendButtonText();
    });

    test('verify that we are redirected to dashboard when we click on cancel button', async ({ }) => {
        await importResearchMaterialsRequestPage.clickCancelButton();
        await dashboardPage.assertEducationSubjectsImportButtonText();
    });
    
    test('verify that empty official email inline error is correct', async ({ }) => {
        await importResearchMaterialsRequestPage.clickVerifyButton();
        await importResearchMaterialsRequestPage.assertEmptyOfficailEmailInlineErrorText();
    });
        
    test('verify that wrong official email inline error is correct', async ({ }) => {
        await importResearchMaterialsRequestPage.typeOfficialEmail("test");
        await importResearchMaterialsRequestPage.clickVerifyButton();
        await importResearchMaterialsRequestPage.assertWrongOffecialEmailInlineErrorText();
    });
            
    test('verify that unofficial email inline error is correct', async ({ }) => {
        await importResearchMaterialsRequestPage.typeOfficialEmail("test@gmail.com");
        await importResearchMaterialsRequestPage.clickVerifyButton();
        await importResearchMaterialsRequestPage.assertUnOffecialEmailInlineErrorText();
    });
})