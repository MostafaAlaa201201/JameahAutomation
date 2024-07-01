import { expect, type Locator, type FrameLocator, type Page } from '@playwright/test';

export class CancelConsultantRequestPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly myRequests_lbl:Locator;
    readonly cancelConsultantRequest_icn:Locator;
    readonly cancelConsultantRequestTitle_lbl:Locator;
    readonly cancelConsultantRequest_iFrame:FrameLocator;
    readonly requestNumber_lbl:Locator;
    readonly requestNumber_tb:Locator;
    readonly search_btn:Locator;
    readonly reset_btn:Locator;
    readonly firstRequestNumber_lbl:Locator;
    readonly requestNumberLink_lbl:Locator;
    readonly noSearchResult_lbl:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.cancelConsultantRequest_icn = page.locator("(//*[name()='svg'])[6]");
        this.cancelConsultantRequestTitle_lbl = page.locator(".mb-0.mt-2");
        this.cancelConsultantRequest_iFrame = page.frameLocator("#PegaGadgetIfr");
        this.myRequests_lbl = this.cancelConsultantRequest_iFrame.locator("//div[@class='content-item content-label item-1 flex flex-row dataLabelWrite heading_1_dataLabelWrite']");
        this.requestNumber_lbl = this.cancelConsultantRequest_iFrame.locator("//label[@class='field-caption dataLabelForWrite icon-required ']");
        this.requestNumber_tb = this.cancelConsultantRequest_iFrame.locator("//input[@name='$PpyDisplayHarness$pCaseId']");
        this.search_btn = this.cancelConsultantRequest_iFrame.locator("//button[@name='ApprovedRequestsPortal_pyDisplayHarness_12']");
        this.reset_btn = this.cancelConsultantRequest_iFrame.locator("//button[@name='ApprovedRequestsPortal_pyDisplayHarness_13']");
        this.noSearchResult_lbl = this.cancelConsultantRequest_iFrame.locator("//div[@class='field-item dataLabelRead secondary_information_dataLabelRead']");
    }
    //===========================Texts========================
    readonly cancelConsultantRequestText = `طلب الغاء مستشار`;
    readonly requestNumberLabelText = `رقم الطلب`;
    readonly searchButtonText = `بحث`;
    readonly resetButtonText = `إعادة تعيين`;
    readonly noSearchResultText = `لا عناصر`;
    //===========================Methods========================
    async clickSearchButton() {
        await this.search_btn.click();
    }

    async clickResetButton() {
        await this.reset_btn.click();
    }
    
    async TypeRequestNumber(requestNumber:string) {
        await this.requestNumber_tb.fill(requestNumber);
    }
    //=========================Assertions========================
    async assertCancelConsultantRequestIconExist() {
        await expect.soft(this.cancelConsultantRequest_icn).toBeVisible();
    }
    //=======================Text Assertions======================
    async assertCancelConsultantRequestTitleText() {
        await expect.soft(this.cancelConsultantRequestTitle_lbl).toHaveText(this.cancelConsultantRequestText);
    }

    async assertRequestNumberLabelText() {
        const slowExpect = expect.configure({ timeout: 90000 });
        await slowExpect.soft(this.myRequests_lbl).toBeVisible();
        await this.page.reload();
        await slowExpect.soft(this.requestNumber_lbl).toHaveText(this.requestNumberLabelText);
    }
    
    async assertSearchButtonText(){
        await expect.soft(this.search_btn).toHaveText(this.searchButtonText);
    }
                
    async assertResetButtonText(){
        await expect.soft(this.reset_btn).toHaveText(this.resetButtonText);
    }
                
    async assertNoSearchResultText(){
        await expect.soft(this.noSearchResult_lbl).toHaveText(this.noSearchResultText);
    }
}

export default CancelConsultantRequestPage;