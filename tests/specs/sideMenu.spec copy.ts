import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import MyQualificationsPage from '../pages/myQualifications-page';
import DashboardPage from '../pages/dashboard-page';
import CommonPage from '../pages/common-page';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import SideMenuPage from '../pages/sideMenu-page';
//=========================Variables========================
let data;
let dashboardPage:DashboardPage;
let myQualificationsPage:MyQualificationsPage;
let commonPage:CommonPage;
let homePage:HomePage;
let loginPage:LoginPage;
let sideMenuPage:SideMenuPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    myQualificationsPage = new MyQualificationsPage(page);
    commonPage = new CommonPage(page);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    sideMenuPage = new SideMenuPage(page);
    await page.goto(envSetup.getEnvURL());
});
//==========================Tests===========================
test.describe('Test view my qualifications page',() =>{
    test('verify that disclaimer has the icons and texts', async ({ }) => {
        await dashboardPage.clickMyQualificationsButton();
        await myQualificationsPage.assertMyQualificationsIconExist();
        await myQualificationsPage.assertMyQualificationTitleText();

        await myQualificationsPage.assertDisclaimerTitleText();
        await myQualificationsPage.assertDisclaimerIconExist();
        await myQualificationsPage.assertDisclaimerDescriptionText();
        await myQualificationsPage.assertAcceptButtonText();
    });
})