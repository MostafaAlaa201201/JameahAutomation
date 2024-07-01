import { expect, type Locator, type FrameLocator, type Page } from '@playwright/test';

export class AddServicePage{
    //===========================Locators=====================
    readonly page:Page;
    readonly myRequests_lbl:Locator;
    readonly addService_icn:Locator;
    readonly addServiceTitle_lbl:Locator;
    readonly addServiceDescription_lbl:Locator;
    readonly cancel_btn:Locator;
    readonly startService_btn:Locator;
    readonly addService_iFrame:FrameLocator;
    readonly addServiceSubTilte_lbl:Locator;
    readonly new_icn:Locator;
    readonly canNotApply_lbl:Locator;
    readonly back_btn:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.addService_icn = page.locator("(//*[name()='svg'])[6]");
        this.addServiceTitle_lbl = page.locator(".mb-0.mt-2");
        this.addServiceDescription_lbl = page.locator("p[class='d-flex align-items-center justify-content-center']");
        this.cancel_btn = page.locator(".tetco-btn-outline.text-center.tetco-btn");
        this.startService_btn = page.locator("a[class='tetco-btn text-center']");
        this.addService_iFrame = page.frameLocator("#PegaGadgetIfr");
        this.myRequests_lbl = this.addService_iFrame.locator("//div[@class='content-item content-label item-1 flex flex-row dataLabelWrite heading_1_dataLabelWrite']");
        this.addServiceSubTilte_lbl = this.addService_iFrame.locator("//span[@class='workarea_header_titles']");
        this.new_icn = this.addService_iFrame.locator("div[class='content-item content-field item-1 remove-top-spacing remove-left-spacing flex flex-row badge-bg-info centered dataValueRead'] span[class='badge_text']");
        this.canNotApply_lbl = this.addService_iFrame.locator("//div[contains(@class,'clear-floated-layouts')]//div[2]//div[1]//div[1]//div[1]");
        this.back_btn = this.addService_iFrame.locator("//button[contains(@name,'ExistingOpenRequest_pyWorkPage_15')]");
    }
    //===========================Texts========================
    readonly addServiceTitleText = `طلب إضافة خدمة`;
    readonly addServiceDescriptionText = `هذه الخدمة مخصصة للقطاعات الحكومية والخاصة لتمكنهم من تقديم طلب الاستفادة من الخدمات المقدمة (خدمة مستشار، وخدمة المنح لغير السعوديين) بحيث يتم اعتماد أو رفض الطلب من خلال وكالة التعليم الجامعي بوزارة التعليم.`;
    readonly cancelButtonText = `إلغاء`;
    readonly startServiceButtonText = `ابدء الخدمة`;
    readonly addServiceSubtitleText = `طلب إضافة خدمة`;
    readonly newText = `جديد`;
    readonly canNotApplyText = `لا يمكنك التقديم يوجد لديك طلب تحت الإجراء`;
    readonly backButtonText = `عودة`;
    //===========================Methods========================
    async clickCancelButton() {
        await this.cancel_btn.click();
    }

    async clickStartServiceButton() {
        await this.startService_btn.click();
    }
    
    async clickBackButton() {
        await this.back_btn.click();
        await this.page.waitForTimeout(1000);
        await this.back_btn.click();
    }
    //=========================Assertions========================
    async assertAddServiceIconExist() {
        await expect.soft(this.addService_icn).toBeVisible();
    }
    //=======================Text Assertions======================
    async assertAddServiceTitleText() {
        await expect.soft(this.addServiceTitle_lbl).toHaveText(this.addServiceTitleText);
    }

    async assertAddServiceDescriptionText(){
        await expect.soft(this.addServiceDescription_lbl).toHaveText(this.addServiceDescriptionText);
    }
    
    async assertCancelButtonText(){
        await expect.soft(this.cancel_btn).toHaveText(this.cancelButtonText);
    }
        
    async assertStartServiceButtonText(){
        await expect.soft(this.startService_btn).toHaveText(this.startServiceButtonText);
    }

    async assertAddServiceSubTitleText(){
        const slowExpect = expect.configure({ timeout: 90000 });
        await slowExpect.soft(this.myRequests_lbl).toBeVisible();
        await this.page.reload();
        await slowExpect.soft(this.addServiceSubTilte_lbl).toHaveText(this.addServiceSubtitleText);
    }
            
    async assertNewIconText(){
        await expect.soft(this.new_icn).toHaveText(this.newText);
    }
                
    async assertCanNotApplyText(){
        await expect.soft(this.canNotApply_lbl).toHaveText(this.canNotApplyText);
    }
                    
    async assertBackButtonText(){
        await expect.soft(this.back_btn).toHaveText(this.backButtonText);
    }
}

export default AddServicePage;