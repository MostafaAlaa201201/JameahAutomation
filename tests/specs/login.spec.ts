import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import LoginPage from '../pages/login-page';
import HomePage from '../pages/home-page';

//==========exclude test from global setup cookies==========
test.use({storageState:{cookies:[],origins:[]}});
//=========================Variables========================
let data;
let loginPage:LoginPage;
let homePage:HomePage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});
test.beforeEach('Open login page ', async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await page.goto(envSetup.getEnvURL());
    await homePage.chooseSingleSignOn();
});
//====================================Tests==================================
test.describe('Login page test',() =>{
    test('verify that we can not login with empty username and password', async ({ }) => {
        await loginPage.clickSignIn();
        await loginPage.assertEmptyErrorNotificationText();
    });

    test('verify that we can not login with wrong username or password', async ({ }) => {
        await loginPage.login("test", "test");
        await loginPage.assertWrongErrorNotificationText();
    });
})