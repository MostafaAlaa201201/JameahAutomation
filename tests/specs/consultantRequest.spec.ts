import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import ConsultantRequestPage from '../pages/consultantRequest-page';
import DashboardPage from '../pages/dashboard-page';

//=========================Variables========================
let data;
let dashboardPage:DashboardPage;
let consultantRequestPage:ConsultantRequestPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    consultantRequestPage = new ConsultantRequestPage(page);
    await page.goto(envSetup.getEnvURL());
    await consultantRequestPage.clickConsultantRequest();
});
//==========================Tests===========================
test.describe('Test consultant request page',() =>{
    test('verify that consultant Request page contains the correct icons and texts for user has qualifications', async ({ }) => {
        await consultantRequestPage.assertConsultantRequestIconExist();
        await consultantRequestPage.assertConsultantRequestTitleText();
        await consultantRequestPage.assertUniversityGroupText();
        await consultantRequestPage.assertUniversityGroupIconExist();
        await consultantRequestPage.assertEntityDetailsText();
        await consultantRequestPage.assertEntityNameText();
        await consultantRequestPage.assertEntityTypeText();
        await consultantRequestPage.assertCRNumberText();
        await consultantRequestPage.assertStartDateText();
        await consultantRequestPage.assertEndDateText();
        await consultantRequestPage.assertConsultantDetailsText();
        await consultantRequestPage.assertConsultantNameText();
        await consultantRequestPage.assertConsultantIDText();
        await consultantRequestPage.assertMobileNumberText();
        await consultantRequestPage.assertConsultantBirthDateText();
        await consultantRequestPage.assertEducationEntityText();
        await consultantRequestPage.assertSpecialityText();
        await consultantRequestPage.assertAcademicGradeText();
        await consultantRequestPage.assertRequestDetailsText();
        await consultantRequestPage.assertConsultancyTypeText();
        await consultantRequestPage.assertConsultancyStartDateText();
        await consultantRequestPage.assertConsultancyEndDateText();
        await consultantRequestPage.assertWorkAreaText();
        await consultantRequestPage.assertWorkCityText();
        await consultantRequestPage.assertConsultancyDurationText();
        await consultantRequestPage.assertConsultancyReasonText();
        await consultantRequestPage.assertAttachmentInboxText();
        await consultantRequestPage.assertActionsText();
        await consultantRequestPage.assertActionText();
        await consultantRequestPage.assertRemarksText();
        await consultantRequestPage.assertAttachmentsText();
        await consultantRequestPage.assertNewAttachmentIconExist();
        await consultantRequestPage.assertProgressRemarksText();
        await consultantRequestPage.assertBackButtonText();
    });

    test('verify that we can go back from consultant request page', async ({ }) => {
        await consultantRequestPage.clickBackButton();
        await dashboardPage.assertConsultantRequestButtonText();
    });
})