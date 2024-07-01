import { expect, type Locator, type FrameLocator, type Page } from '@playwright/test';
import path from 'path';

export class AddQualificationPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly myRequests_lbl:Locator;
    readonly addQualification_btn:Locator;
    readonly addQualification_icn:Locator;
    readonly addQualification_lbl:Locator;
    readonly requestDetails_iframe:FrameLocator;
    readonly qualification_lbl:Locator;
    readonly new_icn:Locator;
    readonly requestDetails_lbl:Locator;
    readonly userDetails_lbl:Locator;
    readonly id_lbl:Locator;
    readonly id_value:Locator;
    readonly arabicName_lbl:Locator;
    readonly arabicName_value:Locator;
    readonly englishName_lbl:Locator;
    readonly englishName_value:Locator;
    readonly nationality_lbl:Locator;
    readonly nationality_value:Locator;
    readonly mobileNumber_lbl:Locator;
    readonly mobileNumber_value:Locator;
    readonly email_lbl:Locator;
    readonly email_value:Locator;
    readonly qualificationDetails_lbl:Locator;
    readonly educationSector_dd:Locator;
    readonly emptyInlineError_lbl:Locator;
    readonly generalEducationError_lbl:Locator;
    readonly qualificationSource_dd:Locator;
    readonly qualificationOutsideKSAError_lbl:Locator;
    readonly educationInstitution_tb:Locator;
    readonly universityNumb_tb:Locator;
    readonly educationGrade_dd:Locator;
    readonly faculty_tb:Locator;
    readonly department_tb:Locator;
    readonly generalSpeciality_tb:Locator;
    readonly educationMethod_dd:Locator;
    readonly aggregateRateType_dd:Locator;
    readonly aggregareRate_tb:Locator;
    readonly graduationDateHijri_tb:Locator;
    readonly graduationDate_tb:Locator;
    readonly grade_dd:Locator;
    readonly attachment_btn:Locator;
    readonly popupAttachment_btn:Locator;
    readonly popupAttchmentType_dd:Locator;
    readonly confirmAttachment_btn:Locator
    readonly attachmentError_lbl:Locator;
    readonly send_btn:Locator;
    readonly cancel_btn:Locator;
    readonly cancelPopupTitle_lbl:Locator;
    readonly cancelPopupDescription_lbl:Locator;
    readonly cancelPopupClose_btn:Locator;
    readonly cancelPopupCancel_btn:Locator;
    readonly cancelPopupConfirm_btn:Locator;
    readonly success_icn:Locator;
    readonly successMessage_lbl:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.addQualification_btn = page.locator(".tetco-btn.my-0");
        this.addQualification_icn = page.locator(".icon.ion-ios-photos-outline");
        this.addQualification_lbl = page.locator(".mb-0.mt-2");
        this.requestDetails_iframe = page.frameLocator("#PegaGadgetIfr");
        this.myRequests_lbl = this.requestDetails_iframe.locator("//div[@class='content-item content-label item-1 flex flex-row dataLabelWrite heading_1_dataLabelWrite']");
        this.qualification_lbl = this.requestDetails_iframe.locator("//span[@class='workarea_header_titles']");
        this.new_icn = this.requestDetails_iframe.locator("div[class='content-item content-field item-1 remove-top-spacing remove-left-spacing flex flex-row badge-bg-info centered dataValueRead'] span[class='badge_text']")
        this.requestDetails_lbl = this.requestDetails_iframe.locator("div[class='content-item content-field item-1 flex flex-row dataValueRead'] span[class='assignment_title']");
        this.userDetails_lbl = this.requestDetails_iframe.locator("//div[@class='content-item content-layout item-2 flex flex-row']//div[@class='header-content']/h2[1]");
        this.id_lbl = this.requestDetails_iframe.locator("body > div:nth-child(24) > form:nth-child(2) > div:nth-child(14) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)");
        this.id_value = this.requestDetails_iframe.locator("div[class='content-item content-field item-1 flex'] div[class='field-item dataValueRead'] span");
        this.arabicName_lbl = this.requestDetails_iframe.locator("body > div:nth-child(24) > form:nth-child(2) > div:nth-child(14) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)");
        this.arabicName_value = this.requestDetails_iframe.locator("div[class='content-item content-field item-2 flex'] div[class='field-item dataValueRead'] span");
        this.englishName_lbl = this.requestDetails_iframe.locator("body > div:nth-child(24) > form:nth-child(2) > div:nth-child(14) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1)");
        this.englishName_value = this.requestDetails_iframe.locator("div[class='content-item content-field item-3 flex'] div[class='field-item dataValueRead'] span");
        this.nationality_lbl = this.requestDetails_iframe.locator("body > div:nth-child(24) > form:nth-child(2) > div:nth-child(14) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > span:nth-child(1)");
        this.nationality_value = this.requestDetails_iframe.locator("div[class='content-item content-field item-4 flex'] div[class='field-item dataValueRead'] span");
        this.mobileNumber_lbl = this.requestDetails_iframe.locator("body > div:nth-child(24) > form:nth-child(2) > div:nth-child(14) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > span:nth-child(1)");
        this.mobileNumber_value = this.requestDetails_iframe.locator("div[class='content-item content-field item-5 flex'] div[class='field-item dataValueRead'] span");
        this.email_lbl = this.requestDetails_iframe.locator("body > div:nth-child(24) > form:nth-child(2) > div:nth-child(14) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > span:nth-child(1)");
        this.email_value = this.requestDetails_iframe.locator("div[class='content-item content-field item-6 flex'] div[class='field-item dataValueRead'] span");
        this.qualificationDetails_lbl = this.requestDetails_iframe.locator("//div[@class='content-item content-layout item-3 flex flex-row']//div[@class='header-content']/h2[1]");
        this.educationSector_dd = this.requestDetails_iframe.locator("//select[@id='3ed60d4d']");
        this.emptyInlineError_lbl = this.requestDetails_iframe.locator(".iconError.dynamic-icon-error");
        this.generalEducationError_lbl = this.requestDetails_iframe.locator("body > div:nth-child(24) > form:nth-child(2) > div:nth-child(14) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
        this.qualificationSource_dd = this.requestDetails_iframe.locator("//select[@id='15ced3b1']");
        this.qualificationOutsideKSAError_lbl = this.requestDetails_iframe.locator("//body//div[@id='PEGA_HARNESS']//div[contains(@class,'content-item content-layout item-3 flex flex-row')]//div[contains(@class,'content-item content-layout item-3 flex flex-row')]//div[contains(@class,'content-item content-paragraph item-1 flex')]//div[1]");
        this.educationInstitution_tb = this.requestDetails_iframe.locator("//input[@id='ef4a1f2b']");
        this.universityNumb_tb = this.requestDetails_iframe.locator("//input[@id='a7d3c14d']");
        this.educationGrade_dd = this.requestDetails_iframe.locator("//select[@id='b5e8e99e']");
        this.faculty_tb = this.requestDetails_iframe.locator("//input[@id='9488ddeb']");
        this.department_tb = this.requestDetails_iframe.locator("//input[@id='ae1f8f9d']");
        this.generalSpeciality_tb = this.requestDetails_iframe.locator("//input[@id='3423e54e']");
        this.educationMethod_dd = this.requestDetails_iframe.locator("//select[@id='d760adbc']");
        this.aggregateRateType_dd = this.requestDetails_iframe.locator("//select[@id='899aa9f9']");
        this.aggregareRate_tb = this.requestDetails_iframe.locator("#ef018ab9");
        this.grade_dd = this.requestDetails_iframe.locator("//select[@id='778c9810']");
        this.graduationDateHijri_tb = this.requestDetails_iframe.locator("//input[@id='401c283c']");
        this.graduationDate_tb = this.requestDetails_iframe.locator("//input[@id='41f7f5cc']");
        this.attachment_btn = this.requestDetails_iframe.locator("//i[@class='pi pi-upload pi-empty-state']");
        this.popupAttachment_btn = this.requestDetails_iframe.locator("//input[@id='$PpyAttachmentPage$ppxAttachName']");
        this.popupAttchmentType_dd = this.requestDetails_iframe.locator("//select[@id='1cb3e16d']");
        this.confirmAttachment_btn = this.requestDetails_iframe.locator("//button[@id='ModalButtonSubmit']");
        this.attachmentError_lbl = this.requestDetails_iframe.locator("//div[@id='RULE_KEY']//div[@id='RULE_KEY']//div[contains(@class,'layout-content-stacked content-stacked')]//li[@id='Error_.CaseAttachments']")
        this.send_btn = this.requestDetails_iframe.locator("//div[@class='content-item content-field item-2 remove-top-spacing remove-bottom-spacing flex flex-row dataValueRead']//span/button");
        this.cancel_btn = this.requestDetails_iframe.locator("//div[@class='content-item content-field item-1 remove-top-spacing remove-bottom-spacing flex flex-row flex-grow-1 dataValueRead']//span/button");
        this.cancelPopupTitle_lbl = this.requestDetails_iframe.locator("#modaldialog_hd");
        this.cancelPopupDescription_lbl = this.requestDetails_iframe.locator("//div[@id='modalContent']//div[@id='modaldialog_con_dirty']");
        this.cancelPopupClose_btn = this.requestDetails_iframe.locator("//div[@id='modaldialog_hd']//button[@id='container_close']");
        this.cancelPopupCancel_btn = this.requestDetails_iframe.locator("//div[@id='modalContent']//button[contains(@name,'pyDirtyCheckConfirm_pyWorkPage_9')]");
        this.cancelPopupConfirm_btn = this.requestDetails_iframe.locator("//div[@id='modalContent']//button[contains(@name,'pyDirtyCheckConfirm_pyWorkPage_6')]");
        this.success_icn = this.requestDetails_iframe.locator("//div[contains(@class,'success-icon')]");
        this.successMessage_lbl = this.requestDetails_iframe.locator("//p[@id='CV']");
    }
    //===========================Texts========================
    readonly addQualificationsLabelText = `طلب إضافة مؤهل`;
    readonly qualificationLabelText = `مؤهل`;
    readonly newText = `جديد`;
    readonly requestDetailsText = `بيانات الطلب`
    readonly userDetailsText = `بيانات المستفيد`;
    readonly idLabelText = `رقم الهوية`;
    readonly arabicNameLabelText = `الاسم باللغة العربية`;
    readonly englishNameLabelText = `الاسم باللغة الإنجليزية`;
    readonly nationalityLabelText = `الجنسية`;
    readonly mobileNumberLabelText = `رقم الجوال`;
    readonly emailLabelText = `البريد الإلكتروني`;
    readonly qualificationDetailsLabelText = `بيانات المؤهل العلمي`;
    readonly emptyInlineErrorLabelText = `لا يمكن أن تكون القيمة فارغة`;
    readonly generalEducationErrorLabelText = `عفوًا,لا يمكنك الاستمرار ,حتى تتمكن من تقديم طلبك ارجو التوجه لـ البوابة الإلكترونية لنظام نتائجي`;
    readonly QualificationOutsideKSAErrorText = `عفوًا,لا يمكنك الاستمرار,حتى تتمكن من تقديم طلبك ارجو التوجه لبوابة نظام معادلة الشهادات الجامعية`;
    readonly attachmentErrorText = `مرفقات الطلب: يجب إرفاق نسخة من وثيقة التخرج`;
    readonly sendButtonText = `إرسال`;
    readonly cancelButtonText = `إلغاء`;
    readonly cancelPopupTitleText = `تنبيه`;
    readonly cancelPopupDescriptionText = `سيتم إلغاء التغييرات التي قمت بتنفيذها والخروج من الشاشة هل ترغب بالاستمرار؟`;
    readonly cancelPopupCancelButtonText = `إلغاء`;
    readonly cancelPopupConfirmButtonText = `موافق`;
    readonly successMessageText = `تم تسليم طلب إضافة مؤهل بنجاح`;
    //===========================Methods========================
    async clickAddQualification() {
        await this.addQualification_btn.click();
        const slowExpect = expect.configure({ timeout: 90000 });
        await slowExpect.soft(this.myRequests_lbl).toBeVisible();
        await this.page.reload();
        await slowExpect.soft(this.qualification_lbl).toHaveText(this.qualificationLabelText);
    }

    async selectUniversityEducation() {
        await this.educationSector_dd.selectOption("تعليم عام");
        await this.page.waitForTimeout(3000);
        await this.educationSector_dd.click();
        await this.educationSector_dd.selectOption("تعليم جامعي");
    }

    async selectGeneralEducation() {
        await this.educationSector_dd.selectOption("تعليم عام");
    }

    async selectEmptyEducation() {
        await this.educationSector_dd.click();
        await this.educationSector_dd.click();
    }

    async selectInsideKSA() {
        await this.qualificationSource_dd.selectOption("داخل المملكة");
    }

    async selectOutsideKSA() {
        await this.qualificationSource_dd.selectOption("خارج المملكة");
    }

    async typeEducationInstitution() {
        await this.educationInstitution_tb.fill("جامعة الجوف");
    }

    async typeUniversityNumber() {
        await this.universityNumb_tb.fill("123");
    }
    
    async selectEducationGrade() {
        await this.educationGrade_dd.selectOption("بكالوريوس");
    }
    
    async typeFaculty() {
        await this.faculty_tb.fill("الهندسة");
    }
    
    async typeDepartment() {
        await this.department_tb.fill("حاسبات ومعلومات");
    }
   
    async typeGeneralSpeciality() {
        await this.generalSpeciality_tb.fill("حاسبات");
    }
   
    async selectEducationMethod() {
        await this.educationMethod_dd.selectOption("انتظام كلي");
    }

    async selectAggregateRateType() {
        await this.aggregateRateType_dd.selectOption("أخرى");
    }

    async typeAggregateRate() {
        await this.aggregareRate_tb.fill("5");
        await this.page.waitForTimeout(1000);
        await this.aggregareRate_tb.fill("5");
    }
    
    async selectGrade() {
        await this.grade_dd.selectOption("ممتاز");
    }

    async typeGraducationDateHijri() {
        await this.graduationDateHijri_tb.fill(`27/7/1445`);
    }
    
    async typeGraducationDate() {
        await this.graduationDate_tb.fill(`08/02/2024`);
    }

    async selectAttachment(){
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.popupAttachment_btn.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join(__dirname, 'PlaywrightFramework.jpg'));
    }

    async attachGraduationCertificate() {
        await this.attachment_btn.click();
        await this.selectAttachment();
        await this.popupAttchmentType_dd.selectOption("وثيقة التخرج")
        await this.confirmAttachment_btn.click();
    }

    async finishAddQualificationSteps(){
        await this.selectUniversityEducation();
        await this.selectInsideKSA();
        await this.typeEducationInstitution();
        await this.typeUniversityNumber();
        await this.selectEducationGrade();
        await this.typeFaculty();
        await this.typeDepartment();
        await this.typeGeneralSpeciality();
        await this.selectEducationMethod();
        await this.selectAggregateRateType();
        await this.typeAggregateRate();
        await this.selectGrade();
        await this.typeGraducationDateHijri();
        await this.typeGraducationDate()
        await this.attachGraduationCertificate();
        await this.clickSend();
    }

    async finishAddQualificationStepsWithoutAttachment(){
        await this.selectUniversityEducation();
        await this.selectInsideKSA();
        await this.typeEducationInstitution();
        await this.typeUniversityNumber();
        await this.selectEducationGrade();
        await this.typeFaculty();
        await this.typeDepartment();
        await this.typeGeneralSpeciality();
        await this.selectEducationMethod();
        await this.selectAggregateRateType();
        await this.typeAggregateRate();
        await this.selectGrade();
        await this.typeGraducationDateHijri();
        await this.typeGraducationDate()
        await this.clickSend();
    }

    async clickSend() {
        await this.send_btn.click();
    }

    async clickCancel() {
        await this.cancel_btn.click();

        for (let i = 0; i < 20; i++) {
            await this.page.keyboard.press('ArrowUp', {delay:10});
        }
        // await this.page.evaluate(() => {
            // window.scrollTo(0,0);
            // document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        // });
    }

    async clickCancelPopupCloseButton(){
        await this.cancelPopupClose_btn.click();
    }

    async clickCancelPopupCancelButton(){
        await this.cancelPopupCancel_btn.click();
    }
    
    async clickCancelPopupConfirmButton(){
        await this.cancelPopupConfirm_btn.click();
    }
    //=========================assertions=========================
    async assertSendButtonIsDisabled(){
        await expect.soft(this.send_btn).toBeDisabled();
    }
    //========================Text asssertions=======================
    async assertAddQualificationIconExist() {
        await expect.soft(this.addQualification_icn).toBeVisible();
    }

    async assertAddQualificationsLabelText() {
        await expect.soft(this.addQualification_lbl).toHaveText(this.addQualificationsLabelText);
    }

    async assertQualificationLabelText() {
        await expect.soft(this.qualification_lbl).toHaveText(this.qualificationLabelText);
    }

    async assertNewText() {
        await expect.soft(this.new_icn).toHaveText(this.newText);
    }

    async assertRequestDetailsText() {
        await expect.soft(this.requestDetails_lbl).toHaveText(this.requestDetailsText);
    }

    async assertUserDetailsText() {
        await expect.soft(this.userDetails_lbl).toHaveText(this.userDetailsText);
    }
  
    async assertIdLabelText() {
        await expect.soft(this.id_lbl).toHaveText(this.idLabelText);
    }

    async assertIdValue(id: string) {
        await expect.soft(this.id_value).toHaveText(id);
    }

    async assertArabicNameLabelText() {
        await expect.soft(this.arabicName_lbl).toHaveText(this.arabicNameLabelText);
    }

    async assertArabicNameValue(arabicName: string) {
        await expect.soft(this.arabicName_value).toHaveText(arabicName);
    }
    
    async assertEnglishNameLabelText() {
        await expect.soft(this.englishName_lbl).toHaveText(this.englishNameLabelText);
    }

    async assertEnglishNameValue(englishName: string) {
        await expect.soft(this.englishName_value).toHaveText(englishName);
    }

    async assertNationalityLabelText() {
        await expect.soft(this.nationality_lbl).toHaveText(this.nationalityLabelText);
    }

    async assertNationalityValue() {
        await expect.soft(this.nationality_value).toHaveText(`المملكة العربية السعودية`);
    }

    async assertMobileNumberLabelText() {
        await expect.soft(this.mobileNumber_lbl).toHaveText(this.mobileNumberLabelText);
    }

    async assertMobileNumberValue(mobileNumber: string) {
        await expect.soft(this.mobileNumber_value).toHaveText(mobileNumber);
    }

    async assertEmailLabelText() {
        await expect.soft(this.email_lbl).toHaveText(this.emailLabelText);
    }

    async assertEmailValue(email: string) {
        await expect.soft(this.email_value).toHaveText(email);
    }

    async assertQualificationDetailsLabelText() {
        await expect.soft(this.qualificationDetails_lbl).toHaveText(this.qualificationDetailsLabelText);
    }

    async assertEmptyInlineErrorLabelText() {
        await expect.soft(this.emptyInlineError_lbl).toHaveText(this.emptyInlineErrorLabelText);
    }

    async assertGeneralEducationErrorLabelText() {
        await expect.soft(this.generalEducationError_lbl).toHaveText(this.generalEducationErrorLabelText);
    }

    async assertQualificationOutsideKSAErrorText() {
        await expect.soft(this.qualificationOutsideKSAError_lbl).toHaveText(this.QualificationOutsideKSAErrorText);
    }

    async assertSendButtonText() {
        await expect.soft(this.send_btn).toHaveText(this.sendButtonText);
    }
    
    async assertCancelButtonText() {
        await expect.soft(this.cancel_btn).toHaveText(this.cancelButtonText);
    }
    
    async assertCancelPopupTitleText() {
        await expect.soft(this.cancelPopupTitle_lbl).toHaveText(this.cancelPopupTitleText);
    }
        
    async assertCancelPopupDescriptionText() {
        await expect.soft(this.cancelPopupDescription_lbl).toHaveText(this.cancelPopupDescriptionText);
    }
            
    async assertCancelPopupCancelButtonText() {
        await expect.soft(this.cancelPopupCancel_btn).toHaveText(this.cancelPopupCancelButtonText);
    }

    async assertCancelPopupConfirmButtonText() {
        await expect.soft(this.cancelPopupConfirm_btn).toHaveText(this.cancelPopupConfirmButtonText);
    }
    
    async assertEmptyAttachmentErrorText() {
        const slowExpect = expect.configure({ timeout: 30000 });
        await slowExpect.soft(this.attachmentError_lbl).toHaveText(this.attachmentErrorText);
    }
        
    async assertSuccessIcon() {
        await expect.soft(this.success_icn).toBeVisible();
    }

    async assertSuccessMessageText() {
        await expect.soft(this.successMessage_lbl).toHaveText(this.successMessageText);
    }
}

export default AddQualificationPage;