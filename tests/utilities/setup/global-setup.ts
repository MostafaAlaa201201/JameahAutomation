import { chromium, FullConfig } from "@playwright/test";
import LoginPage from "../../pages/login-page";
import HomePage from "../../pages/home-page";
import envSetup from "../setup/env-setup";

async function globalSetup(config: FullConfig) {
    //====================Initialize env URL========================
    const { baseURL, storageState } = config.projects[0].use;
    //==================Initialize default login=====================
    let data = envSetup.getTestData();
    const browser = await chromium.launch({headless: false, timeout: 60000});
    const page = await browser.newPage();
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await page.goto(envSetup.getEnvURL());
    await homePage.chooseSingleSignOn();
    await loginPage.login(data.validUsername1, data.validPassword1);
    await page.context().storageState({ path: storageState as string});
    await browser.close();
}

export default globalSetup;
