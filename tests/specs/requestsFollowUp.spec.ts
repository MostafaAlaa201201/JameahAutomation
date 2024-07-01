import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import RequestsFollowUpPage from '../pages/requestsFollowUp-page';
import SideMenuPage from '../pages/sideMenu-page';

//=========================Variables========================
let data;
let sideMenuPage:SideMenuPage;
let requestsFollowUpPage:RequestsFollowUpPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    sideMenuPage = new SideMenuPage(page);
    requestsFollowUpPage = new RequestsFollowUpPage(page);
    await page.goto(envSetup.getEnvURL());
    await sideMenuPage.clickRequestsFollowUp();
    await requestsFollowUpPage.assertMyRequestsLabelText();
});
//==========================Tests===========================
test.describe('Test requests follow up page',() =>{
    test('verify that import research materials request page has the correct components and texts', async ({ }) => {
        await requestsFollowUpPage.assertRequestsFollowUpIconExist();
        await requestsFollowUpPage.assertRequestsFollowUpTitleText();
        await requestsFollowUpPage.assertRequestNumberLabelText();
        await requestsFollowUpPage.assertRequestStatusLabelText();
        await requestsFollowUpPage.assertServiceNameLabelText();
        await requestsFollowUpPage.assertSearchButtonText();
        await requestsFollowUpPage.assertResetButtonText();
    });

    test('verify that the first request number is correct', async ({ }) => {
        await requestsFollowUpPage.assertFirstRequestNumber(data.firstRequestNumber1);
    });
    
    test('verify that the total number of requests is correct', async ({ }) => {
        await requestsFollowUpPage.assertRequestsNumber(data.requestsNumber1);
    });

    test('verify that the search result is correct when we search using request number', async ({ }) => {
        await requestsFollowUpPage.TypeRequestNumber(data.searchRequestNumber1);
        await requestsFollowUpPage.clickSearchButton();
        await requestsFollowUpPage.assertFirstRequestNumber(data.searchRequestNumber1);
    });

    test('verify that the search result is correct when we search using request status and service name', async ({ }) => {
        await requestsFollowUpPage.selectInProgressRequest();
        await requestsFollowUpPage.selectConsultantRequest();
        await requestsFollowUpPage.clickSearchButton();
        await requestsFollowUpPage.assertFirstRequestNumber(data.inProgressConsultantRequestNumber1);
    });

    test('verify that the no search result text is correct', async ({ }) => {
        await requestsFollowUpPage.TypeRequestNumber('test');
        await requestsFollowUpPage.clickSearchButton();
        await requestsFollowUpPage.assertNoSearchResultText();
    });
    
    test('verify that we can result search results', async ({ }) => {
        await requestsFollowUpPage.TypeRequestNumber('test');
        await requestsFollowUpPage.clickSearchButton();
        await requestsFollowUpPage.clickResetButton();
        await requestsFollowUpPage.assertFirstRequestNumber(data.firstRequestNumber1);
    });
})