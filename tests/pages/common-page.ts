import { expect, type Locator, type Page } from '@playwright/test';

export class CommonPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly profile_icn:Locator;
    readonly logout_btn:Locator;
    readonly backToSystem_btn:Locator
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.profile_icn = page.locator(".wd-32.rounded-circle");
        this.logout_btn = page.locator("a[href='/Account/logout']");
        this.backToSystem_btn = page.locator("a[href='https://jameah-n-stg.moe.gov.sa/']");
    }
    //===========================Texts========================
    //===========================Methods========================
    async clickProfileIcon() {
        await this.profile_icn.click();
    }

    async clickLogout() {
        await this.logout_btn.click();
    }

    async clickBackToSystem() {
        await this.backToSystem_btn.click();
    }

    async logout() {
        await this.clickProfileIcon();
        await this.clickLogout();
        await this.clickBackToSystem();
    }
    //===========================assertions========================
}

export default CommonPage;