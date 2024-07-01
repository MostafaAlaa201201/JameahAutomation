import { expect, type Locator, type FrameLocator, type Page } from '@playwright/test';

export class InboxPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly inbox_icn:Locator;
    readonly inboxTitle_lbl:Locator;
    readonly inbox_iFrame:FrameLocator;
    readonly inboxSubTilte_lbl:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.inbox_icn = page.locator("//i[@class='icon ion-ios-filing-outline']");
        this.inboxTitle_lbl = page.locator(".mb-0.mt-2");
        this.inbox_iFrame = page.frameLocator("#PegaGadgetIfr");
        this.inboxSubTilte_lbl = this.inbox_iFrame.locator("//div[@class='content-item content-label item-1 flex flex-row dataLabelWrite heading_1_dataLabelWrite']");
    }
    //===========================Texts========================
    readonly inboxTiltleText = `صندوق الوارد`;
    readonly inboxSubTitleText = `صندوق الوارد`;
    //===========================Methods========================
    //=========================Assertions========================
    async assertInboxIconExist() {
        await expect.soft(this.inbox_icn).toBeVisible();
    }
    //=======================Text Assertions======================
    async assertInboxTitleText() {
        await expect.soft(this.inboxTitle_lbl).toHaveText(this.inboxTiltleText);
    }

    async assertInboxSubtitleText(){
        const slowExpect = expect.configure({ timeout: 60000 });
        await slowExpect.soft(this.inboxSubTilte_lbl).toHaveText(this.inboxSubTitleText);
    }
}

export default InboxPage;