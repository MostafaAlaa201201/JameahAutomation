import { type Locator, type Page } from '@playwright/test';

export class HomePage{
    //===========================Locators=====================
    readonly page:Page;
    readonly enter_btn:Locator;
    readonly signUp_btn:Locator;
    readonly singleSignOn_btn:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.enter_btn = page.locator("//a[@class='tetco-btn tetco-btn-outline m-md-0 my-1']");
        this.signUp_btn = page.locator("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)");
        this.singleSignOn_btn = page.locator('#mimlink');
    }
    //===========================Methods========================
    async clickEnter(){
        await this.enter_btn.click();
    }

    async clickSignUp(){
        await this.signUp_btn.click();
    }

    async clickSingleSignOn(){
        await this.singleSignOn_btn.click();
    }

    async chooseSingleSignOn(){
        await this.clickEnter();
        await this.clickSingleSignOn();
    }

    async chooseSignUp(){
        await this.clickEnter();
        await this.clickSignUp();
    }
}

export default HomePage;