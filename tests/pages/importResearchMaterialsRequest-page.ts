import { expect, type Locator, type Page } from '@playwright/test';

export class ImportResearchMaterialsPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly importResearchMaterialsRequest_btn:Locator;
    readonly importResearchMaterialsRequest_icn:Locator;
    readonly importResearchMaterialsRequestTitle_lbl:Locator;
    readonly userDetails_lbl:Locator;
    readonly userName_lbl:Locator;
    readonly idNumber_lbl:Locator;
    readonly email_lbl:Locator;
    readonly mobileNumber_lbl:Locator;
    readonly officialEmail_lbl:Locator;
    readonly userNameValue_lbl:Locator;
    readonly idNumberValue_lbl:Locator;
    readonly emailValue_lbl:Locator;
    readonly mobileNumberValue_lbl:Locator;
    readonly officialEmail_tb:Locator;
    readonly officialEmailInlineError_lbl:Locator
    readonly verify_btn:Locator;
    readonly cancel_btn:Locator;
    readonly send_btn:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.importResearchMaterialsRequest_btn = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)");
        this.importResearchMaterialsRequest_icn = page.locator("//i[@class='icon ion-ios-gear-outline']");
        this.importResearchMaterialsRequestTitle_lbl = page.locator(".mb-0.mt-2");
        this.userDetails_lbl = page.locator(".mb-15.text-dark");
        this.userName_lbl = page.locator("label[for='FullNameArabic']");
        this.idNumber_lbl = page.locator("label[for='NationalId']");
        this.email_lbl = page.locator("label[for='Email']");
        this.mobileNumber_lbl = page.locator("label[for='Mobile']");
        this.officialEmail_lbl = page.locator("label[for='OfficialEmail']");
        this.userNameValue_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)");
        this.idNumberValue_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)");
        this.emailValue_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)");
        this.mobileNumberValue_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)");
        this.officialEmail_tb = page.locator("#OfficialEmail");
        this.officialEmailInlineError_lbl = page.locator(".text-right.p-0.pt-1.text-danger.field-validation-error");
        this.verify_btn = page.locator("#btnSend");
        this.cancel_btn = page.locator("#cancelbtn");
        this.send_btn = page.locator("button[class='tetco-btn m-0']");
    }
    //===========================Texts========================
    readonly importResearchMaterialsRequestTiltleText = `خدمة استيراد المواد البحثية`;
    readonly userDetailsLabelText = `بيانات مقدم الطلب`;
    readonly userNameLabelText = `اسم مقدم الطلب`;
    readonly idNumberLabelText = `رقم الهوية`;
    readonly emailLabelText = `البريد الإلكتروني`;
    readonly mobileNumberLabelText = `الجوال`;
    readonly officialEmailLableText = `البريد الإلكتروني (الرسمي)`;
    readonly emptyOfficialEmailInlineErrorText = `حقل البريد الإلكتروني (الرسمي) إلزامي`;
    readonly wrongOfficialEmailInlineErrorText = `صيغة البريد الإلكتروني غير صحيحة`;
    readonly unofficailEmailInlineErrorText = `يجب أن يكون البريد الإلكتروني بريد رسمي ينتهي ب (moe.gov.sa.* أو edu.gov.sa.* أو edu.sa.*)`;
    readonly verifyButtonText = `تحقق`;
    readonly cancelButtonText = `إلغاء`;
    readonly sendButtonText = `إرسال`;
    //===========================Methods========================
    async clickImportResearchMaterialsRequest() {
        await this.importResearchMaterialsRequest_btn.click();
        const slowExpect = expect.configure({ timeout: 60000 });
        await slowExpect.soft(this.userDetails_lbl).toHaveText(this.userDetailsLabelText);
    }

    async clickVerifyButton() {
        await this.verify_btn.click();
    }
    
    async typeOfficialEmail(email:string) {
        await this.officialEmail_tb.fill(email);
    }
    
    async clickCancelButton() {
        await this.cancel_btn.click();
    }
        
    async clickSendButton() {
        await this.send_btn.click();
    }
    //=========================Assertions========================
    async assertImportResearchMaterialsRequestIconExist() {
        await expect.soft(this.importResearchMaterialsRequest_icn).toBeVisible();
    }
    //=======================Text Assertions======================
    async assertImportResearchMaterialsRequestTitleText() {
        await expect.soft(this.importResearchMaterialsRequestTitle_lbl).toHaveText(this.importResearchMaterialsRequestTiltleText);
    }

    async assertUserDetailsText(){
        await expect.soft(this.userDetails_lbl).toHaveText(this.userDetailsLabelText);
    }

    async assertUserNameLabelText() {
        await expect.soft(this.userName_lbl).toHaveText(this.userNameLabelText);
    }

    async assertIDNumberLabelText() {
        await expect.soft(this.idNumber_lbl).toHaveText(this.idNumberLabelText);
    }

    async assertEmailLabelText(){
        await expect.soft(this.email_lbl).toHaveText(this.emailLabelText);
    }

    async assertMobileNumberLabelText(){
        await expect.soft(this.mobileNumber_lbl).toHaveText(this.mobileNumberLabelText);
    }

    
    async assertOfficialEmailLabelText(){
        await expect.soft(this.officialEmail_lbl).toHaveText(this.officialEmailLableText);
    }
    
    async assertUserNameValueText(userNameValue:string){
        await expect.soft(this.userNameValue_lbl).toHaveText(userNameValue);
    }
        
    async assertIDNumberValueText(idNumberValue:string){
        await expect.soft(this.idNumberValue_lbl).toHaveText(idNumberValue);
    }
            
    async assertEmailValueText(emailValue:string){
        await expect.soft(this.emailValue_lbl).toHaveText(emailValue);
    }
            
    async assertMobileNumberValueText(mobileNumberValue:string){
        await expect.soft(this.mobileNumberValue_lbl).toHaveText(mobileNumberValue);
    }
                
    async assertVerifyButtonText(){
        await expect.soft(this.verify_btn).toHaveText(this.verifyButtonText);
    }
                    
    async assertEmptyOfficailEmailInlineErrorText(){
        await expect.soft(this.officialEmailInlineError_lbl).toHaveText(this.emptyOfficialEmailInlineErrorText);
    }
                                  
    async assertWrongOffecialEmailInlineErrorText(){
        await expect.soft(this.officialEmailInlineError_lbl).toHaveText(this.wrongOfficialEmailInlineErrorText);
    }
                                      
    async assertUnOffecialEmailInlineErrorText(){
        await expect.soft(this.officialEmailInlineError_lbl).toHaveText(this.unofficailEmailInlineErrorText);
    }

    async assertCancelButtonText(){
        await expect.soft(this.cancel_btn).toHaveText(this.cancelButtonText);
    }
                          
    async assertSendButtonText(){
        await expect.soft(this.send_btn).toHaveText(this.sendButtonText);
    }
}

export default ImportResearchMaterialsPage;