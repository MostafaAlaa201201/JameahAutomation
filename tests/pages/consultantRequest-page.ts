import { expect, type Locator, type FrameLocator, type Page } from '@playwright/test';

export class ConsultantRequestPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly myRequests_lbl:Locator;
    readonly consultantRequest_btn:Locator;
    readonly consultantRequest_icn:Locator;
    readonly consultantRequestTitle_lbl:Locator;
    readonly consultantRequestDetails_iFrame:FrameLocator;
    readonly consultantRequestSubTilte_lbl:Locator;
    readonly universityGroup_lbl:Locator;
    readonly universityGroup_icn:Locator;
    readonly entityDetails_lbl:Locator;
    readonly titles_lbl:Locator;
    readonly consultantDetails_lbl:Locator;
    readonly requestDetails_lbl:Locator;
    readonly consultancyDuration_lbl:Locator;
    readonly consultancyReason_lbl:Locator;
    readonly attachmentsInbox_lbl:Locator;
    readonly actions_lbl:Locator;
    readonly actionsTitles_lbl:Locator;
    readonly attachments_lbl:Locator;
    readonly newAttachment_icn:Locator;
    readonly progressRemarks_lbl:Locator;
    readonly back_btn:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.consultantRequest_btn = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)");
        this.consultantRequest_icn = page.locator("(//*[name()='svg'])[6]");
        this.consultantRequestTitle_lbl = page.locator(".mb-0.mt-2");
        this.consultantRequestDetails_iFrame = page.frameLocator("#PegaGadgetIfr");
        this.myRequests_lbl = this.consultantRequestDetails_iFrame.locator("//div[@class='content-item content-label item-1 flex flex-row dataLabelWrite heading_1_dataLabelWrite']");
        this.consultantRequestSubTilte_lbl = this.consultantRequestDetails_iFrame.locator(".workarea_header_titles");
        this.universityGroup_lbl = this.consultantRequestDetails_iFrame.locator("//div[@class='content-item content-field item-1 flex flex-row dataValueRead']//span[@class='assignment_title']");
        this.universityGroup_icn = this.consultantRequestDetails_iFrame.locator("//i[@title='default@MoE']");
        this.entityDetails_lbl = this.consultantRequestDetails_iFrame.locator("(//h2[@class='header-title'])[1]");
        this.titles_lbl = this.consultantRequestDetails_iFrame.locator("//span[@class='field-caption dataLabelForRead']");
        this.consultantDetails_lbl = this.consultantRequestDetails_iFrame.locator("(//h2[@class='header-title'])[2]");
        this.requestDetails_lbl = this.consultantRequestDetails_iFrame.locator("(//h2[@class='header-title'])[3]"); 
        this.consultancyDuration_lbl = this.consultantRequestDetails_iFrame.locator("//div[@class='content-item content-label item-1 remove-top-spacing remove-left-spacing     dataLabelForRead flex flex-row ']");
        this.consultancyReason_lbl = this.consultantRequestDetails_iFrame.locator("//body/div[@id='PEGA_HARNESS']/form[contains(@name,'main')]/div[@id='HARNESS_CONTENT']/div[contains(@class,'workarea-view-scroll-wrapper')]/section[contains(@aria-label,'اللوحة الوسطى')]/div[@id='RULE_KEY']/span[contains(@class,'inspector-span')]/div[@id='RULE_KEY']/div[contains(@class,'margin-b-1x')]/div[contains(@class,'content-item content-sub_section item-1 remove-left-spacing remove-right-spacing flex flex-row no-margin-bottom')]/div[@id='RULE_KEY']/div[contains(@class,'clear-floated-layouts')]/div[contains(@class,'')]/div[contains(@class,'content-stacked')]/div[contains(@class,'content-item content-sub_section item-1 remove-left-spacing remove-right-spacing flex flex-row')]/div[@id='pyFlowActionHTML']/div[@id='RULE_KEY']/div[contains(@class,'layout layout-none')]/div[contains(@class,'')]/div[contains(@class,'content-default')]/div[contains(@class,'content-item content-sub_section item-1 flex flex-row')]/div[@id='RULE_KEY']/div[contains(@class,'layout layout-none')]/div[contains(@class,'')]/div[contains(@class,'content-default')]/div[contains(@class,'content-item content-sub_section item-3 flex flex-row')]/div[@id='RULE_KEY']/div[@id='EXPAND-OUTERFRAME']/div[contains(@class,'')]/div[contains(@class,'content-default')]/div[contains(@class,'content-item content-layout item-1 flex flex-row')]/div[contains(@class,'layout layout-none')]/div[contains(@class,'')]/div[contains(@class,'content-stacked')]/div[@class='content-item content-field item-7 flex padding-r-2x']/span[1]");
        this.attachmentsInbox_lbl = this.consultantRequestDetails_iFrame.locator("(//h2[@class='header-title'])[5]");
        this.actions_lbl = this.consultantRequestDetails_iFrame.locator("(//h2[@class='header-title'])[6]");
        this.actionsTitles_lbl = this.consultantRequestDetails_iFrame.locator("//label[@class='field-caption dataLabelForWrite icon-required ']");
        this.attachments_lbl = this.consultantRequestDetails_iFrame.locator("(//h2[@class='header-title'])[7]");
        this.newAttachment_icn = this.consultantRequestDetails_iFrame.locator("//a[@name='NewCaseAttachment_pyWorkPage_6']");
        this.progressRemarks_lbl = this.consultantRequestDetails_iFrame.locator("div[class='dl-accordion-btn']");
        this.back_btn = this.consultantRequestDetails_iFrame.locator("//button[@name='pyCaseActionAreaButtons_pyWorkPage_17']");
    }
    //===========================Texts========================
    readonly consultantRequestTiltleText = `طلب مستشار`;
    readonly consultantRequestSubTitleText = `طلب مستشار`;
    readonly universityGroupText = `مجموعة الجامعة`;
    readonly entityDetailsText = `بيانات الجهة`;
    readonly entityNameText = `اسم الجهة`;
    readonly entityTypeText = `نوع الجهة`;
    readonly crNumberText = `رقم السجل التجاري/الترخص`;
    readonly startDateText = `تاريخ البداية`;
    readonly endDateText = `تاريخ النهاية`;
    readonly consultantDetailsText = `بيانات المستشار`;
    readonly consultantNameText = `اسم المستشار`;
    readonly consultantIDText = `رقم هوية المستشار`;
    readonly mobileNumberText = `رقم الجوال`;
    readonly consultantBirthDateText = `تاريخ ميلاد المستشار`;
    readonly educationEntityText = `الجهة التعليمية`;
    readonly specialityText = `التخصص`;
    readonly academicGradeText = `الرتبة الأكاديمية`;
    readonly requestDetailsText = `تفاصيل الطلب`;
    readonly consultancyTypeText = `نوع الاستشارة`;
    readonly consultancyStartDateText = `تاريخ بداية الاستشارة`;
    readonly consultancyEndDateText = `تاريخ نهاية الاستشارة`;
    readonly workAreaText = `منطقة العمل`;
    readonly workCityText = `مدينة العمل`;
    readonly consultancyDurationText = `مدة الاستشارة`;
    readonly consultancyReasonText = `اسباب الاستشارة`;
    readonly attachmentInboxText = `صندوق المرفقات`;
    readonly actionsText = `إجراءات`;
    readonly actionText = `الإجراء`;
    readonly remarksText= `الملاحظات`;
    readonly attachmentsText = `المرفقات`;
    readonly progressRemarksText = `ملاحظات سير العمل`;
    readonly backButtonText = `عودة`;
    //===========================Methods========================
    async clickConsultantRequest() {
        await this.consultantRequest_btn.click();
        const slowExpect = expect.configure({ timeout: 90000 });
        await slowExpect.soft(this.myRequests_lbl).toBeVisible();
        await this.page.reload();
        await slowExpect.soft(this.consultantRequestSubTilte_lbl).toHaveText(this.consultantRequestSubTitleText);
    }

    async clickBackButton() {
        await this.back_btn.click();
    }
    //=========================Assertions========================
    async assertConsultantRequestIconExist() {
        await expect.soft(this.consultantRequest_icn).toBeVisible();
    }

    async assertUniversityGroupIconExist() {
        await expect.soft(this.universityGroup_icn).toBeVisible();
    }
    //=======================Text Assertions======================
    async assertConsultantRequestTitleText() {
        await expect.soft(this.consultantRequestTitle_lbl).toHaveText(this.consultantRequestTiltleText);
    }

    async assertUniversityGroupText(){
        await expect.soft(this.universityGroup_lbl).toHaveText(this.universityGroupText);
    }

    async assertEntityDetailsText() {
        await expect.soft(this.entityDetails_lbl).toHaveText(this.entityDetailsText);
    }

    async assertEntityNameText() {
        await expect.soft(this.titles_lbl.nth(0)).toHaveText(this.entityNameText);
    }

    async assertEntityTypeText(){
        await expect.soft(this.titles_lbl.nth(1)).toHaveText(this.entityTypeText);
    }

    async assertCRNumberText(){
        await expect.soft(this.titles_lbl.nth(2)).toHaveText(this.crNumberText);
    }
    
    async assertStartDateText(){
        await expect.soft(this.titles_lbl.nth(3)).toHaveText(this.startDateText);
    }
        
    async assertEndDateText(){
        await expect.soft(this.titles_lbl.nth(4)).toHaveText(this.endDateText);
    }
            
    async assertConsultantDetailsText(){
        await expect.soft(this.consultantDetails_lbl).toHaveText(this.consultantDetailsText);
    }
            
    async assertConsultantNameText(){
        await expect.soft(this.titles_lbl.nth(5)).toHaveText(this.consultantNameText);
    }
                
    async assertConsultantIDText(){
        await expect.soft(this.titles_lbl.nth(6)).toHaveText(this.consultantIDText);
    }
                    
    async assertMobileNumberText(){
        await expect.soft(this.titles_lbl.nth(7)).toHaveText(this.mobileNumberText);
    }
                        
    async assertConsultantBirthDateText(){
        await expect.soft(this.titles_lbl.nth(8)).toHaveText(this.consultantBirthDateText);
    }
                            
    async assertEducationEntityText(){
        await expect.soft(this.titles_lbl.nth(9)).toHaveText(this.educationEntityText);
    }
                                
    async assertSpecialityText(){
        await expect.soft(this.titles_lbl.nth(10)).toHaveText(this.specialityText);
    }
                                    
    async assertAcademicGradeText(){
        await expect.soft(this.titles_lbl.nth(11)).toHaveText(this.academicGradeText);
    }
                                        
    async assertRequestDetailsText(){
        await expect.soft(this.requestDetails_lbl).toHaveText(this.requestDetailsText);
    }
                                    
    async assertConsultancyTypeText(){
        await expect.soft(this.titles_lbl.nth(12)).toHaveText(this.consultancyTypeText);
    }
                                        
    async assertConsultancyStartDateText(){
        await expect.soft(this.titles_lbl.nth(13)).toHaveText(this.consultancyStartDateText);
    }
                                            
    async assertConsultancyEndDateText(){
        await expect.soft(this.titles_lbl.nth(14)).toHaveText(this.consultancyEndDateText);
    }
                                                
    async assertWorkAreaText(){
        await expect.soft(this.titles_lbl.nth(15)).toHaveText(this.workAreaText);
    }
                                                    
    async assertWorkCityText(){
        await expect.soft(this.titles_lbl.nth(16)).toHaveText(this.workCityText);
    }
                                                        
    async assertConsultancyDurationText(){
        await expect.soft(this.consultancyDuration_lbl).toHaveText(this.consultancyDurationText);
    }
                                                            
    async assertConsultancyReasonText(){
        await expect.soft(this.consultancyReason_lbl).toHaveText(this.consultancyReasonText);
    }
                                                            
    async assertAttachmentInboxText(){
        await expect.soft(this.attachmentsInbox_lbl).toHaveText(this.attachmentInboxText);
    }
                                                                
    async assertActionsText(){
        await expect.soft(this.actions_lbl).toHaveText(this.actionsText);
    }
                                                                
    async assertActionText(){
        await expect.soft(this.actionsTitles_lbl.nth(0)).toHaveText(this.actionText);
    }
                                                                    
    async assertRemarksText(){
        await expect.soft(this.actionsTitles_lbl.nth(3)).toHaveText(this.remarksText);
    }
                                                                    
    async assertAttachmentsText(){
        await expect.soft(this.attachments_lbl).toHaveText(this.attachmentsText);
    }
                                                                        
    async assertNewAttachmentIconExist(){
        await expect.soft(this.newAttachment_icn).toBeVisible();
    }
                                                                        
    async assertProgressRemarksText(){
        await expect.soft(this.progressRemarks_lbl).toHaveText(this.progressRemarksText);
    }
                                                                            
    async assertBackButtonText(){
        await expect.soft(this.back_btn).toHaveText(this.backButtonText);
    }
}

export default ConsultantRequestPage;