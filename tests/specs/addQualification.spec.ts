import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import AddQualificationPage from '../pages/addQualification-page';
import MyQualificationsPage from '../pages/myQualifications-page';
import DashboardPage from '../pages/dashboard-page';
//=========================Variables========================
let data;
let dashboardPage:DashboardPage;
let addQualificationPage:AddQualificationPage;
let myQualificationsPage:MyQualificationsPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    addQualificationPage = new AddQualificationPage(page);
    myQualificationsPage = new MyQualificationsPage(page);
    await page.goto(envSetup.getEnvURL());
    await dashboardPage.clickMyQualificationsButton();
    await myQualificationsPage.clickAccept();
    await addQualificationPage.clickAddQualification();
});
//==========================Tests===========================
test.describe('Test view add qualification page and steps',() =>{
    test('verify that user details and add qualification page have the correct contents', async ({ }) => {
        await addQualificationPage.assertAddQualificationIconExist();
        await addQualificationPage.assertAddQualificationsLabelText();
        await addQualificationPage.assertQualificationLabelText();
        await addQualificationPage.assertNewText();
        await addQualificationPage.assertRequestDetailsText();

        await addQualificationPage.assertUserDetailsText();
        await addQualificationPage.assertIdLabelText();
        await addQualificationPage.assertIdValue(data.validUsername1);
        await addQualificationPage.assertArabicNameLabelText();
        await addQualificationPage.assertArabicNameValue(data.arabicName1);
        await addQualificationPage.assertEmailLabelText();
        await addQualificationPage.assertEnglishNameValue(data.englishName1);
        await addQualificationPage.assertNationalityLabelText();
        await addQualificationPage.assertNationalityValue();
        await addQualificationPage.assertMobileNumberLabelText();
        await addQualificationPage.assertMobileNumberValue(data.mobileNumber1);
        await addQualificationPage.assertEmailLabelText();
        await addQualificationPage.assertEmailValue(data.email1);
        
        await addQualificationPage.assertQualificationDetailsLabelText();

        await addQualificationPage.assertSendButtonText();
        await addQualificationPage.assertCancelButtonText();
        await addQualificationPage.assertSendButtonIsDisabled();
    });

    test('verify that education sector inline error is correct when general education is selected', async ({ }) => {
        await addQualificationPage.selectGeneralEducation();
        await addQualificationPage.assertGeneralEducationErrorLabelText();
    });

    test('verify that education sector inline error is correct in case of empty selection', async ({ }) => {
        await addQualificationPage.selectEmptyEducation();
        await addQualificationPage.assertEmptyInlineErrorLabelText();
    });

    test('verify that cancel button popup has the correct texts', async ({ }) => {
        await addQualificationPage.selectUniversityEducation();
        await addQualificationPage.clickCancel();
        await addQualificationPage.assertCancelPopupTitleText();
        await addQualificationPage.assertCancelPopupDescriptionText();
        await addQualificationPage.assertCancelPopupCancelButtonText();
        await addQualificationPage.assertCancelPopupConfirmButtonText();
    });
    
    test.only('verify that we remain in the add qualification page when we click close button in cancel popup', async ({ }) => {
        await addQualificationPage.selectUniversityEducation();
        await addQualificationPage.clickCancel();
        await addQualificationPage.clickCancelPopupCloseButton();
        await addQualificationPage.assertCancelButtonText();
    });

    test('verify that we remain in the add qualification page when we click cancel button in cancel popup', async ({ }) => {
        await addQualificationPage.selectUniversityEducation();
        await addQualificationPage.clickCancel();
        await addQualificationPage.clickCancelPopupCancelButton();
        await addQualificationPage.assertCancelButtonText();
    });

    test('verify that we are returned to my qualification page when we click confirm button in cancel popup', async ({ }) => {
        await addQualificationPage.selectUniversityEducation();
        await addQualificationPage.clickCancel();
        await addQualificationPage.clickCancelPopupConfirmButton();
        await myQualificationsPage.assertAddQualificationButtonText();
    });
    
    test('verify that there is error when we select qualification source outside KSA', async ({ }) => {
        await addQualificationPage.selectUniversityEducation();
        await addQualificationPage.selectOutsideKSA();
        await addQualificationPage.assertQualificationOutsideKSAErrorText();
    });

    //Gives an error when we automate the attachment
    test.skip('verify that we can add qualification successfully', async ({ }) => {
        await addQualificationPage.finishAddQualificationSteps();
        await addQualificationPage.assertSuccessIcon();
        await addQualificationPage.assertSuccessMessageText();
    });

    test('verify that we can not add qualification without attachment', async ({ }) => {
        await addQualificationPage.finishAddQualificationStepsWithoutAttachment();
        await addQualificationPage.assertEmptyAttachmentErrorText();
    });
})