import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly controlBoard_icn:Locator;
    readonly controlBoard_lbl:Locator;
    readonly myQualifications_icn:Locator;
    readonly myQualifications_lbl:Locator;
    readonly myQualificationsDescription_lbl:Locator;
    readonly myQualifications_btn:Locator;
    readonly consultantRequest_icn:Locator;
    readonly consultantRequest_lbl:Locator;
    readonly consultantRequestDescription_lbl:Locator;
    readonly consultantRequest_btn:Locator;
    readonly educationSubjectsImport_icn:Locator;
    readonly educationSubjectsImport_lbl:Locator;
    readonly educationSubjectsImportDescription_lbl:Locator;
    readonly educationSubjectsImport_btn:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.controlBoard_icn = page.locator("//img[@src='/Content/Images/component/dashboard/controlpanel.svg']");
        this.controlBoard_lbl = page.locator("h4[class='mb-0 mt-2']");
        this.myQualifications_icn = page.locator("(//*[name()='svg'])[6]");
        this.myQualifications_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)");
        this.myQualificationsDescription_lbl = page.locator("//div[contains(@class,'row row-sm mg-t-20 dashboard')]//div[1]//div[1]//div[1]//p[1]");
        this.myQualifications_btn = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)");
        this.consultantRequest_icn = page.locator("(//*[name()='svg'])[7]");
        this.consultantRequest_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)");
        this.consultantRequestDescription_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)");
        this.consultantRequest_btn = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)"); 
        this.educationSubjectsImport_icn = page.locator("(//*[name()='svg'])[8]");
        this.educationSubjectsImport_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)");
        this.educationSubjectsImportDescription_lbl = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)");
        this.educationSubjectsImport_btn = page.locator("body > div:nth-child(5) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)");
    }
    //===========================Texts========================
    readonly controlBoardLabelText = `لوحة التحكم`;
    readonly myQualificationsLabelText = `مؤهلاتي`;
    readonly myQualificationsDescriptionText = `تمكن الخدمة من استعراض كافة المؤهلات العلمية الحاصل عليها المستخدم وذلك حسب المعلومات الواردة من قبل الجهات المانحة للمؤهل كما تمكن المستخدم من طلب إضافة مؤهل أو طلب تعديل على مؤهل`;
    readonly myQualificationsButtonText = `عرض مؤهلاتي`;
    readonly consultantRequestLabelText = `طلب مستشار`;
    readonly consultantRequestDescriptionText = `هي خدمة إلكترونية مخصصة للقطاعات الحكومية والخاصة تهدف إلى أتمتة طلبات الاستعانة بخبرات أعضاء هيئة التدريس في الجامعات الحكومية السعودية، بحيث تمكن الجهات من تقديم الطلب ليتم دراسته من قبل المختصين ثم الرد عليه بالقبول أو الإعتذار.`;
    readonly consultantRequestButtonText = `عرض طلب مستشار`;
    readonly educationSubjectsImportLabelText = `استيراد وفسح المواد العلمية`;
    readonly educationSubjectsImportDescriptionText = `تتيح هذه الخدمة للباحثيين في الجامعات والمؤسسات التعليمية والمراكز البحثية التي تحت اشراف وزارة التعليم بإصدار اذونات استيراد واذونات فسح المواد العلمية المستخدمة للأغراض البحثية في مؤسسات التعليم المطلوبة من خارج المملكة الموافقة للشروط والمعايير`;
    readonly educationSubjectsImportButtonText = 'طلب استيراد المواد البحثية';
    //===========================Methods========================
    async clickMyQualificationsButton() {
        await this.myQualifications_btn.click();
    }

    async clickConsultantRequestButton() {
        await this.consultantRequest_btn.click();
    }
    //===========================assertions========================
    async assertControlBoardIconExist() {
        await expect.soft(this.controlBoard_icn).toBeVisible();
    }

    async assertControlBoardLabelText() {
        await expect.soft(this.controlBoard_lbl).toHaveText(this.controlBoardLabelText);
    }

    async assertMyQualificationsIconExist() {
        await expect.soft(this.myQualifications_icn).toBeVisible();
    }

    async assertMyQualificationsLabelText() {
        await expect.soft(this.myQualifications_lbl).toHaveText(this.myQualificationsLabelText);
    }

    async assertMyQualificationsDescriptionText(){
        await expect.soft(this.myQualificationsDescription_lbl).toHaveText(this.myQualificationsDescriptionText);
    }

    async assertMyQualificationsButtonText(){
        await expect.soft(this.myQualifications_btn).toHaveText(this.myQualificationsButtonText);
    }

    async assertConsultantRequestIconExist() {
        await expect.soft(this.consultantRequest_icn).toBeVisible();
    }

    async assertConsultantRequestLabelText() {
        await expect.soft(this.consultantRequest_lbl).toHaveText(this.consultantRequestLabelText);
    }

    async assertConsultantRequestDescriptionText(){
        await expect.soft(this.consultantRequestDescription_lbl).toHaveText(this.consultantRequestDescriptionText);
    }

    async assertConsultantRequestButtonText(){
        await expect.soft(this.consultantRequest_btn).toHaveText(this.consultantRequestButtonText);
    }

    async assertEducationSubjectsImportIconExist() {
        await expect.soft(this.educationSubjectsImport_icn).toBeVisible();
    }

    async assertEducationSubjectsImportLabelText() {
        await expect.soft(this.educationSubjectsImport_lbl).toHaveText(this.educationSubjectsImportLabelText);
    }

    async assertEducationSubjectsImportDescriptionText(){
        await expect.soft(this.educationSubjectsImportDescription_lbl).toHaveText(this.educationSubjectsImportDescriptionText);
    }

    async assertEducationSubjectsImportButtonText(){
        await expect.soft(this.educationSubjectsImport_btn).toHaveText(this.educationSubjectsImportButtonText);
    }
}

export default DashboardPage;