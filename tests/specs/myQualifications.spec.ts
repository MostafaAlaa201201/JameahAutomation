import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import MyQualificationsPage from '../pages/myQualifications-page';
import DashboardPage from '../pages/dashboard-page';
import CommonPage from '../pages/common-page';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';

//=========================Variables========================
let data;
let dashboardPage:DashboardPage;
let myQualificationsPage:MyQualificationsPage;
let commonPage:CommonPage;
let homePage:HomePage;
let loginPage:LoginPage;
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
    await page.goto(envSetup.getEnvURL());
    await dashboardPage.clickMyQualificationsButton();
});
//==========================Tests===========================
test.describe('Test view my qualifications page',() =>{
    test('verify that disclaimer has the icons and texts', async ({ }) => {
        await myQualificationsPage.assertMyQualificationsIconExist();
        await myQualificationsPage.assertMyQualificationTitleText();

        await myQualificationsPage.assertDisclaimerTitleText();
        await myQualificationsPage.assertDisclaimerIconExist();
        await myQualificationsPage.assertDisclaimerDescriptionText();
        await myQualificationsPage.assertAcceptButtonText();
    });

    test('verify that user who does not have qualifications has the icons and texts', async ({ }) => {
        await commonPage.logout();
        await homePage.chooseSingleSignOn();
        await loginPage.login(data.validUsernameWithoutQualifications1, data.validPasswordWithoutQualifications1);

        await dashboardPage.clickMyQualificationsButton();
        await myQualificationsPage.clickAccept();

        await myQualificationsPage.assertNoQualificationsIconExist();
        await myQualificationsPage.assertNoQualificationText();
        await myQualificationsPage.assertAddQualificationButtonText();
    });

    test('verify that the number of qualifications is correct', async ({ }) => {
        await myQualificationsPage.clickAccept();
        await myQualificationsPage.assertQualificationsNumber();
    });

    test.only('verify that my qualifications page contains the correct icons and texts for user has qualifications', async ({ }) => {
        await myQualificationsPage.clickAccept();
        await myQualificationsPage.clickShowDetails();
        //--------------------------Titles Assertions-----------------------------
        await myQualificationsPage.assertAggregateRateTitleText();
        await myQualificationsPage.assertAggregateRateIconExist();
        await myQualificationsPage.assertGraduactionDateText();
        await myQualificationsPage.assertAggregateRateTypeText();
        await myQualificationsPage.assertDegreeText();
        await myQualificationsPage.assertFacultyText();
        await myQualificationsPage.assertScientificDegreeTypeText();
        await myQualificationsPage.assertScientificDegreeText();
        await myQualificationsPage.assertEducationEntityText();
        await myQualificationsPage.assertArabicEducationCountryText();
        await myQualificationsPage.assertEnglishEducationCountryText();
        await myQualificationsPage.assertGeneralSpecialityText();
        await myQualificationsPage.assertGraduationYearText();
        await myQualificationsPage.assertKSASpecialityText();
        await myQualificationsPage.assertEducationMethodText();
        await myQualificationsPage.assertEducationDurationText();
        await myQualificationsPage.assertAdjustmentStateText();
        await myQualificationsPage.assertAdjustmentDegreeText();
        await myQualificationsPage.assertArabicCertificateNameText();
        await myQualificationsPage.assertCertificateNameText();
        await myQualificationsPage.assertAdjustmentRemarkText();
        await myQualificationsPage.assertPersonalDetailsTitleText();
        await myQualificationsPage.assertArabicNameText();
        await myQualificationsPage.assertEnglishNameText();
        await myQualificationsPage.assertEmailText();
        await myQualificationsPage.assertNationalityText();
        //---------------------Values Assertions---------------------
        await myQualificationsPage.assertGraduactionDateValue(data.graduationDate1);
        await myQualificationsPage.assertScientificDegreeValue(data.scientificDegree1)
        await myQualificationsPage.assertEducationEntityValue(data.educationEntity1);
        await myQualificationsPage.assertArabicEducationCountryValue(data.arabicEducationCountry1);
        await myQualificationsPage.assertEnglishEducationCountryValue(data.englishEducationCountry1);
        await myQualificationsPage.assertGraduationYearValue(data.graduationYear1);
        await myQualificationsPage.assertEducationMethodValue(data.educationMethod1);
        await myQualificationsPage.assertEducationDurationValue(data.educationDuration1);
        await myQualificationsPage.assertAdjustmentStateValue(data.adjustmentState1);
        await myQualificationsPage.assertArabicNameValue(data.myQualificationArabicName1);
        await myQualificationsPage.assertEnglishNameValue(data.myQualificationEnglishName1);
        await myQualificationsPage.assertEmailValue(data.myQualificationEmail1);
    });
})