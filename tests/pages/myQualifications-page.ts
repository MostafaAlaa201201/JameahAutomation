import { expect, type Locator, type Page } from '@playwright/test';

export class MyQualificationsPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly accept_btn:Locator;
    readonly disclaimer_lbl:Locator;
    readonly disclaimerDescription_lbl:Locator;
    readonly myQualifications_lbl:Locator;
    readonly myQualifications_icn:Locator;
    readonly disclaimer_icn:Locator;
    readonly noQualifications_icn:Locator;
    readonly noQualification_lbl:Locator;
    readonly addQualification_btn:Locator;
    readonly lastQualification_card:Locator;
    readonly showDetails_btn:Locator;
    readonly aggregateRateValue_icn:Locator;
    readonly degreeTitle_lbl:Locator;
    readonly titles_lbl:Locator;
    readonly values_lbl:Locator;
    readonly personalDetails_lbl:Locator;
    readonly notification_icn:Locator;
    readonly notification_lbl:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.accept_btn = page.locator("//input[@class='tetco-btn my-0']");
        this.disclaimer_lbl = page.locator(".br-section-label.col-12");
        this.disclaimerDescription_lbl = page.locator("span[class='d-flex align-items-center justify-content-center tx-20'] strong");
        this.disclaimer_icn = page.locator(".icon.ion-ios-information-outline.tx-48.px-2");
        this.myQualifications_icn = page.locator("(//*[name()='svg'])[6]");
        this.myQualifications_lbl = page.locator(".mb-0.mt-2");
        this.noQualifications_icn = page.locator(".icon.ion-ios-information-outline.tx-32.px-2");
        this.noQualification_lbl = page.locator("span[class='d-flex align-items-center justify-content-center'] strong");
        this.addQualification_btn = page.locator(".tetco-btn.my-0");
        this.lastQualification_card = page.locator("(//div[@class='br-section-wrapper mg-b-30 pd-20'])[3]");
        this.showDetails_btn = page.locator("(//i)[12]");
        this.aggregateRateValue_icn = page.locator("//div[@id='mq1']//div[contains(@class,'pcc-percents-wrapper')]");
        this.degreeTitle_lbl = page.locator("(//h3)[1]");
        this.titles_lbl = page.locator("//label[@class='tx-12  tx-medium  mg-b-2']");
        this.values_lbl = page.locator("//p[@class='tx-inverse tx-16 ']");
        this.personalDetails_lbl = page.locator("(//h5[@class='tx-dark col-12  mg-t-15 hielighted']//span[@class='border-bottom'])[1]");
        this.notification_icn = page.locator("//div[@id='mq1']//i[contains(@class,'fa fa-info-circle ml-2 fa-2x')]");
        this.notification_lbl = page.locator("//div[@id='mq1']//div[contains(@class,'row m-0 col-12 p-0 align-items-center')]");
    }
    //===========================Texts========================
    readonly myQualificationsLabelText = `مؤهلاتي`;
    readonly disclaimerTitleText = `إخلاء مسؤولية`;
    readonly disclaimerDescriptionText = `الجهة المانحة للمؤهل العلمي هي المسؤولة عن صحة أو إتاحة البيانات المعروضة.`;
    readonly acceptButtonText = `أقر وأوافق`
    readonly noQualificationText = `لم يتم العثور على أي مؤهلات مسجلة`;
    readonly addQualificationButtonText = `إضافة مؤهل`;
    readonly aggregateRateTitleText = `المعدل التراكمي`
    readonly graduationDateText = `تاريخ التخرج`;
    readonly aggregateRateTypeText = `نوع المعدل التراكمي`;
    readonly gradeText = `التقدير`;
    readonly facultyText = `الكلية`;
    readonly scientificDegreeTypeText = `نوع الدرجة العلمية`;
    readonly scientificDegreeText = `الدرجة العلمية (انجليزي)`;
    readonly educationEntitiyText = `المؤسسة التعليمية (انجليزي)`;
    readonly educationCountry_arText = `دولة الدراسة (عربي)`;
    readonly educationCountry_enText = `دولة الدراسة (انجليزي)`;
    readonly generalSpecialityText = `التخصص العام (انجليزي)`;
    readonly graduationYearText = `سنة التخرج`;
    readonly speciality_KSAText = `التخصص حسب التصنيف السعودي الموحد`;
    readonly educationMethodText = `أسلوب الدراسة`;
    readonly educationDurationText = `مدة برنامج الدراسة`;
    readonly adjustmentStateText = `حالة معادلة الشهادة (القرار)`;
    readonly adjustmentDegreeText = `تعادل بدرجة`;
    readonly certificateName_arText = `مسمى الشهادة باللغة العربية`;
    readonly certificateNameText = `مسمى الشهادة باللغة الصادر بها`;
    readonly adjustmentRemarkText = `ملاحظة معادلة الشهادة (نص القرار)`;
    readonly personalDetailsText = `البيانات الشخصية`;
    readonly name_arText = `الاسم (باللغة العربية)`;
    readonly name_enText = `الاسم (باللغة الإنجليزية)`;
    readonly emailText = `البريد الإلكتروني`;
    readonly nationalityText = `الجنسية`
    readonly notificationLabelText = `البيانات المعروضة هي حسب ما تم الحصول عليه من قبل الجهة المانحة للمؤهل. في حال وجود نقص أو عدم صحة البيانات المعروضة فإنه يمكنك تقديم طلب لتعديل المؤهل من خلال التوجه
لبوابة نظام معادلة الشهادات الجامعية`;
    //===========================Methods========================
    async clickAccept() {
        await this.accept_btn.click();
    }

    async clickAddQualification() {
        await this.addQualification_btn.click();
    }

    async clickShowDetails() {
        await this.showDetails_btn.click();
    }
    //========================asssertions=======================
    async assertMyQualificationsIconExist() {
        await expect.soft(this.myQualifications_icn).toBeVisible();
    }

    async assertMyQualificationTitleText() {
        await expect.soft(this.myQualifications_lbl).toHaveText(this.myQualificationsLabelText);
    }

    async assertDisclaimerIconExist() {
        await expect.soft(this.disclaimer_icn).toBeVisible();
    }

    async assertAggregateRateIconExist() {
        await expect.soft(this.aggregateRateValue_icn).toBeVisible();
    }
    //===================Text asssertions=======================
    async assertDisclaimerTitleText() {
        await expect.soft(this.disclaimer_lbl).toHaveText(this.disclaimerTitleText);
    }

    async assertDisclaimerDescriptionText() {
        await expect.soft(this.disclaimerDescription_lbl).toHaveText(this.disclaimerDescriptionText);
    }

    async assertAcceptButtonText() {
        await expect.soft(this.accept_btn).toHaveText(this.acceptButtonText);
    }

    async assertNoQualificationsIconExist() {
        await expect.soft(this.noQualifications_icn).toBeVisible();
    }

    async assertNoQualificationText() {
        await expect.soft(this.noQualification_lbl).toHaveText(this.noQualificationText);
    }

    async assertAddQualificationButtonText() {
        await expect.soft(this.addQualification_btn).toHaveText(this.addQualificationButtonText);
    }

    async assertQualificationsNumber() {
        await expect.soft(this.lastQualification_card).toBeVisible();
    }

    async assertPersonalDetailsTitleText() {
        await expect.soft(this.personalDetails_lbl).toHaveText(this.personalDetailsText);
    }
    
    async assertGraduactionDateText() {
        await expect.soft(this.titles_lbl.nth(0)).toHaveText(this.graduationDateText);
    }
        
    async assertAggregateRateTypeText() {
        await expect.soft(this.titles_lbl.nth(1)).toHaveText(this.aggregateRateTypeText);
    }
       
        
    async assertAggregateRateTitleText() {
        await expect.soft(this.titles_lbl.nth(2)).toHaveText(this.aggregateRateTitleText);
    }

    async assertDegreeText() {
        await expect.soft(this.titles_lbl.nth(3)).toHaveText(this.gradeText);
    }
                
    async assertFacultyText() {
        await expect.soft(this.titles_lbl.nth(4)).toHaveText(this.facultyText);
    }
                    
    async assertScientificDegreeTypeText() {
        await expect.soft(this.titles_lbl.nth(5)).toHaveText(this.scientificDegreeTypeText);
    }
                       
    async assertScientificDegreeText() {
        await expect.soft(this.titles_lbl.nth(6)).toHaveText(this.scientificDegreeText);
    }
                           
    async assertEducationEntityText() {
        await expect.soft(this.titles_lbl.nth(7)).toHaveText(this.educationEntitiyText);
    }
                                            
    async assertArabicEducationCountryText() {
        await expect.soft(this.titles_lbl.nth(8)).toHaveText(this.educationCountry_arText);
    }   

    async assertEnglishEducationCountryText() {
        await expect.soft(this.titles_lbl.nth(9)).toHaveText(this.educationCountry_enText);
    }  
                                          
    async assertGeneralSpecialityText() {
        await expect.soft(this.titles_lbl.nth(10)).toHaveText(this.generalSpecialityText);
    }     
                                          
    async assertGraduationYearText() {
        await expect.soft(this.titles_lbl.nth(11)).toHaveText(this.graduationYearText);
    }
                                              
    async assertKSASpecialityText() {
        await expect.soft(this.titles_lbl.nth(12)).toHaveText(this.speciality_KSAText);
    }
                                                  
    async assertEducationMethodText() {
        await expect.soft(this.titles_lbl.nth(13)).toHaveText(this.educationMethodText);
    }
                                                      
    async assertEducationDurationText() {
        await expect.soft(this.titles_lbl.nth(14)).toHaveText(this.educationDurationText);
    }
                                                          
    async assertAdjustmentStateText() {
        await expect.soft(this.titles_lbl.nth(15)).toHaveText(this.adjustmentStateText);
    }
                                                              
    async assertAdjustmentDegreeText() {
        await expect.soft(this.titles_lbl.nth(16)).toHaveText(this.adjustmentDegreeText);
    }
                                                                  
    async assertArabicCertificateNameText() {
        await expect.soft(this.titles_lbl.nth(17)).toHaveText(this.certificateName_arText);
    }
                                                                      
    async assertCertificateNameText() {
        await expect.soft(this.titles_lbl.nth(18)).toHaveText(this.certificateNameText);
    }
                                                                          
    async assertAdjustmentRemarkText() {
        await expect.soft(this.titles_lbl.nth(19)).toHaveText(this.adjustmentRemarkText);
    }
                                                                              
    async assertArabicNameText() {
        await expect.soft(this.titles_lbl.nth(20)).toHaveText(this.name_arText);
    }
                                                                                  
    async assertEnglishNameText() {
        await expect.soft(this.titles_lbl.nth(21)).toHaveText(this.name_enText);
    }
                                                                                      
    async assertEmailText() {
        await expect.soft(this.titles_lbl.nth(22)).toHaveText(this.emailText);
    }
                                                                                          
    async assertNationalityText() {
        await expect.soft(this.titles_lbl.nth(23)).toHaveText(this.nationalityText);
    }

    async assertGraduactionDateValue(graduationDateValue:string) {
        await expect.soft(this.values_lbl.nth(0)).toHaveText(graduationDateValue);
    }
    
    async assertScientificDegreeValue(scientificDegreeValue:string) {
        await expect.soft(this.values_lbl.nth(5)).toHaveText(scientificDegreeValue);
    }
        
    async assertEducationEntityValue(educationEntityValue:string) {
        await expect.soft(this.values_lbl.nth(6)).toHaveText(educationEntityValue);
    }
            
    async assertArabicEducationCountryValue(arabicEducationCountryValue:string) {
        await expect.soft(this.values_lbl.nth(7)).toHaveText(arabicEducationCountryValue);
    }
                
    async assertEnglishEducationCountryValue(englishEducationCountryValue:string) {
        await expect.soft(this.values_lbl.nth(8)).toHaveText(englishEducationCountryValue);
    }
                    
    async assertGeneralSpecialityValue(generalSpecialityValue:string) {
        await expect.soft(this.values_lbl.nth(9)).toHaveText(generalSpecialityValue);
    }
        
    async assertGraduationYearValue(graduationYearValue:string) {
        await expect.soft(this.values_lbl.nth(10)).toHaveText(graduationYearValue);
    }

    async assertEducationMethodValue(educationMethodValue:string) {
        await expect.soft(this.values_lbl.nth(12)).toHaveText(educationMethodValue);
    }
    
    async assertEducationDurationValue(educationDurationValue:string) {
        await expect.soft(this.values_lbl.nth(13)).toHaveText(educationDurationValue);
    }

    async assertAdjustmentStateValue(adjustmentStateValue:string) {
        await expect.soft(this.values_lbl.nth(14)).toHaveText(adjustmentStateValue);
    }
    
    async assertArabicNameValue(arabicNameValue:string) {
        await expect.soft(this.values_lbl.nth(19)).toHaveText(arabicNameValue);
    }
        
    async assertEnglishNameValue(englishNameValue:string) {
        await expect.soft(this.values_lbl.nth(20)).toHaveText(englishNameValue);
    }
            
    async assertEmailValue(emailValue:string) {
        await expect.soft(this.values_lbl.nth(21)).toHaveText(emailValue);
    }
}

export default MyQualificationsPage;