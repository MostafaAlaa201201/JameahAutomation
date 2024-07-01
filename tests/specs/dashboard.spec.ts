import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import DashboardPage from '../pages/dashboard-page';

//=========================Variables========================
let dashboardPage:DashboardPage;
//=========================Hooks============================
test.beforeEach('Open login page ', async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    await page.goto(envSetup.getEnvURL());
});
//==========================Tests===========================
test.describe('Verify dashboard page contents',() =>{
    test('verify that dashboard page has the correct icons and texts', async ({ }) => {
        await dashboardPage.assertControlBoardIconExist();
        await dashboardPage.assertControlBoardLabelText();

        await dashboardPage.assertMyQualificationsIconExist();
        await dashboardPage.assertMyQualificationsLabelText();
        await dashboardPage.assertMyQualificationsDescriptionText();
        await dashboardPage.assertMyQualificationsButtonText();

        await dashboardPage.assertConsultantRequestIconExist();
        await dashboardPage.assertConsultantRequestLabelText();
        await dashboardPage.assertConsultantRequestDescriptionText();
        await dashboardPage.assertConsultantRequestButtonText();

        await dashboardPage.assertEducationSubjectsImportIconExist();
        await dashboardPage.assertConsultantRequestLabelText();
        await dashboardPage.assertConsultantRequestDescriptionText();
        await dashboardPage.assertConsultantRequestButtonText();
    });
})