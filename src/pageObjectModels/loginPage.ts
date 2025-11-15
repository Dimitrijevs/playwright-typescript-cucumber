// src/pages/LoginPage.ts
import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./basePage.ts";

export class LoginPage extends BasePage {
  private readonly loginLink: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly successBanner: Locator;
  private readonly errorBanner: Locator;

  constructor(page: Page) {
    super(page);

    this.loginLink = this.page.locator('a:has-text("Form Authentication")');
    this.usernameInput = this.page.locator("#username");
    this.passwordInput = this.page.getByLabel("Password");
    this.loginButton = this.page.locator('i:has-text("Login")');
    this.successBanner = this.page.locator(".flash.success");
    this.errorBanner = this.page.locator(".flash.error");
  }

  // Actions (public API)
  async goToLoginPage(): Promise<void> {
    await this.click(this.loginLink);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
    await this.waitForLoad();
  }

  async isSuccessBannerVisible(): Promise<boolean> {
    return await this.isVisible(this.successBanner);
  }

  async isErrorBannerVisible(): Promise<boolean> {
    return await this.isVisible(this.errorBanner);
  }
}
