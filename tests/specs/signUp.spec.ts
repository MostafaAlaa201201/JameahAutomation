import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import SignUpPage from '../pages/signUp-page';
import HomePage from '../pages/home-page';
//==========exclude test from global setup cookies==========
test.use({storageState:{cookies:[],origins:[]}});
//=========================Variables========================
let data;
let signUpPage:SignUpPage;
let homePage:HomePage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});
test.beforeEach('Open login page ', async ({ page }) => {
    signUpPage = new SignUpPage(page);
    homePage = new HomePage(page);
    await page.goto(envSetup.getEnvURL());
    await homePage.chooseSignUp();
});
//====================================Tests==================================
test.describe('Sign up page test',() =>{
    test('verify that we can sign up with valid data', async ({ }) => {
        await signUpPage.signUpStep1(data.validID1, data.validBD1);
        await signUpPage.signUpStep2(data.firstName1,
            data.fatherName1,
            data.grandFatherName1,
            data.familyName1,
            "00966500000000",
            "test@gmail.com"
        );
        // await signUpPage.signUpStep3(); //disabled in  staging
        await signUpPage.assertSaveButtonText();
    });

    test('verify that we can not sign up with empty id and birthdate', async ({ }) => {
        await signUpPage.clickNext();
        await signUpPage.assertEmptyIdAndBDErrorNotificationText();
    });

    test('verify that we can not register with registered id', async ({ }) => {
        await signUpPage.signUpStep1(data.registeredID1, data.validBD1);
        await signUpPage.assertAlreadyRegisteredErrorNotificationText();
    });

    test('verify that we can not sign up without data in second step', async ({ }) => {
        await signUpPage.signUpStep1(data.validID1, data.validBD1);
        await signUpPage.clickNext2();
        await signUpPage.assertEmptyDataErrorText();
    });

    //Disabled in staging
    test.skip('verify that we can not sign up with empty notification method in third step', async ({ }) => {
        await signUpPage.signUpStep1(data.validID1, data.validBD1);
        await signUpPage.signUpStep2(data.familyName1,
            data.fatherName1,
            data.grandFatherName1,
            data.familyName1,
            "00966500000000",
            "test@gmail.com"
        );
        await signUpPage.clickNext3();
        await signUpPage.assertEmptyNotificationErrorText();
    });
})