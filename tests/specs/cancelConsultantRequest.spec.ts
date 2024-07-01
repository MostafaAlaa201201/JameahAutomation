import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import CancelConsultantRequestPage from '../pages/cancelConsultantRequest-page';
import SideMenuPage from '../pages/sideMenu-page';

//=========================Variables========================
let data;
let sideMenuPage:SideMenuPage;
let cancelConsultantRequestPage:CancelConsultantRequestPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    sideMenuPage = new SideMenuPage(page);
    cancelConsultantRequestPage = new CancelConsultantRequestPage(page);
    await page.goto(envSetup.getEnvURL());
    await sideMenuPage.clickCancelConsultantRequest();
    await cancelConsultantRequestPage.assertRequestNumberLabelText();
});
//==========================Tests===========================
test.describe('Test cancel consultant request page',() =>{
    test('verify that cancel consultant request page has the correct components and texts', async ({ }) => {
        await cancelConsultantRequestPage.assertCancelConsultantRequestIconExist();
        await cancelConsultantRequestPage.assertCancelConsultantRequestTitleText();
        await cancelConsultantRequestPage.assertSearchButtonText();
        await cancelConsultantRequestPage.assertResetButtonText();
    });

    test('verify that the no search result text is correct', async ({ }) => {
        await cancelConsultantRequestPage.TypeRequestNumber('test');
        await cancelConsultantRequestPage.clickSearchButton();
        await cancelConsultantRequestPage.assertNoSearchResultText();
    });
    
    test('verify that we can result search results', async ({ }) => {
        await cancelConsultantRequestPage.TypeRequestNumber('test');
        await cancelConsultantRequestPage.clickSearchButton();
        await cancelConsultantRequestPage.clickResetButton();
    });
})