import { test } from '@playwright/test';
import envSetup from '../utilities/setup/env-setup';
import InboxPage from '../pages/inbox-page';
import SideMenuPage from '../pages/sideMenu-page';

//=========================Variables========================
let data;
let sideMenuPage:SideMenuPage;
let inboxPage:InboxPage;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Open login page ', async ({ page }) => {
    sideMenuPage = new SideMenuPage(page);
    inboxPage = new InboxPage(page);
    await page.goto(envSetup.getEnvURL());
    await sideMenuPage.clickInbox();
});
//==========================Tests===========================
test.describe('Test inbox page',() =>{
    test('verify that inbox page contains the correct icons and texts for user has qualifications', async ({ }) => {
        await inboxPage.assertInboxIconExist();
        await inboxPage.assertInboxTitleText();
        await inboxPage.assertInboxSubtitleText();
    });
})