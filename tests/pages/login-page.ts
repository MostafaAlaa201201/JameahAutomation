import { expect, type Locator, type Page} from '@playwright/test';

export class LoginPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly username_tb:Locator;
    readonly password_tb:Locator;
    readonly signIn_btn:Locator;
    readonly errorNotification_lbl:Locator;
    //===========================Texts========================
    readonly emptyErrorNotificationText = `فشل تسجيل الدخول – Login Failed
    أدخل اسم المستخدم – Enter Username
    أدخل كلمة المرور – Enter Password
    الأحرف غير متطابقة – Letters Not Matched
`;
    readonly wrongErrorNotificationText = `فشل تسجيل الدخول – Login Failed
    اسم مستخدم أو كلمة مرور خاطئة – Invalid Username or Password
`;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.username_tb = page.locator('#UserName');
        this.password_tb = page.locator('#Password');
        this.signIn_btn = page.locator("//input[@class='tetco-btn rm login-btn pull-right btn-block ']");
        this.errorNotification_lbl = page.locator("//div[@class='validation-summary-errors error-summary']");
    }
    //===========================Methods========================
    async typeUsername(username: string) {
        await this.username_tb.fill(username);
    }

    async typePassword(password: string) {
        await this.password_tb.fill(password);
    }

    async clickSignIn() {
        await this.signIn_btn.click();
    }

    async login(username: string, password: string){
        try {
            await this.typeUsername(username);
            await this.typePassword(password);
            await this.clickSignIn();
        } catch (error: any) {} 
    }

    //===========================Assertions========================
    async assertVisualErrorNotification() {
        await expect(this.page).toHaveScreenshot();
    }

    async assertEmptyErrorNotificationText() {
        await expect(this.errorNotification_lbl).toHaveText(this.emptyErrorNotificationText);
    }

    async assertWrongErrorNotificationText() {
        await expect(this.errorNotification_lbl).toHaveText(this.wrongErrorNotificationText);
    }
}

export default LoginPage;