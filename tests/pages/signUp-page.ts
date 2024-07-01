import { expect, type Locator, type Page} from '@playwright/test';

export class SignUpPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly id_tb:Locator;
    readonly birthDateGregorian:Locator;
    readonly birthDateHijri:Locator;
    readonly day_lt:Locator;
    readonly cancel_btn:Locator;
    readonly next_btn:Locator;
    readonly next2_btn:Locator;
    readonly next3_btn:Locator;
    readonly errorNotification_lbl:Locator;
    readonly errorNotification2_lbl:Locator;
    readonly errorNotification3_lbl:Locator;
    readonly firsNameAr:Locator;
    readonly firstName:Locator;
    readonly fatherName:Locator;
    readonly grandFatherName:Locator;
    readonly familyName:Locator;
    readonly maleGender:Locator;
    readonly mobile:Locator;
    readonly email:Locator;
    readonly notificationMethod:Locator;
    readonly save_btn:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.id_tb = page.locator('#NationalId');
        this.birthDateGregorian = page.locator('#BirthDateGregorian');
        this.birthDateHijri = page.locator('#BirthDateHijri');
        this.day_lt = page.locator('10');
        this.cancel_btn = page.locator("#prevBtn");
        this.next_btn = page.locator("//input[@class='tetco-btn mx-0'][1]");
        this.errorNotification_lbl = page.locator("div[class='validation-summary-errors'] ul");
        this.errorNotification2_lbl = page.locator("//div[@class='text-danger validation-summary-errors']");
        this.errorNotification3_lbl = page.locator("//div[@class='validation-summary-errors']");
        this.firsNameAr = page.locator("(//input[@id='FirstNameAr'])[1]");
        this.firstName = page.locator("(//input[@id='FirstNameEn'])[1]");
        this.fatherName = page.locator("(//input[@id='SecondNameEn'])[1]");
        this.grandFatherName = page.locator("(//input[@id='ThirdNameEn'])[1]");
        this.familyName = page.locator("(//input[@id='ForthNameEn'])[1]");
        this.maleGender = page.locator("#Male");
        this.mobile = page.locator("#txtMobile");
        this.email = page.locator("#txtMail");
        this.next2_btn = page.locator("//input[@class='tetco-btn mx-0'][1]");
        this.notificationMethod = page.locator("#notificationMethod");
        this.next3_btn = page.locator("#btnForgetPassword");
        this.save_btn = page.locator("//input[@class='tetco-btn']")
    }
    //===========================Texts========================
    readonly emptyIdAndBirthDayErrorNotificationText = `حقل رقم الهوية إلزاميحقل تاريخ الميلاد إلزامي`;
    readonly alreadyRegisteredErrorNotificationText = `المستخدم مسجل مسبقا على النظام`;
    readonly emptySignUpDataErrorText = `حقل First name إلزاميحقل Father's name إلزاميحقل Grandfather's name إلزاميحقل Family name إلزاميحقل البريد الإلكتروني إلزاميحقل رقم الجوال إلزاميحقل الجنس إلزامي`;
    readonly emptyNotificationErrorText = `حقل طريقة الإرسال إلزامي`;
    readonly saveButtonText = `حفظ`;
    //===========================Methods========================
    async typeID(id: string) {
        await this.id_tb.fill(id);
    }

    async clickBirthDateGregorian() {
        await this.birthDateGregorian.click();
    }

    async clickBirthDateHijri() {
        await this.birthDateHijri.click();
    }

    async clickDay() {
        await this.day_lt.click();
    }

    async fillHijriDate(date:string) {
        await this.birthDateHijri.fill(date);
        await this.next_btn.click();
        await this.page.waitForTimeout(10000);
    }

    async clickNext() {
        await this.next_btn.click();
    }

    async clickNext2() {
        await this.next2_btn.click();
    }

    async clickNext3() {
        await this.next3_btn.click();
    }

    async typeFirstName(firtNameValue: string) {
        await this.firstName.fill(firtNameValue);
    }

    async typeFatherName(fatherNameValue: string) {
        await this.fatherName.fill(fatherNameValue);
    }

    async typeGrandFatherName(grandFatherNameValue: string) {
        await this.grandFatherName.fill(grandFatherNameValue);
    }

    async typeFamilyFatherName(familyNameValue: string) {
        await this.familyName.fill(familyNameValue);
    }

    async selectGender() {
        await this.maleGender.click();
    }

    async selectNotificationMethod() {
        await this.notificationMethod.click();
    }

    async typeMobile(mobileValue: string) {
        await this.mobile.fill(mobileValue);
    }

    async typeEmail(emailValue: string) {
        await this.email.fill(emailValue);
    }

    async signUpStep1(idValue: string, date: string){
        await this.typeID(idValue);
        await this.fillHijriDate(date);
        await this.clickNext();
    }

    async signUpStep2(firtNameValue:string, fatherNameValue:string, grandFatherNameValue:string, familyNameValue:string, mobileValue:string, emailValue:string){
        await this.typeFirstName(firtNameValue);
        await this.typeFatherName(fatherNameValue);
        await this.typeGrandFatherName(grandFatherNameValue);
        await this.typeFamilyFatherName(familyNameValue);
        await this.selectGender();
        await this.typeMobile(mobileValue);
        await this.typeEmail(emailValue);
        await this.clickNext2();
    }

    async signUpStep3(){
        await this.selectNotificationMethod();
        await this.clickNext3();
    }
    //===========================Assertions========================
    async assertEmptyIdAndBDErrorNotificationText() {
        await expect(this.errorNotification_lbl).toHaveText(this.emptyIdAndBirthDayErrorNotificationText);
    }

    async assertAlreadyRegisteredErrorNotificationText() {
        await expect(this.errorNotification_lbl).toHaveText(this.alreadyRegisteredErrorNotificationText);
    }

    async assertEmptyDataErrorText() {
        await expect(this.errorNotification2_lbl).toHaveText(this.emptySignUpDataErrorText);
    }

    async assertFirstNameArText(firstNAmeArValue:string) {
        await expect(this.firsNameAr).toHaveText(firstNAmeArValue);
    }
    
    async assertEmptyNotificationErrorText() {
        await expect(this.errorNotification3_lbl).toHaveText(this.emptyNotificationErrorText);
    }

    async assertSaveButtonText() {
        await expect(this.save_btn).toHaveText(this.saveButtonText);
    }
}

export default SignUpPage;