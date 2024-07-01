import { expect, type Locator, type FrameLocator, type Page } from '@playwright/test';

export class RequestsFollowUpPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly requestsFollowUp_icn:Locator;
    readonly requestsFollowUpTitle_lbl:Locator;
    readonly myRequests_iFrame:FrameLocator;
    readonly myRequests_lbl:Locator;
    readonly requestNumber_lbl:Locator;
    readonly requestStatus_lbl:Locator;
    readonly serviceName_lbl:Locator;
    readonly requestNumber_tb:Locator;
    readonly requestStatus_dd:Locator;
    readonly serviceName_dd:Locator;
    readonly search_btn:Locator;
    readonly reset_btn:Locator;
    readonly firstRequestNumber_lbl:Locator;
    readonly requestNumberLink_lbl:Locator;
    readonly noSearchResult_lbl:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.requestsFollowUp_icn = page.locator("i[class='icon ion-ios-filing-outline']");
        this.requestsFollowUpTitle_lbl = page.locator(".mb-0.mt-2");
        this.myRequests_iFrame = page.frameLocator("#PegaGadgetIfr");
        this.myRequests_lbl = this.myRequests_iFrame.locator("//div[@class='content-item content-label item-1 flex flex-row dataLabelWrite heading_1_dataLabelWrite']");
        this.requestNumber_lbl = this.myRequests_iFrame.locator("(//label[@class='field-caption dataLabelForWrite icon-required '])[1]");
        this.requestStatus_lbl = this.myRequests_iFrame.locator("(//label[@class='field-caption dataLabelForWrite icon-required '])[2]");
        this.serviceName_lbl = this.myRequests_iFrame.locator("(//label[@class='field-caption dataLabelForWrite icon-required '])[3]");
        this.requestNumber_tb = this.myRequests_iFrame.locator("//input[@name='$PpyDisplayHarness$pCaseId']");
        this.requestStatus_dd = this.myRequests_iFrame.locator("//select[@name='$PpyDisplayHarness$pCaseStatus']");
        this.serviceName_dd = this.myRequests_iFrame.locator("//select[@name='$PpyDisplayHarness$pcategory']");
        this.search_btn = this.myRequests_iFrame.locator("//button[@name='MYRequestsContainerPortal_pyDisplayHarness_15']");
        this.reset_btn = this.myRequests_iFrame.locator("//button[@name='MYRequestsContainerPortal_pyDisplayHarness_16']");
        this.firstRequestNumber_lbl = this.myRequests_iFrame.locator("//a[@name='MYRequestsContainerPortal_pgRepPgSubSectionMYRequestsContainerPortalBBBBBB.pxResults(1)_39']");
        this.requestNumberLink_lbl = this.myRequests_iFrame.locator("//a[@data-ctl='Link']");
        this.noSearchResult_lbl = this.myRequests_iFrame.locator("//div[@class='field-item dataLabelRead secondary_information_dataLabelRead']");
    }
    //===========================Texts========================
    readonly requestsFollowUpTiltleText = `متابعة الطلبات`;
    readonly myRequestsLabelText = `طلباتي`;
    readonly requestNumberLabelText = `رقم الطلب`;
    readonly requestStatusLabelText = `حالة الطلب`;
    readonly serviceNameLabelText = `اسم الخدمة`;
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
    
    async selectInProgressRequest() {
        await this.requestStatus_dd.selectOption("تحت الإجراء");
    }
        
    async selectConsultantRequest() {
        await this.serviceName_dd.selectOption("طلب مستشار");
    }
    //=========================Assertions========================
    async assertRequestsFollowUpIconExist() {
        await expect.soft(this.requestsFollowUp_icn).toBeVisible();
    }
                         
    async assertFirstRequestNumber(firstRequestNumber:string){
        await expect.soft(this.firstRequestNumber_lbl).toHaveText(firstRequestNumber);
    }
                 
    async assertRequestsNumber(requestsNumber){
        await expect.soft(this.requestNumberLink_lbl.nth(requestsNumber-1)).toBeVisible();
    }
    //=======================Text Assertions======================
    async assertRequestsFollowUpTitleText() {
        await expect.soft(this.requestsFollowUpTitle_lbl).toHaveText(this.requestsFollowUpTiltleText);
    }

    async assertMyRequestsLabelText(){
        const slowExpect = expect.configure({ timeout: 60000 });
        await slowExpect.soft(this.myRequests_lbl).toHaveText(this.myRequestsLabelText);
    }

    async assertRequestNumberLabelText() {
        await expect.soft(this.requestNumber_lbl).toHaveText(this.requestNumberLabelText);
    }

    async assertRequestStatusLabelText(){
        await expect.soft(this.requestStatus_lbl).toHaveText(this.requestStatusLabelText);
    }

    async assertServiceNameLabelText(){
        await expect.soft(this.serviceName_lbl).toHaveText(this.serviceNameLabelText);
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

export default RequestsFollowUpPage;