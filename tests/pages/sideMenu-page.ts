import { type Locator, type Page } from '@playwright/test';

export class SideMenuPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly requestsFollowUp_btn:Locator;
    readonly inbox_btn:Locator;
    readonly myQualifications_btn:Locator;
    readonly educationSubjectsImport_btn:Locator;
    readonly researchMaterialsImportRequest_btn:Locator;
    readonly researchMaterialsInbox_btn:Locator;
    readonly researchMaterialsFollowUp_btn:Locator;
    readonly addServiceRequest_btn:Locator;
    readonly consultantRequest_btn:Locator;
    readonly cancelConsultantRequest_btn:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.requestsFollowUp_btn = page.locator("#nav-wf-myrequests");
        this.inbox_btn = page.locator("#nav-wf-mywork");
        this.myQualifications_btn = page.locator("#nav-qualifications-myqualifications");
        this.educationSubjectsImport_btn = page.locator(".br-menu-link.with-sub");
        this.researchMaterialsImportRequest_btn = page.locator("#nav-researchmaterial-index");
        this.researchMaterialsInbox_btn = page.locator("#nav-researchmaterial-inboxlist");
        this.researchMaterialsFollowUp_btn = page.locator("#nav-researchmaterial-followuplist");
        this.addServiceRequest_btn = page.locator("#nav-wf-agency");
        this.consultantRequest_btn = page.locator("#nav-wf-consultantcreate");
        this.cancelConsultantRequest_btn = page.locator("#nav-wf-consultantcancel");
    }
    //===========================Texts========================
    //===========================Methods========================
    async clickRequestsFollowUp() {
        await this.requestsFollowUp_btn.click();
    }

    async clickInbox() {
        await this.inbox_btn.click();
    }

    async clickMyQualifications() {
        await this.myQualifications_btn.click();
    }
    
    async clickResearchMaterialsImportRequest() {
        await this.educationSubjectsImport_btn.click();
        await this.researchMaterialsImportRequest_btn.click();
    }
        
    async clickResearchMaterialsInboxRequest() {
        await this.educationSubjectsImport_btn.click();
        await this.researchMaterialsInbox_btn.click();
    }

    async clickResearchMaterialsFollowUp() {
        await this.educationSubjectsImport_btn.click();
        await this.researchMaterialsFollowUp_btn.click();
    }

    async clickAddServiceRequest() {
        await this.addServiceRequest_btn.click();
    }
    
    async clickConsultantRequest() {
        await this.consultantRequest_btn.click();
    }
        
    async clickCancelConsultantRequest() {
        await this.cancelConsultantRequest_btn.click();
    }
    //========================asssertions=======================
}

export default SideMenuPage;