import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import AddServicePage from '../pages/addService-page';
import DashboardPage from '../pages/dashboard-page';
import SideMenuPage from '../pages/sideMenu-page';
import { only } from 'node:test';

//=========================Variables========================
let data;
let dashboardPage:DashboardPage;
let addServicePage:AddServicePage;
let sideMenuPage:SideMenuPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    addServicePage = new AddServicePage(page);
    sideMenuPage = new SideMenuPage(page);
    await page.goto(envSetup.getEnvURL());
    await sideMenuPage.clickAddServiceRequest();
});
//==========================Tests===========================
test.describe('Test add service request page',() =>{
    test('verify that add service request disclaimer page has the correct components and texts', async ({ }) => {
        await addServicePage.assertAddServiceIconExist();
        await addServicePage.assertAddServiceTitleText();
        await addServicePage.assertAddServiceDescriptionText();
        await addServicePage.assertCancelButtonText();
        await addServicePage.assertStartServiceButtonText();
    });

    test('verify that we are redirected to dashboard page when we click cancel button', async ({ }) => {
        await addServicePage.clickCancelButton();
        await dashboardPage.assertMyQualificationsButtonText();
    });

    test('verify that add service request page has the correct components and texts in cas we have service in progress', async ({ }) => {
        await addServicePage.clickStartServiceButton();
        await addServicePage.assertAddServiceSubTitleText();
        await addServicePage.assertNewIconText();
        await addServicePage.assertCanNotApplyText();
        await addServicePage.assertBackButtonText();
    });
    
    test.only('verify that we are redirected to add service disclaimer page when we click back button', async ({ }) => {
        await addServicePage.clickStartServiceButton();
        await addServicePage.assertAddServiceSubTitleText();
        await addServicePage.clickBackButton();
        await addServicePage.assertStartServiceButtonText();
    });
})